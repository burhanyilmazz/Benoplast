import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import slug from 'slug'

import { Icon } from '../';

import styles from './MobileNav.module.scss';

export const MobileNav = (props) => {
  const { isShow, nav } = props;
  const [list] = useState(nav)
  const [childList, setChildList] = useState(null)
  const [grandList, setGrandList] = useState(null)

  const onClickNav = (index) => {
    setChildList(list[index])
  }
  const onClickSector = (index) => {
    setGrandList(childList.children[index])
  }

  useEffect(() => {
    setChildList(null)
    setGrandList(null)
  }, [isShow])

  const sectorDetailUrl = '/sektor';
  const systemDetailUrl = '/sistem';

  return (
    <aside className={classNames(styles['sidebar'], {[styles['sidebar--open']] : isShow })}>

      <div className={classNames(styles['page'], styles['page-1'], {[styles['active']] : isShow })}>
        <nav>
          <ul>
            {
              list?.map((item, index) => {
                return (
                  <li
                    className={classNames({[styles['nav--active']] : item.isActive, [styles['nav--open']] : item.isOpen })} 
                    onClick={() => onClickNav(index)}
                    key = {index}
                  >
                    <span>{item.title}</span>
                    <Icon icon={'arrow'} />
                  </li>
                )
              })
            }
            <li><Link href='/kariyer'>Kariyer</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/iletisim'>İletişim</Link></li>
          </ul>
        </nav>

        <div className={styles['language']}>
          <Link href={'/'}>EN</Link>
          <Link href={'/'} className={styles['language--active']}>TR</Link>
        </div>

        <div className={styles['policy']}>
          <Link href={'/kisisel-verilerin-korunmasi'}>Kişisel Verileri Koruma Kanunu</Link>
          <Link href={'/cerez-politikasi'}>Gizlilik ve Güvelik Politikası</Link>
        </div>

      </div>
      <div className={classNames(styles['page'], styles['page-2'], {[styles['active']] : childList?.children })}>
        <div className={styles['back']} onClick={() => setChildList(null)}>
          <Icon icon={'arrow'} />
          <span>Geri</span>
        </div>
        <nav>
          <ul>
            {
              childList?.children.map((item, index) => {
                if (item.children) {
                  return (
                    <li
                      className={classNames({[styles['nav--active']] : item.isActive, [styles['nav--open']] : item.isOpen })} 
                      onClick={() => onClickSector(index)}
                      key = {index}
                    >
                      <span>{item.title}</span>
                      <Icon icon={'arrow'} />
                    </li>
                  )
                }
                return <li key={index}><Link href={`/${childList.folder}/${slug(item.title)}-${item.id}`}>{item.title}</Link></li>
              })
            }
          </ul>
        </nav>
      </div>
      <div className={classNames(styles['page'], styles['page-3'], {[styles['active']] : grandList?.children })}>
        <div className={styles['back']} onClick={() => setGrandList(null)}>
          <Icon icon={'arrow'} />
          <span>Geri</span>
        </div>
        <nav>
          <h3>{grandList?.title}</h3>
          <ul>
            {
              grandList?.children.map((item, index) => {
                const url = childList.type === 'sectors' ? sectorDetailUrl : systemDetailUrl;
                return (
                  <li key={index}><Link href={`${url}/${slug(item.title)}-${item.id}-${grandList.id}`}>{item.title}</Link></li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </aside>
  )
}

MobileNav.propTypes = {
	isShow: PropTypes.bool,
  nav: PropTypes.array,
  outsideClick: PropTypes.func
};

MobileNav.defaultProps = {
	isShow: false,
}