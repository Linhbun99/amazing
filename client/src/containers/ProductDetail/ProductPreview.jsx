import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { imageProduct } from './fakedata';

const ProductPreview = () => {
    const [img, setImg] = useState(imageProduct[0].img);
    return (
        <div className='flex'>
            {/* Thumbnail images */}
            <div className='shrink-0 w-20'>
                {
                    imageProduct.map((item, idx) => {
                        return <div className='' key={idx}>
                            <img
                                className='rounded border border-gray-300 mb-2 hover:border-red-400 hover:shadow-md hover:shadow-red-300'
                                src={item.thumbnail}
                                alt=""
                                onMouseOver={() => setImg(item.img)}
                            />
                        </div>
                    })
                }
            </div>

            {/* Zoom */}
            <div className='w-96'>
                <ReactImageMagnify
                    style={{ display: 'flex' }}
                    smallImage={{
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: img
                    }}
                    largeImage={{
                        src: img,
                        width: 600,
                        height: 900
                    }}
                    shouldUsePositiveSpaceLens
                    isHintEnabled
                    shouldHideHintAfterFirstActivation={false}
                    hintTextMouse="Roll over image to zoom in"
                />
            </div>


        </div>
    )
}

export default ProductPreview