import { useState, useContext } from 'react';
import { CartContext } from "../../context/cartContext"
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Basket.module.scss';
import { Button, CardProduct, ContactForm, Icon } from '../';

export const Basket = (props) => {
  const {items, removeFromCart} = useContext(CartContext)
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

  return (
    <aside className={classNames(styles['basket'], { [styles['basket--open']]: isShow })} onClick={(event) => handleOutsideClick(event)}>
      {isShow && <div className={styles['basket__close']} onClick={() => outsideClick && outsideClick()}><Icon icon={'close'} /></div> }
      <div className={styles['basket__wrap']}>
        <div className={styles['basket__head']}>
          <h2>Teklif Al</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>

        {offer ? <div className={styles['basket__content']}>
          <ContactForm backClick={() => setOffer(false)} />
        </div> : <>
          {items.length > 0 ?  <>
            <div className={styles['basket__content']}>
              {items?.map((item, index) => <CardProduct key={index} title={item?.title} desc={item?.cat_title} image={item?.listing_image} onClickDelete={() => removeFromCart(item?.id)} />)}
            </div>

            <div className={styles['basket__foot']}>
              <Button variant={'middle'} text={'Teklif Formuna git'} onClick={() => handleButtonClick()} />
            </div>
          </> : <div className={styles['basket__content']}><h3>Sepette ürün bulunmamaktadır!</h3></div> }
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