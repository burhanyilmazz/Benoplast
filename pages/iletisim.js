
import {useEffect, useRef} from 'react'
import { Layout } from '../layout'
import Image from 'next/image'
import { Breadcrumb, CardContact, ContactForm, Icon } from '../components';

import { Loader } from '@googlemaps/js-api-loader';

import styles from '../assets/styles/Contact.module.scss'

import { navlist } from '../utils/Nav';
import { mapOptions } from '../utils/Map';

import Link from 'next/link';

export default function Contact() {
  const googlemap = useRef(null);
  const contact = [
    {
      id: 1,
      coordinate: { lat: 41.0062198, lng: 29.1620945 }
    },
  ]

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyALsmBLvMeKOlK2M5SHs2_jgYeJM-6UdBU",
      sensor: false,
      language: 'tr'
    });
    let map;

    loader.load().then(() => {
      const google = window.google;
      const bounds = new google.maps.LatLngBounds();
      const icon = "/images/icons/pin.svg";

      map = new google.maps.Map(googlemap.current, mapOptions);

      contact.map((item, index) => {
        const marker = new google.maps.Marker({
          position: { lat: item.coordinate.lat, lng: item.coordinate.lng },
          map,
          icon
        });

        bounds.extend(marker.position);

        marker.addListener("click", () => window.open(`https://goo.gl/maps/ZHwoxLAn4msx5rS18`, '_blank'));
      })

      //map.fitBounds(bounds);

      map.setCenter(bounds.getCenter());
      map.setZoom(14);
    });
  });

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Kurumsal',
      href: '/'
    },
    {
      title: 'İletişim',
    }
  ]

  const cards = [
    {
      title: 'Ege Bölge Müdürlüğü',
      address: 'Soğanlık Yeni Mah. Pegagaz Sk. No:4 Aura Residence A Blok D. 1-2-3-4 34880 Kartal -İSTANBUL / TURKEY',
      fax: '+90 242 338 28 34 (pbx)',
      phone: '+90 242 338 28 82',
      email: 'akdeniz@benoplast.com',
      website: 'benoplast.com'
    },
    {
      title: 'Akdeniz Bölge Müdürlüğü',
      address: 'Yeni Toptancı Hal Kompleksi No: 437 07260 ANTALYA / TURKEY',
      fax: '+90 242 338 28 34 (pbx)',
      phone: '+90 242 338 28 82',
      email: 'ege@benoplast.com',
      website: 'benoplast.com'
    },
    {
      title: 'Güney Doğu Anadolu Bölge Müdürlüğü',
      address: 'Zeytinli Mah. İpekyolu Cad. İpekyol Konutları No:66 / B 27500 Şehitkamil - GAZİANTEP / TURKEY',
      fax: '+90 242 338 28 34 (pbx)',
      phone: '+90 242 338 28 82',
      email: 'guneydogu@benoplast.com',
      website: 'benoplast.com'
    }
  ]


  return (
    <>
      <Layout navlist={navlist}>
        <section className={styles['contact']}>
          <div className={styles['contact__head']}>
            <Breadcrumb data={breadcrumbList} className={styles['breadcrumb']} />
            <picture>
              <Image
                src={'/images/pages/contact.jpg'}
                width={"1920"}
                height={"1080"}
                alt={"Başarılarımız"}
              />
            </picture>

            <div className={styles['contact__headquarters']} >
              <h2>Genel Müdürlük</h2>
              <ul>
                <li><Icon icon={'location'} />  <span>Soğanlık Yeni Mah. Pegagaz Sk. No:4 Aura Residence A Blok D. 1-2-3-4 34880 Kartal -İSTANBUL </span></li>
                <li><Icon icon={'location'} />  <Link href='#'>+90 232 441 28 28 (pbx)</Link><Link href={'phone:+902324413334'}>+90 232 441 33 34</Link> </li>
                <li><Icon icon={'location'} />  <Link href={'mailto:info@benoplast.com'}>info@benoplast.com</Link> </li>
              </ul>

            </div>
          </div>
          <div className={styles['contact__body']}>
            <div className='container-fluid'>
              <h3>Fabrikalarımız</h3>

              {cards?.map((item, index) => <CardContact key={index} data={item} className={styles['card-contact']} />)}


              <h3>Bölge Müdürlüklerimiz</h3>

              {cards?.map((item, index) => <CardContact key={index} data={item} className={styles['card-contact']} />)}

            </div>

            <ContactForm contacts className={styles['contacts']} titles title={'İletişim Formu'} />

            <div className={styles["ccontact__maps"]}>
              <div id="map" ref={googlemap} />
            </div>
          </div>
        </section>


      </Layout>
    </>
  )
}