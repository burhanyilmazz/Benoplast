import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../../components'
import styles from './Card.module.scss';

export const Card = (props) => { 
  const { className, title, image, path } = props;
  
  return (
    <Link href={path} className={classNames(styles['card'], className)}>
      <figure>
        <picture>
          <Image src={image} width={'330'} height={'320'} alt={title} fetchpriority="high" />
        </picture>
        <figcaption>
          <h3>{title}</h3>
          <div className={styles['button']}><div className={styles['text']}>Ürünleri Listele</div><Icon className={styles['icon']} icon={'arrow'}/><span /></div>
        </figcaption>
      </figure>
    </Link>
  )
}

Card.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	path: PropTypes.string,
};

Card.defaultProps = {
	path: '#',
};