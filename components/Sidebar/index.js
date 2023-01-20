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

  const [search, setSearch] = useState(false)
  const [list, setList] = useState(nav)
  const [sectors, setSectors] = useState(nav?.filter(item => item.type === 'sectors'))
  const [systems, setSystems] = useState(nav?.filter(item => item.type === 'systems'))

  const onClickNav = (index) => {
    list[index].isOpen = !list[index].isOpen;
    list.map((item, i) => {
      if (i !== index) list[i].isOpen = false
    })

    setList([...list])
  }

  const onClickSector = (index) => {
    sectors.isOpen = !sectors[index].isOpen;
    sectors.map((item, i) => {
      if (i !== index) sectors[i].isOpen = false
    })

    setSectors([...sectors])
  }

  const onClickSystem = (index) => {
    systems[0].children[index].isOpen = !systems[0].children[index].isOpen;
    systems[0].children.map((item, i) => {
      if (i !== index) systems[0].children[i].isOpen = false
    })

    setSystems([...systems])
  }

  const handleOutsideClick = (event) => {
    const { target } = event;

    if (target.nodeName === "ASIDE") {
      outsideClick && outsideClick()
    }
  }

  const sectorDetailUrl = '/sektor';
  const systemDetailUrl = '/sistem';

  return (
    <aside className={classNames(styles['sidebar'], { [styles['sidebar--open']]: isShow })} onClick={(event) => handleOutsideClick(event)}>
      <div className={classNames(styles['page'], styles['page-1'])}>
        <nav>
          <ul>
            {
              list?.map((item, index) => {
                if (item.type === 'sectors' || item.type === 'systems') return false;

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
          <h3>Ürün grupları</h3>
          {sectors && <ul>
            {
              sectors.map((item, index) => {
                return (
                  <li
                    className={classNames({ [styles['nav--active']]: item.isActive, [styles['nav--open']]: item.isOpen })}
                    onClick={() => onClickSector(index)}
                    key={index}
                  >
                    <span>{item.title}</span>
                    <Image src={item.src} width={164} height={110} alt={item.title} fetchpriority="high" />
                    {/* <ul>
                      {
                        item?.children?.map((child, i) => {
                          return (
                            <li key={i}><Link href={`${sectorDetailUrl}/${slug(child.title)}-${child.id}-${item.id}`}>{child.title}</Link></li>
                          )
                        })
                      }
                    </ul> */}
                  </li>
                )
              })
            }
          </ul>}
        </nav>
      </div>
      {/* <div className={classNames(styles['page'], styles['page-3'])}>
        <nav>
          <h3>Sistemler</h3>
          {systems && <ul>
            {
              systems[0]?.children?.map((item, index) => {
                return (
                  <li
                    className={classNames({[styles['nav--active']] : item.isActive, [styles['nav--open']] : item.isOpen })} 
                    onClick={() => onClickSystem(index)}
                    key = {index}
                  >
                    <span>{item.title}</span>
                    <ul>
                      {
                        item?.children?.map((child, i) => {
                          return (
                            <li key={i}><Link href={`${systemDetailUrl}/${slug(child.title)}-${child.id}-${item.id}`}>{child.title}</Link></li>
                          )
                        })
                      }
                    </ul>
                  </li>
                )
              })
            }
          </ul>}
        </nav>
      </div> */}
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