import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Icon, Basket, ShareMedia } from "../"

import styles from './OfferBox.module.scss';
import Link from 'next/link';

export const OfferBox = (props) => {
  const { className, buttons, counts, degree, tds } = props;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isBasket, setIsBasket] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const handleOnClickBasket = (event) => {
    event
      ? document.querySelector('html').classList.add('disable-scroll')
      : document.querySelector('html').classList.remove('disable-scroll')
    setSidebarOpen(false)
    setSearchOpen(false)
    setIsBasket(event)
  }

  const handleShare = () => {
    setIsShare(!isShare)
  }

  return (
    <>
      <div className={classNames(styles['offer-box'], className)}>
        {buttons && <ul>
          <li className={styles['offer-box__button']} onClick={() => handleShare(!isShare)}>
            {isShare && <ShareMedia className={styles['share']} />}
            <Icon icon='share' />
            <span>Sayfayı Paylaş</span>
          </li>
          {degree && <li className={styles['offer-box__button']}>
            <Icon icon='360degree' />
            <span>XR 360</span>
          </li>}
          {tds && <li className={styles['offer-box__button']}>
            <Link href={tds} target='_blank'>
              <Icon icon='download' />
              <span>Teknik Broşür (TDS)</span>
            </Link>
          </li>}
          <li className={styles['offer-box__button']} >
            <Icon icon='plus-circle' />
            <span>Teklif Listesine Ekle</span>
          </li>
        </ul>}
        <div className={styles['basket']} onClick={() => handleOnClickBasket(!isBasket)}>
          <Icon icon={'basket'} />
          <span>{counts}</span>Teklif Al
        </div>
      </div>
      <Basket isShow={isBasket} outsideClick={(event) => handleOnClickBasket(event)} />
    </>
  )
}

OfferBox.propTypes = {
  className: PropTypes.string,
  buttons: PropTypes.bool,
  data: PropTypes.any,
  text: PropTypes.string,
  counts: PropTypes.number
};

OfferBox.defaultProps = {
  counts: 2
}