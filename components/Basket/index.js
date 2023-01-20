import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Basket.module.scss';
import { Button, CardProduct, ContactForm } from '../';


export const Basket = (props) => {
  const { isShow, outsideClick } = props;
  const [offer, setOffer] = useState(false);

  const handleOutsideClick = (event) => {
    const { target } = event;

    if (target.nodeName === "ASIDE") {
      outsideClick && outsideClick()
    }
  }

  const handleButtonClick = () => {
    setOffer(true)
  }

  const handleButtonClickBack = () => {
    setOffer(false)
  }

  return (
    <aside className={classNames(styles['basket'], { [styles['basket--open']]: isShow })} onClick={(event) => handleOutsideClick(event)}>
      <div className={styles['basket__wrap']}>
        <div className={styles['basket__head']}>
          <h2>Teklif Al</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>

        {offer ? <div className={styles['basket__content']}>
          <ContactForm />
        </div> : <>
          <div className={styles['basket__content']}>
            <CardProduct title="B-400" desc="Plastik Kilitli Katlanır Kasa" image="/images/cards/card-1.png" />

            <CardProduct title="B-400" desc="Plastik Kilitli Katlanır Kasa" image="/images/cards/card-1.png" />

            <CardProduct title="B-400" desc="Plastik Kilitli Katlanır Kasa" image="/images/cards/card-1.png" />
          </div>

          <div className={styles['basket__foot']}>
            <Button variant={'middle'} text={'Teklif Formuna git'} onClick={() => handleButtonClick()} />
          </div>
        </>
        }
      </div>
    </aside>
  )
}

Basket.propTypes = {
  isShow: PropTypes.bool,
};

Basket.defaultProps = {
  isShow: false,
}