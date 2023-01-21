import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Boxes.module.scss';

export const Boxes = (props) => { 
  const { title, number } = props;

  
  return (
    <div className={classNames(styles['boxes'])}>
      <h3>{title}</h3>
      <span>{number}<sup>+</sup></span>
    </div>
  )
}

Boxes.propTypes = {
	title: PropTypes.string,
  number: PropTypes.string,
};

Boxes.defaultProps = {
}
