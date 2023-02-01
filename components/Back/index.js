import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './Back.module.scss';
import { Icon } from '../';


export const Back = (props) => {
  const { text } = props;

  return (
    <div className={classNames(styles['back'])}>
      <Link href={'#'}> {text} </Link>
    </div>
  )
}

Back.propTypes = {
  text: PropTypes.string
};

Back.defaultProps = {
  text: "Geri"
}