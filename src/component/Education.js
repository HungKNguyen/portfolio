import S from "../resources/string";
import {Button, Card, Row, Col, Stack} from "react-bootstrap";
import LUBACKGROUND from "../resources/images/LU_background.png";
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import Transcript from "../resources/Academic History.pdf";
import {FadeInSection} from "./FadeInWrap";

export function Education(props) {
    const listItems = S.EDU_ACHIEVEMENT.map((text, id) =>
        <li key={id} style={{lineHeight: 1.8}} className="h5"><span className="primary">{text}</span></li>
    )

    return (
        <Stack gap={5}>
            <FadeInSection>
                <p className="display-6 text-center fw-semibold">{S.EDU_TITLE}</p>
            </FadeInSection>
            <FadeInSection direction="up">
                <Card style={{borderColor : "var(--accent-secondary)", backgroundColor : "var(--background)"}}>
                    <div className="custom-background-wrap outer">
                        <div className="custom-background-overlap top"/>
                        <Card.Img src={LUBACKGROUND} alt="Card image" className="custom-background below"/>
                    </div>

                    <Card.ImgOverlay style={{overflow: "overlay", zIndex: 3}}>
                        <Card.Subtitle><p className="display-4"><span className="primary">{S.EDU_UNIVERSITY}</span></p></Card.Subtitle>
                        <Card.Title>
                            <p className="h2 my-4"><span className="accent fw-semibold">{S.EDU_DEGREE}</span></p>
                        </Card.Title>
                        <Card.Subtitle>
                            <Row className="mb-3">
                                <Col xs={6}><p className="h4"><span className="accent-secondary fw-semibold">{S.EDU_GPA}</span></p></Col>
                                <Col xs={6}><p className="h4 text-end"><span className="accent-secondary fw-semibold">{S.EDU_GRADUATING}</span></p></Col>
                            </Row>
                        </Card.Subtitle>
                        <Card.Text>
                            {listItems}
                        </Card.Text>
                        <Stack direction="horizontal" gap={3}>
                            <Button variant="outline-light" className="primary-button" as="a" href={S.EDU_MERIT_LINK} target="_blank">
                                <SchoolIcon/> Merit Page</Button>
                            <Button variant="outline-light" className="primary-button" as="a" href={Transcript} target="_blank">
                                <ArticleIcon/> Transcript</Button>
                        </Stack>
                    </Card.ImgOverlay>
                </Card>
            </FadeInSection>
        </Stack>
    )
}
