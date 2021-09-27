import React, { useContext } from "react";
import PamApi from "../api/api";
import UserContext from "../authentication/UserContext";

function Events(dateStringFormat){

  function getMonth(dateStringFormat){
    return dateStringFormat.slice(0,3)
  }
  const { currentUser } = useContext(UserContext);
  const month = getMonth(dateStringFormat);
  const day = dateStringFormat.slice(4,2);
  const year = dateStringFormat.slice(7,4);
  let userId = currentUser.userId;
  const events = PamApi.getDateEvents(userId, month, day, year);
  if(!events){
    return(
      <p>No events</p>
    )
  }
  return(
    <div class ="events">
      {events.map(event =>
          <div class="event">
            <div class>
              <img src={event.icon}></img>
            </div>
            <h1>{event.name}</h1><small>{event.date}</small>
            <h4>{event.time}</h4>
          </div>
          )
      }
    </div>
    );
}
export default Events;