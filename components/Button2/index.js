import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link'

import {Icon} from ".."
import styles from './Button2.module.scss';

export const Button2 = (props) => { 
  const { className, text, locale, href, target, button, onClick, icon, active } = props;

  const handleClick = () => onClick && onClick();
  
  return (
    <div className={classNames(styles['button'], {[styles['button--icon']]: icon, [styles['button--active']]: active}, className)}>
      {locale && <Link href={href}><div className={styles['button__content']}>{text}{icon && <Icon icon={'arrow'} />}</div></Link> }
      {!locale && !button && <a href={href} target={target} onClick={handleClick}><div className={styles['button__content']}>{text}{icon && <Icon icon={'arrow'} />}</div></a> }
      {button && !locale && <button onClick={handleClick} aria-label={icon ? 'icon buton' : text}><div className={styles['button__content']}>{text}{icon && <Icon icon={'arrow'} />}</div></button> }
    </div>
  )
}

Button2.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	icon: PropTypes.string,
	href: PropTypes.string,
	target: PropTypes.string,
	locale: PropTypes.bool,
  download: PropTypes.bool,
  button: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

Button2.defaultProps = {
  href: '#'
}