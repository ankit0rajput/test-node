
import EventsList from "../components/EventsList"
import { useLoaderData } from "react-router-dom";

const EventsPage = () =>{
    const events = useLoaderData()
    if(events.isError){
        return <p>{events.message}</p>
    }
    return (
        <>
            <EventsList events={events}/>  
        </>
    )
}

export default EventsPage;

export async function loader(){
    const response = await fetch("http://localhost:8080/events")
    if(!response.ok){
        throw new Response(JSON.stringify({message:'could not fetch events'}),{status:500})
    }else{
        const resData = await response.json()
        return resData.events;
    }
}