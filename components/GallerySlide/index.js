import PropTypes from 'prop-types';
import Image from 'next/image'

import styles from './GallerySlide.module.scss';
import { Icon } from "..";

export const GallerySlide = (props) => {
  const { image, onClick, data } = props;

  const handleClick = () => onClick && onClick()

  return (
    <div className={styles["gallery-slide"]}>
      <div className={styles['gallery-slide__big']} onClick={handleClick}>
        <div className={styles['icon']}><Icon icon='zoom' /></div>
        <Image src={image} width={'271'} height={'184'} alt={'Benoplast Galeri'} />
        <Icon icon={'foodly'} />
      </div>
      <div className={styles["gallery-slide__layer"]}>
        {data?.map((item, index) => <picture key={index}><Image src={item.path} width={'214'} height={'138'} alt={'Benoplast Galeri'} /></picture>)}
      </div>
    </div>
  )
}

GallerySlide.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string,
  data: PropTypes.any
};