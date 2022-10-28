import {Container, Navbar, Nav, Button, Row, Col, NavDropdown} from "react-bootstrap";
import CV from '../resources/HungNguyenOct2023.pdf';
import S from '../resources/string';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export function TabBar(props) {
    return (
        <Navbar className="tab_bar m-0 px-md-5" fixed="top">
            <Container className="m-0">
                <Navbar.Brand href="#home" className="ms-0 me-auto">
                    <Container>
                        <Row style={{width : "100%", height : "100%"}}>
                            <Col>
                                <span className="primary fw-bold fs-4">{S.TAB_BAR_LOGO}</span>
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Brand>
                <div className="d-none d-md-inline">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#about" className="me-3">
                            <span className="accent">01.</span>
                            <span className="primary">{S.TAB_BAR_ITEM_1}</span>
                        </Nav.Link>
                        <Nav.Link href="#skills" className="me-3">
                            <span className="accent">02. </span>
                            <span className="primary">{S.TAB_BAR_ITEM_2}</span>
                        </Nav.Link>
                        <Nav.Link href="#experiences" className="me-3">
                            <span className="accent">03. </span>
                            <span className="primary">{S.TAB_BAR_ITEM_3}</span>
                        </Nav.Link>
                        <Nav.Link href="#hiring" className="me-3">
                            <span className="accent">04.</span>
                            <span className="primary">{S.TAB_BAR_ITEM_4}</span>
                        </Nav.Link>
                        <Button variant="outline-success" className="accent-button me-3" as="a"
                                href = {CV} target = "_blank">{S.TAB_BAR_ITEM_5}</Button>
                    </Nav>
                </div>
                <div className="d-inline d-md-none me-md-3 me-3">
                    <NavDropdown
                        id="nav-dropdown"
                        title="Menu"
                        menuVariant={props.theme === "day" ? "" : "dark"}
                        align="end"
                    >
                        <NavDropdown.Item href="#about">{S.TAB_BAR_ITEM_1}</NavDropdown.Item>
                        <NavDropdown.Item href="#skills">{S.TAB_BAR_ITEM_2}</NavDropdown.Item>
                        <NavDropdown.Item href="#experiences">{S.TAB_BAR_ITEM_3}</NavDropdown.Item>
                        <NavDropdown.Item href="#hiring">{S.TAB_BAR_ITEM_4}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={CV}>{S.TAB_BAR_ITEM_5}</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <ThemeToggle theme={props.theme} action={props.toggleThemeAction}/>
            </Container>
        </Navbar>
    )
}

function ThemeToggle(props) {
    return (
        <div className="align-self-center">
            {props.theme === "day" && <DarkModeIcon className="theme-button" onClick={props.action}/>}
            {props.theme === "night" && <LightModeIcon className="theme-button" onClick={props.action}/>}
        </div>
    )
}
