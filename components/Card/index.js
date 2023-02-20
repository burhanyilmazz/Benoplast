import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../../components'
import styles from './Card.module.scss';

export const Card = (props) => {
  const { className, title, image, path, subTitle, buttonText, buttonText2 } = props;

  return (
    <div className={classNames(styles['card'], className)}>
      <figure>
        <figcaption>
          {title && <h3>{title}</h3>}
          {subTitle && <span>{subTitle}</span>}
        </figcaption>
        {image && <picture>
          <Image src={image} width={'200'} height={'200'} alt={title} fetchpriority="high" />
        </picture>}
        <div className={styles['button']}>
          <div className={styles['text']}>{buttonText}</div>
          <Icon className={styles['icon']} icon={'plus-circle'} />
        </div>
        <Link href={path} className={styles['button-2']}>
          <div className={styles['text']}>{buttonText2}</div>
          <Icon className={styles['icon']} icon={'arrow'} />
        </Link>
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
  buttonText: PropTypes.string,
  buttonText2: PropTypes.string
};

Card.defaultProps = {
  path: '#',
  buttonText: "Teklif Listesine Ekle",
  buttonText2: "Ürünleri İncele"
};