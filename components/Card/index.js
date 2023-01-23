import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../../components'
import styles from './Card.module.scss';

export const Card = (props) => { 
  const { className, title, image, path, subTitle } = props;
  
  return (
    <div className={classNames(styles['card'], className)}>
      <figure>
        <picture>
          <Image src={image} width={'200'} height={'200'} alt={title} fetchpriority="high" />
        </picture>
        <figcaption>
          <h3>{title}</h3>
          <span>{subTitle}</span>
          <div className={styles['button']}><div className={styles['text']}>Teklif Listesine Ekle</div><Icon className={styles['icon']} icon={'plus-circle'}/><span /></div>
          <Link href={path} className={styles['button-2']}><div className={styles['text']}>Ürünleri İncele</div><Icon className={styles['icon']} icon={'arrow'}/><span /></Link>
        </figcaption>
      </figure>
    </div>
  )
}

Card.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	subTitle: PropTypes.string,
	image: PropTypes.string,
	path: PropTypes.string,
};

Card.defaultProps = {
	path: '#',
};