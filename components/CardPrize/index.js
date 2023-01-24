import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'

import styles from './CardPrize.module.scss';

export const CardPrize = (props) => {
  const { className, title, image, desc, rightImage, titleDate } = props;

  return (
    <div className={classNames(styles['card-prize'], className)}>
      <figure>
        <figcaption>
          <h3><span>{titleDate}</span>{title}</h3>
          <span>{desc}</span>
        </figcaption>
        <picture>
          <Image src={image} width={'100'} height={'150'} alt={title} fetchpriority="high" />
        </picture>
      </figure>
      <figure>
        <Image src={rightImage} width={'250'} height={'150'} alt={title} fetchpriority="high" />
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
  rightImage: PropTypes.string,
  titleDate: PropTypes.string
};

CardPrize.defaultProps = {
};