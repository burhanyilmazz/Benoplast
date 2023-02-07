import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import slug from 'slug'

import styles from './LeftNav.module.scss';

export const LeftNav = (props) => {
  const { data, title, folder } = props;
  const [list, setList] = useState(data?.children)

  const router = useRouter()
  const reg = /^\d+$/;
  // const id = router.query.slug.split('-').slice(-1)[0];
  // const id2 = router.query.slug.split('-').slice(-2)[0];
  // const pageId = reg.test(id2) && id2 ? id2 : id;

  const onClickNav = (index) => {
    list[index].isOpen = !list[index].isOpen;
    list.map((item, i) => {
      if (i !== index) list[i].isOpen = false
    })

    setList([...list])
  }

  useEffect(() => {
  }, [router.asPath])

  return (
    <div className={classNames(styles['left-nav'])}>
      <div className={styles['content']}>
        <h3>{title || data?.title}</h3>
        <ul>
          {list?.map((item, index) => {
            const url = folder ? `${folder}/${slug(item.title)}-${item.id}-${data.id}` : `/${data.folder}/${slug(item.title)}-${item.id}`
            if (item.children) {
              return (
                <li key={index}
                  className={classNames({ [styles['active']]: item.isActive, [styles['open']]: item.isOpen })}
                  onClick={() => onClickNav(index)}
                >
                  {item.title}
                  <ul>
                    {item?.children?.map((i, k) => {
                      return <li key={k}><Link href={'#'}>{i.title}</Link></li>
                    })
                    }
                  </ul>
                </li>
              )
            }
            return <li key={index} className={classNames({ [styles['active']]: 1 == item.id })}><Link href={url}>{item.title}</Link></li>
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