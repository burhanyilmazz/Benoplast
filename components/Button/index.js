import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link'

import {Icon} from "../"
import styles from './Button.module.scss';

export const Button = (props) => { 
  const { className, text, locale, href, target, download, button, onClick, variant, icon } = props;

  const handleClick = () => onClick && onClick();
  
  return (
    <div className={classNames(styles['button'], className, {[styles['button--download']]: download}, {[styles[`button--${variant}`]]: variant})}>
      {locale && <Link href={href}><div className={styles['text']}>{text}</div> <div className={styles['icon']}><Icon icon={icon} /></div> <span /></Link> }
      {!locale && !button && <a href={href} target={target} onClick={handleClick}><div className={styles['text']}>{text}</div> <div className={styles['icon']}><Icon icon={icon} /></div> <span /></a> }
      {button && !locale && <button onClick={handleClick}><div className={styles['text']}>{text}</div> <div className={styles['icon']}><Icon icon={icon} /></div> <span /></button> }
    </div>
  )
}

Button.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	href: PropTypes.string,
	target: PropTypes.string,
	locale: PropTypes.bool,
  download: PropTypes.bool,
  button: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  icon: PropTypes.string
};

Button.defaultProps = {
  href: '#',
  icon: 'arrow'
}