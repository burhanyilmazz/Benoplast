import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'

import { ScrollIcon } from "../"

import styles from './PageTab.module.scss';

export const PageTab = (props) => {
  const { image, mobileImage, title, text } = props;

  return (
    <div className={styles['page-tab']}>
      <div className={styles['page-tab__content']}>
        {image && <picture>
          {mobileImage && <source media="(max-width: 768px)" srcSet={mobileImage} />}
          <Image
            src={image}
            width={"1544"}
            height={"1080"}
            alt={title}
          />
        </picture>}

        <div className={styles['page-tab__desc']}>
          {title && <h2>{title}</h2>}
          {text && <p>{text} </p>}
        </div>

        <ScrollIcon />
      </div>
    </div>
  )
}

PageTab.propTypes = {
  image: PropTypes.string,
  mobileImage: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};