import {Container, Navbar, Nav, Button, Row, Col} from "react-bootstrap";
import CV from '../resources/HungNguyenOct2023.pdf';
import Logo from '../resources/images/logo.png';
import S from '../resources/string';

export function TabBar() {
    return (
        <Navbar className="tab_bar" fixed="top">
            <Container fluid className="px-5">
                <Navbar.Brand href="#home">
                    <Container>
                        <Row style={{width : "100%", height : "100%"}}>
                            <Col xs={1}>
                                <img src={Logo} style={{maxHeight : "28px", maxWidth : "28px"}}
                                     alt="Portfolio logo"/>
                            </Col>
                            <Col>
                                <span className="ms-2 primary fw-bold fs-4">{S.TAB_BAR_LOGO}</span>
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
                        <Button variant="outline-success custom_button" as="a"
                                href = {CV} target = "_blank">Resume</Button>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    )
}
