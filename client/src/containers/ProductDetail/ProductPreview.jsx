import React from 'react'
import ReactImageMagnify from 'react-image-magnify'

const ProductPreview = () => {
    return (
        <div className='flex'>
            {/* Thumbnail images */}
            <div className='shrink-0 w-20'>
                alo
            </div>

            {/* Zoom */}
            <ReactImageMagnify
                smallImage={{
                    alt: 'Wristwatch by Ted Baker London',
                    // isFluidWidth: true,
                    width: 300,
                    height: 300,
                    src: './images/long-slider-1.png'
                }}
                largeImage={{
                    src: './images/long-slider-1.png',
                    width: 1000,
                    height: 1000
                }}
                shouldUsePositiveSpaceLens
                isHintEnabled
                shouldHideHintAfterFirstActivation={false}
                hintTextMouse="Roll over image to zoom in"
            />
        </div>
    )
}

export default ProductPreview