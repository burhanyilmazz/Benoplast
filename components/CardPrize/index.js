import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './CardPrize.module.scss';

export const CardPrize = (props) => {
  const { className, title, image, desc, data } = props;

  return (
    <div className={classNames(styles['card-prize'], className)}>
      <figure>
        <figcaption>
          <h3>{title}</h3>
          <span>{desc}</span>
        </figcaption>
        <picture>
          <Image src={image} width={'70'} height={'170'} alt={title} fetchpriority="high" />
        </picture>
      </figure>
      <figure>
        <div className={styles['blog__slider']}>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={'auto'}
            spaceBetween={0}
            className={'prize__carousel'}
            pagination
          >
            {data?.map((item, index) => <SwiperSlide key={index}><Image src={item?.children} width={'70'} height={'170'} alt={title} fetchpriority="high" /></SwiperSlide>)}
          </Swiper>
        </div>
      </figure>
    </div>
  )
}

CardPrize.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
};

CardPrize.defaultProps = {
};