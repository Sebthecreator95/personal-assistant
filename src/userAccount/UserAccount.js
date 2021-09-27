import React, {useContext, useEffect} from "react";
import{Container,Col} from 'react-bootstrap';
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
        <Col md={3}>
            <DailiesSection/>
        </Col>
        <Col md={6}>
            <CalendarSection />
        </Col>
        <Col md={3}>
        <EventsForm addEvent={updateEvents}/>
        </Col>
    </Container>
);
}







export default UserAccount;