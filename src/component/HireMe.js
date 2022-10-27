import S from "../resources/string";
import {Row, Stack} from "react-bootstrap";

export function HireMe() {
    return (
        <Stack gap={3}>
            <p className="display-6 text-center fw-semibold">{S.HIRING_TITLE}</p>
            <Row className="p-4" style={{backgroundColor : "var(--sectionbackground)", borderRadius : "5px"}}>
                <p className="h4 m-0" style={{lineHeight: 1.5}}><span className="tertiary">{S.HIRING_TEXT}</span></p>
            </Row>
        </Stack>
    )
}
