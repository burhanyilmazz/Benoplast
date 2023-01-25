import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './ListBox.module.scss';
import { Icon } from '../';


export const ListBox = (props) => {
  const { data } = props;

  return (
    <div className={classNames(styles['list-box'])} style={{"background-image": `${data?.hover} `}}>
      <Icon icon={data?.icon}/>
      <span>{data?.title}</span>
    </div>
  )
}

ListBox.propTypes = {
  data: PropTypes.any
};

ListBox.defaultProps = {
}