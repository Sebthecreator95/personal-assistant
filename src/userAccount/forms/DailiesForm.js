import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../authentication/UserContext";
import Alert from "./Alert";

function DailiesForm({addDaily}){

    const { currentUser } = useContext(UserContext);
    const history = useHistory();

    const [formData, setFormData] = useState({
        dailyText: "",
    });

    const [formErrors, setFormErrors] = useState([]);


    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await addDaily(formData);
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
          <textarea
          name="dailyText"
          className="form-control"
          placeholder="add a daily"
          value={formData.dailyText}
          onChange={handleChange}
          required
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

export default DailiesForm;