import {Container, Stack, Row, Col, Image} from "react-bootstrap";
import profile from '../resources/images/profile.png';
import S from '../resources/string';

export function About() {
    return (
        <Container className="pt-3">
            <Row className="py-4">
                <Col md={4}>
                    <div className="profile_wrap" >
                        <Image fluid roundedCircle="true" src={profile} className="profile p-2"/>
                    </div>
                </Col>
                <Col md={8}>
                    <Stack gap={4}>
                        <p className="fw-bold display-6 accent mb-0">{S.ABOUT_GREET}</p>
                        <p className="fw-semibold display-3 mb-0">{S.ABOUT_GREET_NAME}</p>
                        <p className="h1 mb-0">{S.ABOUT_GREET_STATEMENT}</p>
                    </Stack>
                </Col>
            </Row>
            <Row className="py-4">
                <p className="h5">{S.ABOUT_GREET_INTRO}</p>
            </Row>
        </Container>
    )
}
