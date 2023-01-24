import { useEffect } from 'react'
import Image from 'next/image'

import styles from '../assets/styles/NotFound.module.scss'
import { Button } from '../components'

export default function NotFound() {
  useEffect(() => {
    document.body.classList.add("paddless");
  }, [])
  
  return (
    <>
      <section className={styles['notfound']}>
        <div className={styles['logo']}>
          <Image src={'/images/logo/logo.svg'} width={'204'} height={'58'} alt={'Benoplast'} fetchpriority="high" />
        </div>
        <div className={styles['image']}>
          <Image src='/images/404.svg' width={890} height={387} alt={'404 Not Found'} fetchpriority="high" />
        </div>
        <h1>Sayfa Bulunamadı</h1>
        <Button text={'Ana Sayfa'} locale href={'/'} className={styles['button']} />
      </section>
    </>
  )
}