import {Navbar} from "react-bootstrap";
import S from "../resources/string";

export function Footer() {
    return (
        <Navbar className="tab_bar py-4 position-absolute-bottom justify-content-center" style={{width : "100%", height : "100%"}}>
            <p className="m-0 h5">{S.FOOTER_TITLE}</p>
        </Navbar>
    )
}
