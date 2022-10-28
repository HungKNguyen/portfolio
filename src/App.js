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
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { isBrowser } from "react-device-detect";

function App() {
    const [theme, setTheme] = useState("day")

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

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
      <>
          <Stack className={`${theme} app ${isBrowser ? "" : "non-browser-background"}`} gap={3} id="home" style={{zIndex: 2}}>
              <TabBar toggleThemeAction={toggleTheme} theme={theme}/>
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
              <Footer/>
          </Stack>
          {isBrowser &&
          <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                  background: {
                      color: {
                          value: theme === "day" ? "#F5F5F5" : "#1c1e21",
                      },
                  },
                  fpsLimit: 120,
                  interactivity: {
                      events: {
                          onClick: {
                              enable: true,
                              mode: "repulse",
                          },
                          resize: true,
                      },
                      modes: {
                          repulse: {
                              distance: 200,
                              duration: 0.4,
                          },
                      },
                  },
                  particles: {
                      color: {
                          value: theme === "day" ? "#3f51b5" : "#e0e0e0",
                      },
                      links: {
                          color: theme === "day" ? "#3f51b5" : "#e0e0e0",
                          distance: 150,
                          enable: true,
                          opacity: 0.5,
                          width: 1,
                      },
                      collisions: {
                          enable: true,
                      },
                      move: {
                          directions: "none",
                          enable: true,
                          outModes: {
                              default: "bounce",
                          },
                          random: false,
                          speed: 1,
                          straight: false,
                      },
                      number: {
                          density: {
                              enable: true,
                              area: 800,
                          },
                          value: 30,
                      },
                      opacity: {
                          value: 0.5,
                      },
                      shape: {
                          type: "circle",
                      },
                      size: {
                          value: { min: 1, max: 5 },
                      },
                  },
                  detectRetina: true,
              }}
              className="particle"
          />
          }
      </>
  );
}

export default App;
