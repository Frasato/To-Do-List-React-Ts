import { styled } from "styled-components";
import * as themeColors from "../../constants/colors";

export const ItemContainer = styled.div`
    background-color: ${themeColors.bgItem};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    border-radius: 15px;

    .iconsCheck{
        input[type='checkbox']{
            height: 15px;
            width: 15px;
            margin-right: 10px;
            cursor: pointer;
        }

        .trashIcon{
            color: ${themeColors.primaryColor};
            cursor: pointer;

            &:hover{
                opacity: 0.8;
            }
        }
    }
`;

export const TextContainer = styled.div``;

export const TextTitle = styled.h1`
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const TextDescription = styled.p`
    color: ${themeColors.secundaryColor};
    margin-bottom: 20px;
`;