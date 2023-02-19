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

            return `<span class=${className}>${slides[index].dataset.title}</span>`;
          },
        }}
        className={classNames('carousel', className)}
      >
        {data?.map((item, index) => <SwiperSlide key={index} className={styles['carousel__slide']} data-title={item?.title}>
          <div className={styles['slide-content']}>
            <div className={styles['slide-content__wrap']}>
              {item?.title && <div className={styles['slide-content__title']}>{item?.title}</div>}
              {item?.content && <div className={styles['slide-content__text']}>{item?.content}</div>}
              {item?.url && <Button text={'Detaylı Bilgi'} href={item?.url} />}
            </div>
            <div className={styles['slide-content__hand']}>
              <picture>
                {item.mobile_image && <source media="(max-width: 768px)" srcSet={item.mobile_image} />}
                {item.image && <Image src={item.image} width={850} height={593} alt={item.title} priority={index === 0 ? true : false} fetchpriority="high" />}
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