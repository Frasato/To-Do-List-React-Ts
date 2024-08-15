import { NoImgContainer, TextWarning } from "./Theres.styles";
import { FaRegFaceSadTear } from "react-icons/fa6";

const TheresNoTask = () =>{
    return(
        <NoImgContainer>
            <TextWarning><FaRegFaceSadTear /> There's no task here...</TextWarning>
        </NoImgContainer>
    )
}

export default TheresNoTask;