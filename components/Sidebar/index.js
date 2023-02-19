import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image'
import PropTypes from 'prop-types';
import slug from 'slug'

import { SocialMedia } from '../';

import styles from './Sidebar.module.scss';

export const Sidebar = (props) => {
  const { isShow, nav, outsideClick } = props;

  const [list, setList] = useState(nav)
  const [products] = useState(nav?.filter(item => item.type === 'product'))

  const onClickNav = (index) => {
    list[index].isOpen = !list[index].isOpen;
    list.map((item, i) => {
      if (i !== index) list[i].isOpen = false
    })

    setList([...list])
  }

  const handleOutsideClick = (event) => {
    const { target } = event;

    if (target.nodeName === "ASIDE") {
      outsideClick && outsideClick()
    }
  }

  return (
    <aside className={classNames(styles['sidebar'], { [styles['sidebar--open']]: isShow })} onClick={(event) => handleOutsideClick(event)}>
      <div className={classNames(styles['page'], styles['page-1'])}>
        <nav>
          <ul>
            {
              list?.map((item, index) => {
                if (item.type === 'product') return false;

                if (item.children) {
                  return (
                    <li
                      className={classNames({ [styles['nav--active']]: item.isActive, [styles['nav--open']]: item.isOpen })}
                      onClick={() => onClickNav(index)}
                      key={index}
                    >
                      <span>{item.title}</span>
                      <ul>
                        {
                          item.children.map((child, i) => {
                            return (
                              <li key={i}><Link href={`/${item.folder}/${slug(child.title)}-${child.id}`}>{child.title}</Link></li>
                            )
                          })
                        }
                      </ul>
                    </li>
                  )
                }
              })
            }
            <li><Link href='/blog'>Blog/Haberler</Link></li>
            <li><Link href='/iletisim'>İletişim</Link></li>
          </ul>
        </nav>

        <SocialMedia className={styles['social-media']} />
      </div>
      <div className={classNames(styles['page'], styles['page-2'])}>
        <nav>
          <h3>{products[0].title}</h3>
          {products && <ul>
            {
              products?.map(item => item?.children.map((child, i) => {
                return (
                  <li key={i}>
                    <Link href={`/${item.folder}/${slug(child.title)}-${child.id}`}>
                      <span>{child.title}</span>
                      {child.listing_image && <Image src={child.listing_image} width={164} height={110} alt={child.title} fetchpriority="high" />}
                    </Link>
                  </li>
                )
              }))
            }
          </ul>}
        </nav>
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  isShow: PropTypes.bool,
  nav: PropTypes.array,
  outsideClick: PropTypes.func
};

Sidebar.defaultProps = {
  isShow: false,
}