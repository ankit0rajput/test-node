import { Outlet } from "react-router-dom";
import EventNaigation from  '../components/EventsNavigation'
function EventLayout(){
    return (
        <>
            <EventNaigation/>
            <Outlet/>
        </>
    )
}

export default EventLayout;