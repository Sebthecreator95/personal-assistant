import React from "react";


function Dailies(dailies){
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