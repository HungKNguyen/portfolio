import S from "../resources/string";
import {Button, Card, Row, Col, Stack} from "react-bootstrap";
import LUBACKGROUND from "../resources/images/LU_background.png";
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import Transcript from "../resources/Academic History.pdf";
import {FadeInSection} from "./FadeInWrap";

export function Education() {
    const backGroundImg = {
        filter: "grayscale(100%) brightness(30%)",
        objectFit: "cover",
    }

    const listItems = S.EDU_ACHIEVEMENT.map((text, id) =>
        <li key={id} style={{lineHeight: 1.8}} className="h5">{text}</li>
    )

    return (
        <Stack gap={5}>
            <FadeInSection>
                <p className="display-6 text-center fw-semibold">{S.EDU_TITLE}</p>
            </FadeInSection>
            <FadeInSection direction="up">
                <Card className="bg-dark text-white">
                    <Card.Img src={LUBACKGROUND} alt="Card image"  style={backGroundImg}/>
                    <Card.ImgOverlay style={{overflow: "overlay"}}>
                        <Card.Subtitle><p className="display-4">{S.EDU_UNIVERSITY}</p></Card.Subtitle>
                        <Card.Title>
                            <p className="h2 my-4"><span className="accent fw-semibold">{S.EDU_DEGREE}</span></p>
                        </Card.Title>
                        <Card.Subtitle>
                            <Row className="mb-3">
                                <Col xs={6}><p className="h4"><span className="tertiary fw-semibold">{S.EDU_GPA}</span></p></Col>
                                <Col xs={6}><p className="h4 text-end"><span className="tertiary fw-semibold">{S.EDU_GRADUATING}</span></p></Col>
                            </Row>
                        </Card.Subtitle>
                        <Card.Text>
                            {listItems}
                        </Card.Text>
                        <Stack direction="horizontal" gap={3}>
                            <Button variant="outline-light" as="a" href={S.EDU_MERIT_LINK} target="_blank">
                                <SchoolIcon/> Merit Page</Button>
                            <Button variant="outline-light" as="a" href={Transcript} target="_blank">
                                <ArticleIcon/> Transcript</Button>
                        </Stack>
                    </Card.ImgOverlay>
                </Card>
            </FadeInSection>
        </Stack>
    )
}
