import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'

import {Button} from ".."
import styles from './Library.module.scss';

export const Library = (props) => { 
  const { className } = props;
  
  return (
    <div className={classNames(styles['library'], className)}>
      <div className={styles['container']}>
        <span>Dijital<br />Kütüphane</span>
        <p>Güncel ürün kataloğumuz ve daha fazlası için lütfen aşağıdaki butona tıklayınız.</p>
        <div className={styles['button']}>
          <Button text={'Detaya Git'} href='/dijital-kutuphane' locale  />
        </div>
      </div>
      <div className={styles['image']}>
        <Image src={'/images/footer/digital.png'} width={'224'} height={'273'} alt={'Benoplast Dijital Kütüphane'} fetchpriority="high" />
      </div>
    </div>
  )
}

Library.propTypes = {
	className: PropTypes.string,
};