import React from "react";


function Dailies(dailies){
  if(!dailies){
    return(
      <p>NO Dailies added yet!</p>
    )
  }
    return(
      <>
      <ul>
        {dailies.map(daily =>(
          <li>
            {daily.dailyText}
          </li>
        ))}
      </ul>
      </>
    );
}

export default Dailies;