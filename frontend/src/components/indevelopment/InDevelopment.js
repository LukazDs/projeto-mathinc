import { useNavigate } from "react-router-dom";
import logo_challenge from "../../assets/images/logo_challenge.jpeg"
import * as devStyle from "./inDevelopmentStyle"

export default function InDevelopment() {
    const navigate = useNavigate();

    return (

        <devStyle.InDevelopmentBox>
            <span>Sorry page under development!</span>
            <devStyle.Logo src={logo_challenge} />
            <button onClick={() => navigate("/posts")}>Voltar</button>
        </devStyle.InDevelopmentBox>

    )
}
