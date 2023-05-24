import React from 'react'
import '../styles/Testimonials.css'

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function Testimonials() {
  return (
    <section id='testimonials'>
    <h3>Testimonios</h3>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        }}
        coverflowEffect={{
          rotate: 35,
          stretch: 10,
          depth: 100,
          modifier: 1,
          // slideShadows: true,
        }}
        // pagination={{el:'swiper-pagination', clickable:true}}
        pagination={true}
        scrollbar={{ draggable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src=".../../img/testimonial-3.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-4.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-5.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-6.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-7.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-8.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-9.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-10.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-11.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-12.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-13.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-14.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-15.jpg" alt='#' />
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-1.jpg" alt='#'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src=".../../img/testimonial-2.jpg" alt='#' />
        </SwiperSlide>

        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className='swiper-button-next slider-arrow'>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className='swiper-pagination'>     
          </div>
        </div> 
      </Swiper>
    </section>
   
  );
}