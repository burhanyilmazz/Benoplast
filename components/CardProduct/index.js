import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import { Icon, Counter } from '../../components';

import styles from './CardProduct.module.scss';

export const CardProduct = (props) => { 
  const { className, title, image, desc, onClickDelete } = props;
  
  return (
    <div className={classNames(styles['card-product'], className)}>
      <div onClick={onClickDelete}><Icon className={styles['card-product__icon']} icon='trash'/></div>
      <figure>
        <picture>
          <Image src={image} width={'133'} height={'80'} alt={title} fetchpriority="high" />
        </picture>
        <figcaption>
          <h3>{title}</h3>
          <span>{desc}</span>
        </figcaption>
        <Counter onChange={(val) => console.log(val)} />
      </figure>
    </div>
  )
}

CardProduct.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	desc: PropTypes.string,
	image: PropTypes.string,
	path: PropTypes.string,
  onClickDelete: PropTypes.func
};