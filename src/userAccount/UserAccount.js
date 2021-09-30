import React, {useContext, useEffect} from "react";
import { Container, Col, Table } from "reactstrap";
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
    <Container >
        <Table class="table">
                <Col class="dailies-section" md={3}>
                    <DailiesSection/>
                </Col>
                <Col class="calendar-section" md={6}>
                    <CalendarSection />
                </Col>
                <Col class="right-side" md={3}>
                <EventsForm class="event-form" addEvent={updateEvents}/>
                </Col>
        </Table>
    </Container>
);
}







export default UserAccount;