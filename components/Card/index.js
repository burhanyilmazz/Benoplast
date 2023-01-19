import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'

import styles from './Card.module.scss';

export const Card = (props) => { 
  const { className, title, image, path, category } = props;
  
  return (
    <Link href={path} className={classNames(styles['card'], className)}>
      <figure>
        <picture>
          <Image src={image} width={'330'} height={'320'} alt={title} fetchpriority="high" />
        </picture>
        <figcaption>
          {category && <h4>{category}</h4>}
          <h3>{title}</h3>
          <div className={styles['arrow']} />
        </figcaption>
      </figure>
    </Link>
  )
}

Card.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	category: PropTypes.string,
	image: PropTypes.string,
	path: PropTypes.string,
};

Card.defaultProps = {
	path: '#',
};