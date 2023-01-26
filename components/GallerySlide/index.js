import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'

import styles from './GallerySlide.module.scss';
import { Icon, Modal } from "..";

export const GallerySlide = (props) => {
  const { onClick, data } = props;
  const [image, setImage] = useState(data[0])
  const [modalImage, setModalImage] = useState();

  const handleClick = () => onClick && onClick()

  return (
    <>
      <div className={styles["gallery-slide"]}>
        <div className={styles['gallery-slide__big']} onClick={handleClick}>
          <div className={styles['icon']}><Icon icon='zoom' /></div>
          <Image src={image?.image} width={'271'} height={'184'} alt={'Benoplast Galeri'} onClick={() => setModalImage(image?.image)} />
          <Icon icon={'foodly'} />
        </div>
        <div className={styles["gallery-slide__layer"]}>
          {data?.map((item, index) => <picture key={index} onClick={() => setImage(item)}><Image src={item.thumbnail} width={'214'} height={'138'} alt={'Benoplast Galeri'} /></picture>)}
        </div>
      </div>

      {modalImage && <Modal onClose={() => setModalImage('')}>
        <div className={'modal-gallery'} >
          <Image
            src={modalImage}
            width={"700"}
            height={"486"}
            alt={'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar'}
          />
        </div>
      </Modal>}
    </>
  )
}

GallerySlide.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.array
};