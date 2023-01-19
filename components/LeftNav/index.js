import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import slug from 'slug'

import styles from './LeftNav.module.scss';

export const LeftNav = (props) => { 
  const { data, title, folder } = props;
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const reg = /^\d+$/;
  const id = router.query.slug.split('-').slice(-1)[0];
  const id2 = router.query.slug.split('-').slice(-2)[0];
  const pageId = reg.test(id2) && id2 ? id2 : id;

  useEffect(() => {
    setOpen(false)
  }, [router.asPath])

  return (
    <div className={classNames(styles['left-nav'], {[styles['left-nav--open']]: open})} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className={styles['left-nav__button']}>
        <div className={styles['hamburger']}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <span>{title || data?.title}</span>
      </div>
      <div className={styles['content']}>
        <h3>{title || data?.title}</h3>
        <ul>
          { data?.children?.map((item, index) => {
            const url = folder ? `${folder}/${slug(item.title)}-${item.id}-${data.id}` : `/${data.folder}/${slug(item.title)}-${item.id}`
            return <li key={index}><Link href={url} className={classNames({[styles['active']]: pageId == item.id})}>{item.title}</Link></li>
          })}
        </ul>
      </div>
    </div>
  )
}

LeftNav.propTypes = {
	data: PropTypes.object,
	title: PropTypes.object,
	folder: PropTypes.string,
};