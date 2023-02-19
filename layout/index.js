import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Head from 'next/head'
import Link from 'next/link';
import { Header, Footer, Sidebar, MobileNav, Hamburger, SearchBar, Icon, Cookie } from '../components';

import styles from './Layout.module.scss';
import { Basket } from '../components/Basket';

export const Layout = ({ navlist, statics, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showCookie, setShowCookie] = useState(true);
  const [isfixed, setIsfixed] = useState(false);
  const [isBasket, setIsBasket] = useState(false);

  const router = useRouter()

  useEffect(() => {
    document.querySelector('html').classList.remove('disable-scroll')
    setShowCookie(localStorage.getItem("cookie") != null ? localStorage.getItem("cookie") == 'false' ? false : true : true)
    window.addEventListener('scroll', () => setIsfixed(window.scrollY > 10 ? true : false));
  }, [])

  const handleOnClickNav = (event) => {
    event
      ? document.querySelector('html').classList.add('disable-scroll')
      : document.querySelector('html').classList.remove('disable-scroll')
    setSidebarOpen(event)
    setSearchOpen(false)
  }

  const handleOnClickSearch = (event) => {
    event
      ? document.querySelector('html').classList.add('disable-scroll')
      : document.querySelector('html').classList.remove('disable-scroll')
    setSidebarOpen(false)
    setSearchOpen(event)
  }

  const handleOnClickBasket = (event) => {
    event
      ? document.querySelector('html').classList.add('disable-scroll')
      : document.querySelector('html').classList.remove('disable-scroll')
    setSidebarOpen(false)
    setSearchOpen(false)
    setIsBasket(event)
  }

  useEffect(() => {
    setSidebarOpen(false)
    setSearchOpen(false)
    document.querySelector('html').classList.remove('disable-scroll')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])


  const handleOnClickCookie = () => {
    setShowCookie(false)
    localStorage.setItem("cookie", false);
  }

  return (
    <>
      <Head>
        <title>Benoplast</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="description" content="Benoplast" />
      </Head>

      <div className={classNames(styles['header-wrap'], { [styles['header-wrap--fixed']]: isfixed })}><Header /></div>
      <div className={styles['search']} onClick={() => handleOnClickSearch(!searchOpen)}><Icon icon={'search'} /></div>
      <div className={styles['basket']} onClick={() => handleOnClickBasket(!isBasket)}><Icon icon={'basket'} /><span>2</span></div>
      <div className={styles['language']}><Link href={'/'} className={styles['language--active']}>EN</Link></div>
      <Hamburger isOpen={sidebarOpen} onClick={(event) => handleOnClickNav(event)} />

      <Sidebar nav={navlist} isShow={sidebarOpen} outsideClick={(event) => handleOnClickNav(event)} />
      <MobileNav nav={navlist} isShow={sidebarOpen} />
      <SearchBar isShow={searchOpen} outsideClick={(event) => handleOnClickSearch(event)} />
      <Basket isShow={isBasket} outsideClick={(event) => handleOnClickBasket(event)} />
      <main>
        {children}
      </main>
      <Footer navlist={navlist} policylist={statics} />
      {showCookie && <Cookie onClick={() => handleOnClickCookie()} />}
    </>
  )
}