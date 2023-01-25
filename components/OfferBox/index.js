import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Icon, Basket } from "../"

import styles from './OfferBox.module.scss';

export const OfferBox = (props) => {
  const { className, data, buttons } = props;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isBasket, setIsBasket] = useState(false);

  const handleOnClickBasket = (event) => {
    event
      ? document.querySelector('html').classList.add('disable-scroll')
      : document.querySelector('html').classList.remove('disable-scroll')
    setSidebarOpen(false)
    setSearchOpen(false)
    setIsBasket(event)
  }

  return (
    <>
      <div className={classNames(styles['offer-box'], className)}>
        {buttons && <ul>
          {data?.map((item, index) => {
            return (
              <li className={styles['offer-box__button']} key={index}>
                <Icon icon={item?.icon} />
                <span>{item?.title}</span>
              </li>
            )
          })}
        </ul>}
        <div className={styles['basket']} onClick={() => handleOnClickBasket(!isBasket)}>
          <Icon icon={'basket'} />
          <span>2</span>
          Teklif Al
        </div>
      </div>
      <Basket isShow={isBasket} outsideClick={(event) => handleOnClickBasket(event)} />
    </>

  )
}

OfferBox.propTypes = {
  className: PropTypes.string,
  buttons: PropTypes.bool,
  data: PropTypes.any
};