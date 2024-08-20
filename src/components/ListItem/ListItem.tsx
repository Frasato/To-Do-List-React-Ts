import { ItemContainer, TextDescription, TextTitle, TextContainer } from "./Items.styles";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaTrash } from "react-icons/fa";
import { Item } from "../../@types/Items";

const ListItems = (Props: Item) =>{
    return(
        <ItemContainer key={Props.id}>
            <TextContainer>
                <TextTitle>{Props.title}</TextTitle>
                <TextDescription>{Props.description}</TextDescription>
            </TextContainer>
            <div className="iconsCheck">
                <div>
                    <input type="checkbox"/>
                    <FaTrash className="trashIcon" onClick={Props.onClick}/>
                </div>
                <div>    
                    <FaArrowAltCircleLeft onClick={Props.toLeft} className="toLeft"/>
                    <FaArrowAltCircleRight onClick={Props.toRight} className="toRight"/>
                </div>
            </div>
        </ItemContainer>
    )
}

export default ListItems;