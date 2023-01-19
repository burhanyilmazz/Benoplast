import PropTypes from 'prop-types';
import Image from 'next/image'

import styles from './GalleryImage.module.scss';
import { Icon } from "..";

export const GalleryImage = (props) => {
  const { image, onClick } = props;

  const handleClick = ()=> onClick && onClick()

  return (
    <div className={styles["gallery"]} onClick={handleClick}>
      <Image src={image} width={'271'} height={'184'} alt={'Benoplast Galeri'} />
      <div className={styles["gallery__layer"]}>
        <Icon icon='zoom'/>
      </div>
    </div>
  )
}

GalleryImage.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string,
};