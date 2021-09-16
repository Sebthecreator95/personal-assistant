import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../authentication/UserContext";
import Alert from "./Alert";


function EventsForm({addEvent}){

    const { currentUser } = useContext(UserContext);
    const history = useHistory();

    const [formData, setFormData] = useState({
        name: "",
        time: "",
        date: "",
        Icon: "",
    });

    const [formErrors, setFormErrors] = useState([]);


    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await addEvent(formData);
        if (result.success) {
          history.push(`/${currentUser.username}`);
        } else {
          setFormErrors(result.errors);
        }
      }
    
      /** Update form data field */
      function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(l => ({ ...l, [name]: value }));
      }

    return(
    <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          />
        </div>
        <div className="form-group">
            <label>Time</label>
            <input
            name="time"
            className="form-control"
            value={formData.time}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Date</label>
            <input
            name="date"
            type="date"
            min="2000-01-01" 
            max="2050-12-31"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label>Icon</label>
            <input
            name="icon"
            className="form-control"
            value={formData.icon}
            onChange={handleChange}
            />
        </div>
        {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }
        <button
        className="btn btn-primary float-right"
        onSubmit={handleSubmit}
        >
            Submit
        </button>
  </form>
    );
}

export default EventsForm;