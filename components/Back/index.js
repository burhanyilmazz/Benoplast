import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './Back.module.scss';
import { Icon } from '../';


export const Back = (props) => {
  const { } = props;

  return (
    <div className={classNames(styles['back'])}>
      <Link href={'#'}>  Geri </Link>
    </div>
  )
}

Back.propTypes = {
};

Back.defaultProps = {
}