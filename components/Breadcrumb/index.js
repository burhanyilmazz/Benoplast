import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link'

import styles from './Breadcrumb.module.scss';

export const Breadcrumb = (props) => { 
  const { className, data, unmobile } = props;
  
  return (
    <ul className={classNames(styles['breadcrumb'], {[styles['breadcrumb--unmobile']]: unmobile}, className)}>
      {
        data?.map((item, index) => {
          return (
            <li key={index}>
              {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
            </li>
          )
        })
      }
    </ul>
  )
}

Breadcrumb.propTypes = {
  className: PropTypes.string,
	data: PropTypes.array,
	unmobile: PropTypes.bool,
};