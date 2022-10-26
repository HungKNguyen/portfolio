import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Stack} from "react-bootstrap";
import {TabBar} from "./component/TabBar";
import {About} from "./component/About";
import {Technologies} from "./component/Technologies";
import {Languages} from "./component/Languages";
import {Work} from "./component/Work";
import {Education} from "./component/Education";
import {HireMe} from "./component/HireMe";
import {Contacts} from "./component/Contacts";
import {Projects} from "./component/Projects";

function App() {
  return (
    <Stack className="App py-5" fluid gap={5}>
        <Row><TabBar /></Row>
        <Row className="justify-content-lg-center py-5" id="about">
            <Col lg={8}><About/></Col>
        </Row>
        <Row className="justify-content-lg-center py-5"  id="skills">
            <Col lg={8}><Languages/></Col>
        </Row>
        <Row className="justify-content-lg-center py-5">
            <Col lg={10}><Technologies/></Col>
        </Row>
        <Row className="justify-content-lg-center py-5"  id="experiences">
            <Col lg={9}><Work/></Col>
        </Row>
        <Row className="justify-content-lg-center py-5 my_placeholder">
            <Col className="my_placeholder" lg={10}><Projects/></Col>
        </Row>
        <Row className="justify-content-lg-center py-5 my_placeholder">
            <Col className="my_placeholder" lg={8}><Education/></Col>
        </Row>
        <Row className="justify-content-lg-center py-5 my_placeholder"  id="hiring">
            <Col className="my_placeholder" lg={8}><HireMe/></Col>
        </Row>
        <Row className="my_placeholder"><Contacts/></Row>
    </Stack>
  );
}

export default App;
