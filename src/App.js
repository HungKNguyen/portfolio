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
import {useCallback, useEffect, useState} from "react";

function App() {
    const [theme, setTheme] = useState("day")

    useEffect(() => {
        let current_hour = new Date().getHours();
        if (6 <= current_hour && current_hour < 18) {
            setTheme("day")
        } else {
            setTheme("night")
        }
    }, [])

    const toggleTheme = useCallback(() => {
        let next = theme === "night" ? "day" : "night"
        setTheme(next)
    }, [theme])

  return (
    <Stack className={`App ${theme}`} gap={3} id="home">
        <Row><TabBar toggleThemeAction={toggleTheme} theme={theme}/></Row>
        <Stack className="pt-0 pt-lg-5 px-lg-0 px-4" gap={5}>
            <Row className="justify-content-lg-center mb-5 py-5" id="about">
                <Col lg={8}><About/></Col>
            </Row>
            <Row className="justify-content-lg-center my-5 py-5"  id="skills">
                <Col lg={8}><Languages/></Col>
            </Row>
            <Row className="justify-content-lg-center my-5 py-5">
                <Col lg={10}><Technologies theme={theme}/></Col>
            </Row>
            <Row className="justify-content-lg-center my-5 py-5"  id="experiences">
                <Col lg={9}><Work/></Col>
            </Row>
            <Row className="justify-content-lg-center my-5 py-5">
                <Col lg={8}><Projects/></Col>
            </Row>
            <Row className="justify-content-lg-center my-5 py-5">
                <Col lg={8}><Education/></Col>
            </Row>
            <Row className="justify-content-lg-center mt-5 py-5"  id="hiring">
                <Col lg={6}><HireMe/></Col>
            </Row>
        </Stack>
        <Row><Footer/></Row>
    </Stack>
  );
}

export default App;
