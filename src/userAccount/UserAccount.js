import React, {useContext, useEffect} from "react";
import UserContext from "../authentication/UserContext";
import useUpdateState from "../hooks/useUpdateState";
import CalendarSection from "./CalendarSection";
import DailiesSection from "./DailiesSection";
import EventsForm from "./forms/EventsForm";
import PamApi from "../api/api";
import "./UserAccount.css"


function UserAccount(){

const [events, updateEvents] = useUpdateState([]);
const { currentUser } = useContext(UserContext);
    useEffect(() => {
        async function getEvents() {
          let events = await PamApi.getEvents(currentUser.userId);
          updateEvents(events);
        }
        getEvents();
      }, []);
    console.log(events);

    return(
    <div class="user-account">
                <div class="dailies-section" md={3}>
                    <DailiesSection/>
                </div>
                <div class="calendar-section" md={6}>
                    <CalendarSection />
                </div>
                <div class="right-side" md={3}>
                <EventsForm class="event-form" addEvent={updateEvents}/>
                </div>
    </div>
);
}







export default UserAccount;