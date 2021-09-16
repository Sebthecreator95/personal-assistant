import React, { useState} from "react";
import{ Container, Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Events from "./Events";





function CalendarSection(){
  const [date, setDate] = useState(new Date());
  const dateStringFormat = date.toString().slice(4,15)

    return(
    <Container fluid="md">
      <Row>
        <Col>
        <h6><b>Today is:</b>{dateStringFormat}</h6>
        </Col>
      </Row>
      <Calendar
      onChange={setDate}
      value={date} />
      <Events dateStringFormat={dateStringFormat}/>
      
    </Container>
    );
}
export default CalendarSection;