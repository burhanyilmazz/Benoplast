import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './Back.module.scss';

export const Back = (props) => {
  const { text, path } = props;

  return (
    <div className={classNames(styles['back'])}>
      <Link href={path}>{text}</Link>
    </div>
  )
}

Back.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};

Back.defaultProps = {
  text: "Geri",
  path: '#'
}