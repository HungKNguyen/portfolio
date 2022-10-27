import {Container, Stack, Row, Col, Image} from "react-bootstrap";
import profile from '../resources/images/profile.png';
import S from '../resources/string';
import {FadeInSection} from "./FadeInWrap";

export function About() {
    return (
        <Container className="pt-3">
            <Row className="py-4">
                <Col md={4}>
                    <FadeInSection direction="down">
                        <Col xs={{ span: 8, offset : 2}} md={{span:12, offset :0}} className="profile_wrap">
                            <Image fluid roundedCircle="true" src={profile} className="profile p-2"/>
                        </Col>
                    </FadeInSection>
                </Col>
                <Col md={8}>
                    <Stack gap={4}>
                        <FadeInSection direction="right" delay={250}>
                            <p className="fw-bold display-6 accent mb-0">{S.ABOUT_GREET}</p>
                        </FadeInSection>
                        <FadeInSection direction="right" delay={500}>
                            <p className="fw-semibold display-3 mb-0">{S.ABOUT_GREET_NAME}</p>
                        </FadeInSection>
                        <FadeInSection direction="right" delay={750}>
                            <p className="h1 mb-0">{S.ABOUT_GREET_STATEMENT}</p>
                        </FadeInSection>
                    </Stack>
                </Col>
            </Row>
            <FadeInSection direction="up" delay={250}>
                <Row className="py-4">
                    <p className="h5">{S.ABOUT_GREET_INTRO}</p>
                </Row>
            </FadeInSection>
        </Container>
    )
}
