import S from "../resources/string";
import {Button, Card, Carousel, Col, Row, Stack} from "react-bootstrap";
import PORT1 from "../resources/images/portfolio_1.png";
import PORT2 from "../resources/images/portfolio_2.png";
import PORT3 from "../resources/images/portfolio_3.png";
import EBOOK1 from "../resources/images/ebook_1.png";
import EBOOK2 from "../resources/images/ebook_2.png";
import EBOOK3 from "../resources/images/ebook_3.png";
import MINE1 from "../resources/images/mine_1.png";
import MINE2 from "../resources/images/mine_2.png";
import MINE3 from "../resources/images/mine_3.png";
import RESEARCH1 from "../resources/images/research_1.png";
import RESEARCH2 from "../resources/images/research_2.png";
import RESEARCH3 from "../resources/images/research_3.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import {useState} from "react";

export function Projects() {
    const portfolioImgs = [PORT1, PORT2, PORT3]
    const ebookImgs = [EBOOK1, EBOOK2, EBOOK3]
    const mineImgs = [MINE1, MINE2, MINE3]
    const researchImgs = [RESEARCH1, RESEARCH2, RESEARCH3]

    return (
        <Stack gap={5}>
            <p className="display-6 text-center fw-semibold">{S.PROJECT_TITLE}</p>
            <Project imgPos="left" title={S.PROJECT_PORTFOLIO_TITLE} keywords={S.PROJECT_PORTFOLIO_KEY_WORDS}
                     text={S.PROJECT_PORTFOLIO_TEXT} imgSrcs={portfolioImgs} gitHubLink={S.PROJECT_PORTFOLIO_GITHUB_LINK}/>
            <Project imgPos="right" title={S.PROJECT_EBOOK_TITLE} keywords={S.PROJECT_EBOOK_KEY_WORDS}
                     text={S.PROJECT_EBOOK_TEXT} imgSrcs={ebookImgs} gitHubLink={S.PROJECT_EBOOK_GITHUB_LINK}/>
            <Project imgPos="left" title={S.PROJECT_MINE_TITLE} keywords={S.PROJECT_MINE_KEY_WORDS}
                     text={S.PROJECT_MINE_TEXT} imgSrcs={mineImgs} gitHubLink={S.PROJECT_MINE_GITHUB_LINK}/>
            <Project imgPos="right" title={S.PROJECT_RESEARCH_TITLE} keywords={S.PROJECT_RESEARCH_KEY_WORDS}
                     text={S.PROJECT_RESEARCH_TEXT} imgSrcs={researchImgs} gitHubLink={S.PROJECT_RESEARCH_GITHUB_LINK}/>
        </Stack>
    )
}

function Project(props) {
    const [hover, setHover] = useState(false);

    const backGroundImg = {
        filter: "grayscale(100%) brightness(30%)",
        objectFit: "cover",
    }

    const carouselStyle = {
        transition: "filter 0.5s",
        filter: hover ? "grayscale(0%) brightness(100%)" : "grayscale(100%) brightness(50%)"
    }

    return (
        <Col className="my-3" md={{ span : 10, offset : props.imgPos === "left" ? 0 : 2}}>
            <Row className="d-none d-md-flex">
                <Col xs={{ span: 6, order: props.imgPos === "left" ? 12 : 1}} className="align-self-center">
                    <div style={{outline : "var(--accent) solid 2px"}}>
                        <Carousel fade controls={false} indicators={false} pause={false}
                                  interval={hover ? 1000 : null} style={carouselStyle}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}>
                            <Carousel.Item>
                                <img
                                    className="w-100"
                                    src={props.imgSrcs[0]}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="w-100"
                                    src={props.imgSrcs[1]}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="w-100"
                                    src={props.imgSrcs[2]}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </Col>
                <Col className={props.imgPos === "left" ? "text-end" : "text-start"}
                     style={{marginLeft : props.imgPos === "left" ? "-125px" : "0",
                    marginRight : props.imgPos === "left" ? "0" : "-125px",
                    zIndex: 1,}}>
                    <Stack className="d-inline" gap={5}>
                        <Row className="my-2"><span className="accent">{S.PROJECT_BADGE}</span></Row>
                        <Row className="my-2"><p className="h3"><span className="fw-semibold">{props.title}</span></p></Row>
                        <Row className="p-3 my-3" style={{backgroundColor : "var(--sectionbackground)", borderRadius : "5px"}}>
                            <span className="tertiary">{props.text}</span>
                        </Row>
                        <Row className="my-3"><span className="accent">{props.keywords}</span></Row>
                        <Button variant="outline-light" as="a" href={props.gitHubLink} target="_blank">
                            <GitHubIcon/> Visit Repo
                        </Button>
                    </Stack>
                </Col>
            </Row>
            <Row className="d-block d-md-none">
                <Card className="bg-dark text-white">
                    <Card.Img src={props.imgSrcs[0]} alt="Card image"  style={backGroundImg}/>
                    <Card.ImgOverlay style={{overflow: "overlay"}}>
                        <Card.Subtitle><span className="accent small">{S.PROJECT_BADGE}</span></Card.Subtitle>
                        <Card.Title><span className="fw-semibold">{props.title}</span></Card.Title>
                        <Card.Text><span className="tertiary">
                            {props.text}
                        </span></Card.Text>
                        <Card.Text><span className="accent small">
                            {props.keywords}
                        </span></Card.Text>
                        <Button variant="outline-light" as="a" href={props.gitHubLink} target="_blank" size="sm">
                            <GitHubIcon fontSize="small"/> Visit Repo</Button>
                    </Card.ImgOverlay>
                </Card>
            </Row>
        </Col>
    )
}
