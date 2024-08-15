import { ItemContainer, TextDescription, TextTitle, TextContainer } from "./Items.styles";
import { FaTrash } from "react-icons/fa";
import { Item } from "../../@types/Items";

const ListItems = (Props: Item) =>{
    return(
        <ItemContainer>
            <TextContainer>
                <TextTitle>{Props.title}</TextTitle>
                <TextDescription>{Props.description}</TextDescription>
            </TextContainer>
            <div className="iconsCheck">
                <input type="checkbox"/>
                <FaTrash className="trashIcon"/>
            </div>
        </ItemContainer>
    )
}

export default ListItems;