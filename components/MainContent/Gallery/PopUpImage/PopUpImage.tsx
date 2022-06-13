import {BlockCross, BlockPopUp, ContainerPopUp, CrossPopUp,BlockImage, ImagePopUp, WrapperPopUp } from "./elements"

const PopUpImage = ({image}: any) => {
    return (
        <WrapperPopUp id="popup">
            <ContainerPopUp>
                <BlockPopUp>
                    <BlockCross><CrossPopUp href='#header'>X</CrossPopUp></BlockCross>
                    <BlockImage><ImagePopUp src={image}/></BlockImage>
                </BlockPopUp>
            </ContainerPopUp>
        </WrapperPopUp>
    )
}

export default PopUpImage