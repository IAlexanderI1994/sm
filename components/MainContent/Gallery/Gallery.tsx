import { BlockGallery, BlockImg, BlockTitle, ContainerGallery, ImgMoment, TitleGallery } from './elements'
import PopUpImage from './PopUpImage/PopUpImage'
import { Fragment, useState } from 'react'

const arr = Array.from({ length: 16 }, (n, i) => i + 1)
const Gallery = () => {
  const [image, setImage] = useState<string>()
  const popupHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const parentElement = e.currentTarget
    const dataSet = parentElement?.dataset?.img
    setImage(dataSet)
  }
  return (
    <ContainerGallery>
      <BlockTitle>
        <TitleGallery lineH="59px" fontSize="48px" fontWeight="600">
          #Яркие Моменты
        </TitleGallery>
      </BlockTitle>
      <BlockGallery>
        {arr.map((item) => {
          const img = `/images/gallery/${item}.jpg`
          return (
            <Fragment key={item}>
              <BlockImg data-img={img} onClick={popupHandler} href="#popup">
                <ImgMoment data-lightbox="road" src={img} />
              </BlockImg>
              <PopUpImage image={image} />
            </Fragment>
          )
        })}
      </BlockGallery>
    </ContainerGallery>
  )
}

export default Gallery
