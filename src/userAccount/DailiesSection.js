import React,{useEffect, useContext} from "react";
import { Container, Row, Col } from 'reactstrap';
import UserContext from "../authentication/UserContext";
import PamApi from "../api/api";
import DailiesForm from "./forms/DailiesForm";
import Dailies from "./Dailies";
import useUpdateState from "../hooks/useUpdateState";

function DailiesSection(){
  const [dailies, updateDailies] = useUpdateState([]);
  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    async function getDailies() {
      let dailies = await PamApi.getDailies(currentUser.userId);
      updateDailies(dailies);
    }
    getDailies();
  }, []);
    return(
    <Container fluid="md">
      <Row>
        <Col>
        <h4>DAILIES</h4>
        </Col>
      </Row>
      <DailiesForm addDaily={updateDailies}/>
      <Dailies dailies={dailies}/>
    </Container>
    );
}

export default DailiesSection;