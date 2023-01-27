
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image'
import styles from './ListBox.module.scss';
import { Icon } from '../';


export const ListBox = (props) => {
  const { data } = props;
 
  return (
    <div className={classNames(styles['list-box'])}>
      <Image src={data?.hover} width={'376'} height={'220'} alt={data?.title} fetchpriority="high"  />
      <Icon icon={data?.icon} />
      <span>{data?.title}</span>
    </div>
  )
}

ListBox.propTypes = {
  data: PropTypes.any
};

ListBox.defaultProps = {
}