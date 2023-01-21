/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper';
import { Button } from '../../components';
import Image from 'next/image'

import "swiper/css";
import 'swiper/css/pagination';

import styles from './Carousel.module.scss';
import classNames from 'classnames';

export const Carousel = (props) => {
  const { data, className } = props;

  return (
    <div className={styles['carousel']}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const slides = document.querySelectorAll('.carousel .swiper-slide');

            return `<span class=${className}>${slides[index].dataset.thumb}</span>`;
          },
        }}
        className={classNames('carousel', className)}
      >
        {data.map((item, index) => <SwiperSlide key={index} className={styles['carousel__slide']} data-thumb={item.title}>
          <div className={styles['slide-content']}>
            <div className={styles['slide-content__wrap']}>
              <div className={styles['slide-content__title']}>{item.title}</div>
              <div className={styles['slide-content__text']}>{item.desc}</div>
              <Button text={'Detaylı Bilgi'}/>
            </div>
            <div className={styles['slide-content__hand']}>
              <picture>
                <source media="(max-width: 1024px)" srcSet={item.first_image_mobile} />
                <Image src={item.first_image} width={850} height={593} alt={item.title} priority={index === 0 ? true : false} fetchpriority="high" />
              </picture>
            </div>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  )
}

Carousel.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string
};