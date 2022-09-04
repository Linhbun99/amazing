import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LandingCarousel from '../../components/carousel/LandingCarousel';
import ProductCarousel from '../../components/carousel/ProductCarousel';
import RecomendationCarousel from '../../components/carousel/RecomendationCarousel';
import CategoryCard from '../../components/CategoryCard';
import { categoryCard1, menuSliderData, productCarouselData, recomendationProductData } from './fakedata';

const Home = () => {
  return (
    <React.Fragment>
      <div className="relative">
        <div className='absolute top-0 w-screen z-10'>
          <LandingCarousel data={menuSliderData} />
        </div>
      </div>

      <div className='mt-72 -z-20'>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 px-6">
          {
            categoryCard1.map((item, idx) => {
              return <div key={idx} className="col-span-1 z-10">
                <CategoryCard title={item.title} img={item.img} action={item.action} />
              </div>
            })
          }
        </div>
        <div className="p-6">
          <ProductCarousel title="Top seller for you" data={productCarouselData} show={6} slide={6} />
        </div>

        <div className="p-6 pt-0">
          <RecomendationCarousel title="Recommend for you" data={recomendationProductData} show={6} slide={6} />
        </div>
      </div>


    </React.Fragment>
  )
}

export default Home
