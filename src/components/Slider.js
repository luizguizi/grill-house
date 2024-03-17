

//import images slides
import slide1 from './imgs/slide1.png';
import slide2 from './imgs/slide2.png';
import slide3 from './imgs/slide3.png';

//import css
import styles from './Slider.module.css'


import {Swiper, SwiperSlide} from 'swiper/react';

const Slider = () => {

const slides = [slide1, slide2, slide3];

  return (
  
    <div className={styles.slidercontent}>
    <Swiper
         style={{"--swiper-theme-color": "#ffed00"}}

      slidesPerview={1}
      pagination={{clickable: true }}
      navigation
    >
    

      {slides.map((slides, index) => (
        <SwiperSlide key={index}>
        <img src={slides}
         alt="slider"
         className={styles.slide_item}
         />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default Slider