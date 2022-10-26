import {Card, Col, Stack, Row, Button} from "react-bootstrap";
import S from "../resources/string";
import {useState} from "react";

export function Technologies() {
    const [showMore, setShowMore] = useState(false);
    const [buttonText, setText] = useState("See More");
    const listStyle = {
        maxHeight: showMore ? "800px" : "0px",
        transition: showMore ? "max-height 0.25s ease-in" : "max-height 0.15s ease-out",
        overflow: "hidden"
    };
    return (
        <Stack gap={4}>
            <p className="display-6 text-center fw-semibold">{S.TECH_TITLE}</p>
            <Row xs={2} md={4} className="g-4 my-4">
                <Col><TechCard icons={S.TECH_FRONTEND_ICONS}
                               title={S.TECH_FRONTEND_TITLE} text={S.TECH_FRONTEND_TEXT}/></Col>
                <Col><TechCard icons={S.TECH_BACKEND_ICONS}
                               title={S.TECH_BACKEND_TITLE} text={S.TECH_BACKEND_TEXT}/></Col>
                <Col><TechCard icons={S.TECH_MOBILE_ICONS}
                               title={S.TECH_MOBILE_TITLE} text={S.TECH_MOBILE_TEXT}/></Col>
                <Col><TechCard icons={S.TECH_VS_ICONS}
                               title={S.TECH_VS_TITLE} text={S.TECH_VS_TEXT}/></Col>
            </Row>
            <div style={listStyle}>
                <Row xs={2} md={4} className="g-4 mb-4">
                    <Col><TechCard icons={S.TECH_DB_ICONS}
                                   title={S.TECH_DB_TITLE} text={S.TECH_DB_TEXT}/></Col>
                    <Col><TechCard icons={S.TECH_OS_ICONS}
                                   title={S.TECH_OS_TITLE} text={S.TECH_OS_TEXT}/></Col>
                    <Col><TechCard icons={S.TECH_IDE_ICONS}
                                   title={S.TECH_IDE_TITLE} text={S.TECH_IDE_TEXT}/></Col>
                    <Col><TechCard icons={S.TECH_OFFICE_ICONS}
                                   title={S.TECH_OFFICE_TITLE} text={S.TECH_OFFICE_TEXT}/></Col>
                </Row>
                <Row xs={2} md={4} className="g-4 my-4">
                    <Col><TechCard icons={S.TECH_RDEV_ICONS}
                                   title={S.TECH_RDEV_TITLE} text={S.TECH_RDEV_TEXT}/></Col>
                    <Col><TechCard icons={S.TECH_DOCKER_ICONS}
                                   title={S.TECH_DOCKER_TITLE} text={S.TECH_DOCKER_TEXT}/></Col>
                    <Col><TechCard icons={S.TECH_UNITY3D_ICONS}
                                   title={S.TECH_UNITY3D_TITLE} text={S.TECH_UNITY3D_TEXT}/></Col>
                </Row>
            </div>
            <Button variant="outline-success" size="lg"
                    className="align-self-center custom_button" onClick={() => {
                setShowMore(!showMore)
                setText(showMore ? "See More" : "See Less")
            }}>{buttonText}</Button>
        </Stack>
    )
}

function TechCard(props) {
    const listIcons = props.icons.map((src) =>
        <Col xs={3}>
            <img src={src} alt="" height="100%" width="100%"/>
        </Col>
    )
    return(
        <Card bg="dark" text="light" style={{ borderColor : "var(--accent)", width : "100%", height : "100%"}}>
            <Card.Header style={{ borderBottomColor : "var(--accent)",
                backgroundColor : "var(--graybackground)"}}>
                <Stack direction="horizontal">
                    {listIcons}
                </Stack>
            </Card.Header>
            <Card.Body>
                <Card.Title><span className="accent">{props.title}</span></Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
        )
}
