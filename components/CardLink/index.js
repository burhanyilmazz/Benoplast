import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../../components'
import styles from './CardLink.module.scss';

export const CardLink = (props) => { 
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

CardLink.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.string,
	path: PropTypes.string,
};

CardLink.defaultProps = {
	path: '#',
};