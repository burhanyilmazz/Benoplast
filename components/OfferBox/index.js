import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Icon, ShareMedia } from "../"

import styles from './OfferBox.module.scss';
import Link from 'next/link';

export const OfferBox = (props) => {
  const { className, buttons, counts, degree, tds, onClickXR, onClickAddBasket, onClickOpenBasket } = props;
  const [isShare, setIsShare] = useState(false);

  return (
    <>
      <div className={classNames(styles['offer-box'], className)}>
        {buttons && <ul>
          <li className={styles['offer-box__button']} onClick={() => setIsShare(!isShare)}>
            {isShare && <ShareMedia className={styles['share']} />}
            <Icon icon='share' />
            <span>Sayfayı Paylaş</span>
          </li>
          {degree && <li className={styles['offer-box__button']} onClick={onClickXR}>
            <Icon icon='360degree' />
            <span>XR 360</span>
          </li>}
          {tds && <li className={styles['offer-box__button']}>
            <Link href={tds} target='_blank'>
              <Icon icon='download' />
              <span>Teknik Broşür (TDS)</span>
            </Link>
          </li>}
          <li className={styles['offer-box__button']} onClick={onClickAddBasket}>
            <Icon icon='plus-circle' />
            <span>Teklif Listesine Ekle</span>
          </li>
        </ul>}
        <div className={styles['basket']} onClick={onClickOpenBasket}>
          <Icon icon={'basket'} />
          <span>{counts}</span>Teklif Al
        </div>
      </div>
    </>
  )
}

OfferBox.propTypes = {
  className: PropTypes.string,
  buttons: PropTypes.bool,
  data: PropTypes.any,
  text: PropTypes.string,
  counts: PropTypes.number,
  onClickXR: PropTypes.func,
  onClickAddBasket: PropTypes.func,
  onClickOpenBasket: PropTypes.func,
};

OfferBox.defaultProps = {
  counts: 0
}