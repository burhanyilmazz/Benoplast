import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './ScrollIcon.module.scss';

export const ScrollIcon = (props) => {
  const {className} = props;

  return (
    <div className={classNames(styles['scroll'], className)}>
      <span>Scroll</span>
      <div />
    </div>
  )
}

ScrollIcon.propTypes = {
	className: PropTypes.string
};