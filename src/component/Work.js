import S from "../resources/string";
import {Col, Image, Row, Stack} from "react-bootstrap";
import IDLOGO from "../resources/images/ID_logo.png";
import LULOGO from "../resources/images/LU_logo.png";
import {FadeInSection} from "./FadeInWrap";

export function Work() {
    return (
        <Stack gap={5}>
            <FadeInSection>
                <p className="display-6 text-center fw-semibold">{S.WORK_TITLE}</p>
            </FadeInSection>
            <Stack gap={5}>
                <WorkItem logo={LULOGO} logo_pos={"left"} name={S.WORK_LU_INSTITUTION} title={S.WORK_LU_TITLE}
                          place={S.WORK_LU_LOCATION} date={S.WORK_LU_DATE} texts={S.WORK_LU_TEXTS}/>
                <WorkItem logo={IDLOGO} logo_pos={"right"} name={S.WORK_ID_INSTITUTION} title={S.WORK_ID_TITLE}
                          place={S.WORK_ID_LOCATION} date={S.WORK_ID_DATE} texts={S.WORK_ID_TEXTS}/>
            </Stack>
        </Stack>
    )
}

function WorkItem(props) {
    const listItems = props.texts.map((text, id) =>
        <li key={id} style={{lineHeight: 1.8}}>{text}</li>
    )
    return (
        <Row>
            <Col md={{ span : 3, order: props.logo_pos === "left" ? 12 : 1 }} className="my-2 my-md-0 my-sm-5">
                <FadeInSection direction={props.logo_pos === "left" ? "right" : "left"}>
                    <Col xs={{ span: 6, offset : 3}} md={{span:12, offset :0}} className="image-wrap outer">
                        <div className="image-overlap p-2 top"/>
                        <Image fluid height="100%" width="100%" src={props.logo} className="image-drop-shadow below"/>
                    </Col>
                </FadeInSection>
            </Col>
            <Col  className="mx-2">
                <FadeInSection direction={props.logo_pos === "left" ? "left" : "right"}>
                    <Stack gap={2}>
                        <Row><Col><p className="h2 fw-semibold">{props.name}</p></Col></Row>
                        <Row>
                            <Col><p className="h6 fw-semibold"><span className="secondary">{props.title} | {props.place}</span></p></Col>
                            <Col className="justify-content-end text-end">
                                <p className="h6 fw-semibold"><span className="accent">{props.date}</span></p>
                            </Col>
                        </Row>
                        <Row>
                            {listItems}
                        </Row>
                    </Stack>
                </FadeInSection>
            </Col>
        </Row>
    )
}
