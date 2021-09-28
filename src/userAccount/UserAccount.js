import React, {useContext, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import UserContext from "../authentication/UserContext";
import useUpdateState from "../hooks/useUpdateState";
import CalendarSection from "./CalendarSection";
import DailiesSection from "./DailiesSection";
import EventsForm from "./forms/EventsForm";
import PamApi from "../api/api";


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
    <Container fluid>
        <Col class="dailies-section" md={3}>
            <DailiesSection/>
        </Col>
        <Col class="calendar-section" md={6}>
            <CalendarSection />
        </Col>
        <Col class="right-side" md={3}>
        <EventsForm class="event-form" addEvent={updateEvents}/>
        </Col>
    </Container>
);
}







export default UserAccount;