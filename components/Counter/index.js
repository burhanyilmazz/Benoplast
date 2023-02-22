import { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Icon } from '../../components';

import styles from './Counter.module.scss';

export const Counter = (props) => {
  const { className, maxCount, onChange } = props;
  const [counter, setCounter] = useState(1);

  const handleClickMinus = () => {
    if (counter > 1) {
      setCounter(count => count - 1);
    }
  }

  const handleClickPlus = () => {
    setCounter(count => count + 1);
  }

  useEffect(() => {
    onChange && onChange(counter)
  }, [counter])
  
  return (
    <div className={classNames(styles['counter'], className)}>
      <div onClick={handleClickMinus} ><Icon icon="minus" /></div>
      <input value={counter} max-count={maxCount} type="text" onChange={(event) => setCounter(Number(event.target.value))} />
      <div onClick={handleClickPlus} ><Icon icon="plus" /></div>
    </div>
  )
}

Counter.propTypes = {
  className: PropTypes.string,
  maxCount: PropTypes.number,
  onChange: PropTypes.func
};