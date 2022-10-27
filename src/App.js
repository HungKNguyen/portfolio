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
import {Footer} from "./component/Footer";
import {Projects} from "./component/Projects";

function App() {
  return (
    <Stack className="App" gap={3}>
        <Row><TabBar /></Row>
        <Stack className="pt-0 pt-lg-5 px-lg-0 px-4" gap={5}>
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
            <Row className="justify-content-lg-center py-5">
                <Col lg={8}><Projects/></Col>
            </Row>
            <Row className="justify-content-lg-center py-5">
                <Col lg={6}><Education/></Col>
            </Row>
            <Row className="justify-content-lg-center py-5"  id="hiring">
                <Col lg={6}><HireMe/></Col>
            </Row>
        </Stack>
        <Row><Footer/></Row>
    </Stack>
  );
}

export default App;
