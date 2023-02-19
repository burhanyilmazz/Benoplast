import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'

import styles from './CardBlog.module.scss';

export const CardBlog = (props) => {
  const { className, data, path, footer, footerText } = props;

  return (
    <Link href={path} className={classNames(styles['card-blog'], className)}>
      <figure>
        {data?.listing_image && <picture>
          <Image src={data?.listing_image} width={'501'} height={'247'} alt={data?.title} fetchpriority="high" />
        </picture>}
        <figcaption>
          {data?.created_at && <span>{new Intl.DateTimeFormat('tr', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(data?.created_at))}</span>}
          {data?.title && <h3>{data?.title}</h3>}
        </figcaption>

        {footer && <div className={styles['footer']}>
          {footerText} <div className={styles['arrow']} />
        </div>}
      </figure>
    </Link>
  )
}

CardBlog.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string,
  footer: PropTypes.bool,
  footerText: PropTypes.string
};

CardBlog.defaultProps = {
  path: '#',
  footerText: 'Haberin Devamı...'
};