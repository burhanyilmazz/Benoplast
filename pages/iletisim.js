
import { useEffect, useRef } from 'react'
import { Layout } from '../layout'
import Image from 'next/image'
import { Breadcrumb, CardContact, ContactForm, Icon } from '../components';

import { Loader } from '@googlemaps/js-api-loader';

import styles from '../assets/styles/Contact.module.scss'

import { mapOptions } from '../utils/Map';

import Link from 'next/link';
import classNames from 'classnames';

export default function Contact({navlist, statics, offices}) {
  const googlemap = useRef(null);
  const general = offices?.find(item => item.id == '1');
  const generalOffice = general?.offices[0];

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

      general?.offices?.map((item, index) => {
        const marker = new google.maps.Marker({
          position: { lat: Number(item.lat), lng: Number(item.long) },
          map,
          icon
        });

        bounds.extend(marker.position);

        marker.addListener("click", () => window.open(`https://goo.gl/maps/ybru5GxxSF3Zt8nS9`, '_blank'));
      })


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
      title: 'İletişim',
    }
  ]


  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={styles['contact']}>
          <div className={styles['contact__head']}>
            <Breadcrumb data={breadcrumbList} className={styles['breadcrumb']} />
            <picture>
              {generalOffice?.header_image_mobile && <source media="(max-width: 768px)" srcSet={generalOffice?.header_image_mobile} />}
              <Image
                src={generalOffice?.header_image}
                width={"1920"}
                height={"1080"}
                alt={generalOffice?.title}
              />
            </picture>

            {generalOffice && <div className={styles['contact__headquarters']} >
              <h2>{generalOffice?.title}</h2>
              <ul>
                {generalOffice?.address && <li><Icon icon={'location'} />  <span>{generalOffice?.address}</span></li>}
                {(generalOffice?.tel1 || generalOffice?.tel2) &&<li><Icon icon={'location'} />  {generalOffice?.tel1 && <Link href={`tel:${generalOffice?.tel1}`}>{generalOffice?.tel1}</Link>} {generalOffice?.tel2 && <Link href={`tel:${generalOffice?.tel2}`}>{generalOffice?.tel2}</Link>}</li>}
                {generalOffice?.email && <li><Icon icon={'location'} />  <Link href={`mailto:${generalOffice?.email}`}>{generalOffice?.email}</Link> </li>}
              </ul>
            </div>}
          </div>
          <div className={styles['contact__body']}>
            <div className={classNames('container-fluid', styles['container-fluid'])}>
              {
                offices?.map((item, i) => {
                  if (item.id != '1') {
                    return <div key={i}>
                      <h3>{item?.title}</h3>
                      {item?.offices?.map((office, index) => <CardContact key={index} data={office} className={styles['card-contact']} />)}
                    </div>
                  }
                })
              }

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

export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr' })
  }

  const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);
  const statics = await fetch(`${process.env.API_URL}/statics`, options).then(r => r.json()).then(data => data.Result);
  const offices = await fetch(`${process.env.API_URL}/offices`, options).then(r => r.json()).then(data => data.Result);

  return {
    props: {
      navlist,
      statics,
      offices,
    },
    revalidate: 10,
  }
}