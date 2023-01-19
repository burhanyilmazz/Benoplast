
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link'

import styles from './CardLibrary.module.scss';
import { Icon } from '../';

export const CardLibrary = (props) => { 
  const { className, title, path, years } = props;
  
  return (
    <Link href={path} target={'_blank'} className={classNames(styles['card'], className)}>
      <span>{years}</span>
      <h4>{title}</h4>
      <Icon icon={'pdf'} />
      <div className={styles['download']}>
        İndir <Icon icon={'download'} />
      </div>
    </Link>
  )
}

CardLibrary.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	years: PropTypes.string,
	path: PropTypes.string,
};

CardLibrary.defaultProps = {
	path: '#',
};