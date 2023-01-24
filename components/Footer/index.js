import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames';
import slug from 'slug'

import { SocialMedia, Logo, Newsletter, Library, Modal, Icon } from '../';

import styles from './Footer.module.scss';

export const Footer = ({ navlist }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <section className={styles['foot']}>
        <div className={classNames('container-fluid',styles['foot--content'])}>
          <Newsletter handleSubmit={() => setModalOpen(true)} />
          <Library />
          <div className={styles['social-media']}>
            <SocialMedia />
          </div>
        </div>
      </section>
      <footer className={styles['footer']}>
        <div className={classNames('container-fluid', styles['container'])}>
          <div className={styles['footer--mid']}>
            <div className={styles['logo']}>
              <Logo />
            </div>
            <nav className={styles['nav']}>
              {
                navlist.map((item, index) => {
                  return (
                    <div key={index}>
                      <h6>{item.title}</h6>
                      <ul>
                        {
                          item?.children?.map((child, i) => {
                            return (
                              <li key={i}><Link href={`/${item.folder}/${slug(child.title)}-${child.id}`}>{child.title}</Link></li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                })
              }
              <div>
                <ul>
                  <li><Link href='/kariyer'>Kariyer</Link></li>
                  <li><Link href='/blog'>Blog / Haberler</Link></li>
                  <li><Link href='/iletisim'>İletişim</Link></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className={styles['policy']}>
            <ul>
              <li><Link href='/politikalarimiz'>Politikalarımız</Link></li>
              <li><Link href='/kisisel-verilerin-korunmasi'>Kişisel Verilerin Korunması</Link></li>
              <li><Link href='/cerez-politikasi'>Çerez Politikası</Link></li>
            </ul>
          </div>
          <div className={styles['footer--bottom']}>
            <div className={styles['copyright']}>
              Copyright &copy; 2022 BENOPLAST Tüm hakları saklıdır.
            </div>
            <div className={styles['fikirmod']}>
              <a href='https://www.fikirmod.com.tr' target='_blank' title='Fikirmod' rel="noreferrer"><Image src={'/images/fikirmod.svg'} width={20} height={23} alt='Fikirmod' fetchpriority="high" /></a>
            </div>
          </div>
        </div>
      </footer>

      {modalOpen && <Modal onClose={() => setModalOpen(false)}>
        <div className='success-modal'>
          <div className='success-modal__icon'><Icon icon='check' /></div>
          <div className='success-modal__title'>Tebrikler!</div>
          <div className='success-modal__text'>E-Bülten kaydınız gerçekleşti.</div>
          <div className='success-modal__desc'>E-Posta kaydınız veritabanımıza başarıyla tanımlanmıştır. Teşekkürler.</div>
        </div>
      </Modal>}
    </>
  )
}