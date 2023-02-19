import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import slug from 'slug'

import styles from './MobileFooter.module.scss';

export const MobileFooter = (props) => {
  const { nav } = props;
  const [list, setList] = useState(nav)

  const onClickNav = (index) => {
    list[index].isOpen = !list[index].isOpen;
    list.map((item, i) => {
      if (i !== index) list[i].isOpen = false
    })

    setList([...list])
  }

  return (
    <nav className={classNames(styles['mobile-footer'])}>
      <ul>
        {
          list?.map((item, index) => {
            return (
              <li
                className={classNames({[styles['nav--active']]: item.isOpen})}
                onClick={() => onClickNav(index)}
                key={index}
              >
                <span>{item.title}</span>
                <ul>
                  {
                    item?.children?.map((child, k) => {
                      return <li key={k}><Link href={`/${item.folder}/${slug(child.title)}-${child.id}`}>{child.title}</Link></li>
                    })
                  }
                </ul>
              </li>
            )
          })
        }
        <li><Link href='/kariyer'>Kariyer</Link></li>
        <li><Link href='/blog'>Blog</Link></li>
        <li><Link href='/iletisim'>İletişim</Link></li>
      </ul>
    </nav>
  )
}

MobileFooter.propTypes = {
  nav: PropTypes.array,
  outsideClick: PropTypes.func
};

MobileFooter.defaultProps = {
}