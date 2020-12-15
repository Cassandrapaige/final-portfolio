import React from 'react'

import {GridContainer, ImageContainer, Image} from './photo-gallery.styles'

// IMAGES
import selfie from '../../images/me.jpg'
import selfie5 from '../../images/me1.jpg'
import selfie2 from '../../images/me3.jpg'
import selfie3 from '../../images/me4.jpg'
import selfie6 from '../../images/me6.jpg'

const PhotoGallery = () => {
    return (
        <GridContainer>
            {IMAGE_GALLERY.map((item, index) => (
                <ImageContainer className = {`image-${index}`} key = {index}>
                    <Image src = {item.src} alt = {item.alt} />
                </ImageContainer>
            ))}
        </GridContainer>
    )
}

const IMAGE_GALLERY = [
  {
    src: selfie5,
    alt: 'the most professional photo I could get of myself'
  },
  {
    src: selfie2,
    alt: 'self portrait by the ocean in Tenerife'
  },
  {
    src: selfie6,
    alt: 'self portrait wearing floral romper'
  },
  {
    src: selfie3,
    alt: 'self portrait on beach in Wellington, NZ'
  },
  {
    src: selfie,
    alt: 'self portrait on Volcano in Tenerife'
  },
]

export default PhotoGallery
