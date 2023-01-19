import { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation, Pagination, Autoplay } from 'swiper';
import Image from 'next/image'
import { Icon } from '../';

import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/thumbs";

import styles from './CarouselSector.module.scss';
import classNames from 'classnames';

export const CarouselSector = (props) => {
  const { data, className, title } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <div className={styles['carousel']}>
      <div className={styles['carousel__big']}>
        <Swiper 
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Thumbs, Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          autoHeight
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          className={'carousel-big'}
        >
          {data.map((item, index) => <SwiperSlide key={index}><Image src={item.image} width={1075} height={1080} alt={title} priority={index === 0 ? true : false} /></SwiperSlide>)}
        </Swiper>
      </div>
      
      <div className={styles['carousel__slider']}>
        <button className={styles['prev']} aria-label='prev'><Icon icon='arrow' /></button>
        <div className={styles['content']}>
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs, Navigation]}
            watchSlidesProgress
            slidesPerView={'auto'}
            spaceBetween={30}
            navigation={{
              nextEl: `.${styles['next']}`,
              prevEl: `.${styles['prev']}`
            }}
            className={classNames('carousel-sector', className)}
            slideToClickedSlide
          >
            {data.map((item, index) => <SwiperSlide key={index} className={styles['carousel__slide']}><Image src={item.image} width={132} height={100} alt={title} /></SwiperSlide>)}
          </Swiper>
        </div>
        <button className={styles['next']} aria-label='next'><Icon icon='arrow' /></button>
      </div>
    </div>
  )
}

CarouselSector.propTypes = {
	data: PropTypes.array,
  className: PropTypes.string,
  title: PropTypes.string
};