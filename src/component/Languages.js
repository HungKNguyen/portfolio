import {Container, Stack, Row, Col, Button} from "react-bootstrap";
import S from "../resources/string";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useState} from "react";

export function Languages() {
    const [showMore, setShowMore] = useState(false);
    const [buttonText, setText] = useState("See More");
    const listStyle = {
        maxHeight: showMore ? "1000px" : "0px",
        transition: showMore ? "max-height 0.25s ease-in" : "max-height 0.15s ease-out",
        overflow: "hidden"
    };
    return (
        <Stack gap={3}>
            <p className="display-6 text-center fw-semibold">{S.LANGUAGES_TITLE}</p>
            <Stack gap={2}>
                <LanguageItem languageText={S.LANGUAGE_PYTHON_TITLE} devIcon={S.LANGUAGE_PYTHON_ICON}
                              subText={S.LANGUAGE_PYTHON_TEXTS} proficiency={S.LANGUAGE_PYTHON_LEVEL}/>
                <LanguageItem languageText={S.LANGUAGE_JS_TITLE} devIcon={S.LANGUAGE_JS_ICON}
                              subText={S.LANGUAGE_JS_TEXTS} proficiency={S.LANGUAGE_JS_LEVEL}/>
                <LanguageItem languageText={S.LANGUAGE_JAVA_TITLE} devIcon={S.LANGUAGE_JAVA_ICON}
                              subText={S.LANGUAGE_JAVA_TEXTS} proficiency={S.LANGUAGE_JAVA_LEVEL}/>
                <LanguageItem languageText={S.LANGUAGE_CPP_TITLE} devIcon={S.LANGUAGE_CPP_ICON}
                              subText={S.LANGUAGE_CPP_TEXTS} proficiency={S.LANGUAGE_CPP_LEVEL}/>
                <div style={listStyle}>
                    <LanguageItem languageText={S.LANGUAGE_CS_TITLE} devIcon={S.LANGUAGE_CS_ICON}
                                  subText={S.LANGUAGE_CS_TEXTS} proficiency={S.LANGUAGE_CS_LEVEL}/>
                    <LanguageItem languageText={S.LANGUAGE_SWIFT_TITLE} devIcon={S.LANGUAGE_SWIFT_ICON}
                                  subText={S.LANGUAGE_SWIFT_TEXTS} proficiency={S.LANGUAGE_SWIFT_LEVEL}/>
                    <LanguageItem languageText={S.LANGUAGE_C_TITLE} devIcon={S.LANGUAGE_C_ICON}
                                  subText={S.LANGUAGE_C_TEXTS} proficiency={S.LANGUAGE_C_LEVEL}/>
                    <LanguageItem languageText={S.LANGUAGE_R_TITLE} devIcon={S.LANGUAGE_R_ICON}
                                  subText={S.LANGUAGE_R_TEXTS} proficiency={S.LANGUAGE_R_LEVEL}/>
                    <LanguageItem languageText={S.LANGUAGE_HTML_TITLE} devIcon={S.LANGUAGE_HTML_ICON}
                                  subText={S.LANGUAGE_HTML_TEXTS} proficiency={S.LANGUAGE_HTML_LEVEL}/>
                    <LanguageItem languageText={S.LANGUAGE_CSS_TITLE} devIcon={S.LANGUAGE_CSS_ICON}
                                  subText={S.LANGUAGE_CSS_TEXTS} proficiency={S.LANGUAGE_CSS_LEVEL}/>
                </div>
            </Stack>
            <Button variant="outline-success" size="lg"
                    className="align-self-center custom_button" onClick={() => {
                setShowMore(!showMore)
                setText(showMore ? "See More" : "See Less")
            }}>{buttonText}</Button>
        </Stack>
    )
}

function LanguageItem(props)
{
    const [showDetails, setShowDetails] = useState(false);
    const dropDownStyle = {
        transition: "transform 0.5s",
        transform: showDetails ? "rotate(180deg)" : "rotate(0deg)"
    };
    const listStyle = {
        maxHeight: showDetails ? "200px" : "0px",
        transition: showDetails ? "max-height 0.25s ease-in" : "max-height 0.15s ease-out",
        overflow: "hidden",
    }
    const listItems = props.subText.map((text, id) =>
        <span className="secondary"><li className="h5" key={id}>{text}</li></span>
    )
    return (
        <Container className="border-bottom py-3">
            <Row className="align-items-center mb-3">
                <Col md={1} className="d-none d-md-inline">
                    <img src={props.devIcon} width="100%" height="100%" alt=""/>
                </Col>
                <Col md={4} xs={3}>
                    <p className="h3 my-auto align-self-center">
                        {props.languageText}
                    </p>
                </Col>
                <Col md={7} xs={9}>
                    <Stack direction="horizontal" className="justify-content-end">
                        <p className="h3 my-auto align-self-center text-end">{S.LANGUAGES_PROFICIENCY}
                            <span className="accent">{props.proficiency}</span>
                        </p>
                        <ArrowDropDownIcon fontSize="large" style={dropDownStyle}
                                           onClick={() => {
                                               setShowDetails(!showDetails)
                                           }}/>
                    </Stack>
                </Col>

            </Row>
            <Row style={listStyle}>
                {listItems}
            </Row>
        </Container>
    )
}
