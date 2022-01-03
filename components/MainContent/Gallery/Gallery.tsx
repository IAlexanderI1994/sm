import {BlockGallery, BlockImg, BlockTitle, ContainerGallery, ImgMoment, TitleGallery} from "./elements";
import PopUpImage from "./PopUpImage/PopUpImage";
import {useState} from "react";


const arr = Array.from({ length: 16 }, (n, i) =>  i + 1);
const Gallery = () => {
    const [image, setImage] = useState('')
    const changeImg = (e) => {
        const parentElement = e.currentTarget
        const dataSet = parentElement?.dataset?.img
        setImage(dataSet)
    }
    return (
        <ContainerGallery>
            <BlockTitle>
                <TitleGallery lineH='59px' fontSize='48px' fontWeight='600'>#Яркие Моменты</TitleGallery>
            </BlockTitle>
            <BlockGallery>
                {
                    arr.map((item) => {
                        const img = `/images/gallery/${item}.jpg`
                        return (
                            <>
                                <BlockImg data-img={img} onClick={changeImg} href='#popup'>
                                    <ImgMoment data-lightbox='road' src={img}/>
                                </BlockImg>
                                <PopUpImage image={image}/>
                            </>
                        )
                    })
                }
            </BlockGallery>
        </ContainerGallery>


    )
}

export default Gallery