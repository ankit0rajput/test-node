import { redirect, useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem'


const EventDetailPage = () =>{
    const navigate = useNavigate()
    const data = useRouteLoaderData('event-detail')
    async function deleteItemHandler(){
        try{
            const isOk = window.confirm('Are you sure ?')
            if(isOk){
                const res = await fetch('http://localhost:8080/events/'+ data.event.id,{method:'delete'})
                if(!res.ok){
                    throw Error({message:'cound not delete'},{status:500})
                }
                navigate('/events')
            }
        }catch(err){
            throw Error({message:'cound '},{status:501})
        }
    }
    return (
        <>
            <EventItem event={data.event} deleteItemHandler={deleteItemHandler}/>
            <h1>Event Details </h1>
        </>
    )
}

export default EventDetailPage;

export async function loader({request,params}){
    const response = await fetch(`http://localhost:8080/events/${params.eventId}`)   
    if(!response.ok){
        throw new Response(JSON.stringify({message:'could not fetch events details'}),{status:500})
    }else{
        const resData = await response.json()
        return resData
    }
}