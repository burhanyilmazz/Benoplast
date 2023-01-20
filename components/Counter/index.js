import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Icon } from '../../components';

import styles from './Counter.module.scss';

export const Counter = (props) => {
  const { className, maxCount } = props;
  const [counter, setCounter] = useState(0);


  const handleClickMinus = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  }

  const handleClickPlus = () => {
    setCounter(count => count + 1);
  }

  return (
    <div className={classNames(styles['counter'], className)}>
      <div onClick={handleClickMinus} ><Icon icon="minus" /></div>
      <input readOnly value={counter} max-count={maxCount} type="text" />
      <div onClick={handleClickPlus} ><Icon icon="plus" /></div>
    </div>
  )
}

Counter.propTypes = {
  className: PropTypes.string,
  maxCount: PropTypes.number
};

Counter.defaultProps = {
};