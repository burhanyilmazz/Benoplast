
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link';
import styles from './ListBox.module.scss';

export const ListBox = (props) => {
  const { data, path } = props;
 
  return (
    <Link href={path} className={classNames(styles['list-box'])}>
      <Image src={data?.bg_image} width={'376'} height={'220'} alt={data?.title} fetchpriority="high"  />
      <Image className={classNames(styles['list-box__icon'])} src={data?.icon_image} width={'376'} height={'220'} alt={data?.title} fetchpriority="high"  />
      <span>{data?.title}</span>
    </Link>
  )
}

ListBox.propTypes = {
  data: PropTypes.object,
  path: PropTypes.string
};

ListBox.defaultProps = {
  path: '#'
}