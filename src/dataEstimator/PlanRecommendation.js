import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
const PlanRecommendation = () => {
  return (
    <div className='plans'>
      <div className='title-block'>
        Your Monthly Data usage is <span className='overblown-numbers'>30GB</span>
      </div>
      <div>
        <span>Your recommended plans:</span>
        <Swiper spaceBetween={40} slidesPerView={3} centeredSlides initialSlide={1}>
          <SwiperSlide className='items'>10GB</SwiperSlide>
          <SwiperSlide className='items'>20GB </SwiperSlide>
          <SwiperSlide className='items'>30GB</SwiperSlide>
        </Swiper>
      </div>
      <div className='buttons'>
        <button>Start Shopping</button>
        <button>Back</button>
      </div>
    </div>
  );
};

export default PlanRecommendation;
