import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

import styles from './GallerySlide.module.scss';
import { Icon, Modal } from "..";

export const GallerySlide = (props) => {
  const { onClick, data, foodly } = props;
  const [image, setImage] = useState(data[0])
  const [modalImage, setModalImage] = useState();

  const handleClick = () => onClick && onClick()

  return (
    <>
      <div className={styles["gallery-slide"]}>
        <div className={styles['gallery-slide__big']} onClick={handleClick}>
          <div className={styles['icon']} onClick={() => setModalImage(image?.item_name)}><Icon icon='zoom' /></div>
          <div className={styles['img']}><Image src={image?.item_name} width={'271'} height={'184'} alt={'Benoplast Galeri'} onClick={() => setModalImage(image?.item_name)} /></div>
          {foodly && <Icon icon={'foodly'} />}
        </div>
        <div className={styles["gallery-slide__layer"]}>
          {data?.map((item, index) => <div key={index}><picture onClick={() => setImage(item)}><Image src={item.item_name} width={'214'} height={'138'} alt={'Benoplast Galeri'} /></picture></div>)}
        </div>
      </div>

      {modalImage && <Modal onClose={() => setModalImage('')}>
        <div className={'modal-gallery'} >
          <Image
            src={modalImage}
            width={"700"}
            height={"486"}
            alt={'Benoplast Galeri'}
          />
        </div>
      </Modal>}
    </>
  )
}

GallerySlide.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.array,
  foodly: PropTypes.bool
};