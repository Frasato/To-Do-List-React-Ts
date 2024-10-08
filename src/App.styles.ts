import { keyframes, styled } from "styled-components";
import * as themeColors from "./constants/colors";

const opacityAnimation = keyframes`
    0%{
        opacity: 1;
    }50%{
        opacity: 0.2;
    }100%{
        opacity: 0.9;
    }
`;

export const ContainerApp = styled.div``;

export const CreateArea = styled.div`
    height: 100px;
    width: 61%;
    margin: auto;
    padding: 50px 30px 30px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const InputTitle = styled.input`
    background-color: ${themeColors.bgColor};
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    width: 300px;
    height: 40px;
    padding: 10px;

    @media only screen and (max-width: 768px) {
        width: 400px;
        height: 50px;
    }
`;

export const CreateButton = styled.button`
    background-color: ${themeColors.primaryColor};
    width: 80px;
    height: 40px;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;

    .icon{
       margin-left: 5px;
    }

    &:hover{
        opacity: 0.9;
    }

    @media only screen and (max-width: 768px) {
        width: 170px;
        height: 50px;
    }
`;

export const LengthTitle = styled.h1`
    color: white;
    font-size: 12px;
`;

export const LengthDesc = styled.h1`
    color: white;
    font-size: 12px;
`;

export const Separator = styled.div`
    background-color: ${themeColors.secundaryColor};
    height: 2px;
    width: 60%;
    margin: 30px auto 0;

    @media only screen and (max-width: 768px) {
        margin: 21vh auto 0;
    }
`;

export const ListArea = styled.div`
    margin: auto;
    max-width: 90%;
    padding: 30px 0;
`;

export const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
    }
`;

export const TextLoading = styled.h1`
    color: ${themeColors.secundaryColor};
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    animation: ${opacityAnimation} 2s linear infinite;
`;