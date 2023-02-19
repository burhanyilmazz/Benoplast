import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import { Layout } from '../layout'
import Image from 'next/image'
import classNames from 'classnames';
import { Carousel, Boxes, CardLink, Button, CardBlog, Button2 } from '../components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slug from 'slug'
import styles from '../assets/styles/Home.module.scss'

export default function Home({navlist, sliders, statics, blogs, mainpage, productGroup}) {
  const [bg, setBg] = useState(mainpage?.label[0]?.images)
  const router = useRouter()
  useEffect(() => {
    const video = document.getElementById("video");
    video.play();
  }, [router.asPath])

  const blogDetailUrl = '/blog-detay';
  const productGroupUrl = '/urun';

  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        {sliders.length > 0 && <section className={styles['carousel']}>
          <Carousel data={sliders} />
        </section>}

       {mainpage?.label.length > 0 && <section className={styles['innovator']} style={{backgroundImage: `url(${bg})`}}>
          <div className='container'>
            <div className={styles['innovator__content']}>
              <div className={styles['innovator__text']}>
                <h2>Avrupa’da ki ilk 5 üretici firmadan biri!</h2>
                <p>Yenilikçi çözümleri ilk sunan firma olmanın gururuyla kaliteli, teknolojik, özgün ve işlevsel tasarım hedefiyle üretim gerçekleştiriyoruz. Türkiye ve dünyada, birçok global markaya yenilikçi çözümler sunuyoruz.</p>
              </div>

              {mainpage?.label?.map((item, index) => <Boxes onMouseEnter={() => setBg(item?.images)} onMouseLeave={() => setBg(mainpage?.label[0]?.images)} key={index} title={item?.title} number={item?.counter} />)}
            </div>
          </div>
        </section>}

        {productGroup?.length > 0 && <section className={styles['cards']}>
          {productGroup?.map((item, index) => {
            if (item.mainpage_status) {
              return <CardLink key={index} title={item?.title} image={item?.listing_image} path={`${productGroupUrl}/${slug(item.title)}-${item.id}`} /> 
            }
          })}
        </section> }

        <section className={styles['video']} dangerouslySetInnerHTML={{ __html: `
          <video width="1920" height="1080" autoPlay playsinline muted loop fetchpriority="high" id='video'>
            <source src=${mainpage?.section4_file || '/video/benoplast-video.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>`}}/>

        <section className={styles['section-explanation']}>
          {mainpage?.section5_image && <figure>
            <Image src={mainpage?.section5_image} width={'666'} height={'888'} alt={mainpage?.section5_title} fetchpriority="high" />
          </figure> }
          <div>
            {mainpage?.section5_title && <h3>{mainpage?.section5_title}</h3>}
            {mainpage?.section5_content && <p>{mainpage?.section5_content}</p>}
            {mainpage?.section5_url && <Button text={'Detaylı Bilgi'} className={styles['button']} locale href={mainpage?.section5_url} />}
          </div>
        </section>

        <section className={classNames(styles['section-explanation'], [styles['section-align-right']])}>
          {mainpage?.section6_image && <figure>
            <Image src={mainpage?.section6_image} width={'744'} height={'780'} alt={'trento'} fetchpriority="high" />
          </figure> }
          <div>
            {mainpage?.section6_title_image && <h3><Image src={mainpage?.section6_title_image} width={'295'} height={'71'} alt={'trento'} fetchpriority="high" /></h3>}
            {mainpage?.section6_content && <p>{mainpage?.section6_content}</p>}
            {mainpage?.section6_url && <Button text={mainpage?.section6_url} icon={'link'} variant={'icon-start'} className={styles['button']} href={mainpage?.section6_url} target='_blank' />}
          </div>
        </section>

        <section className={styles['section-explanation']}>
          {mainpage?.section7_image && <figure>
            <Image src={mainpage?.section7_image} width={'744'} height={'780'} alt={'trento'} fetchpriority="high" />
          </figure> }
          <div>
            {mainpage?.section7_title_image && <h3><Image src={mainpage?.section7_title_image} width={'295'} height={'71'} alt={'trento'} fetchpriority="high" /></h3>}
            {mainpage?.section7_content && <p>{mainpage?.section7_content}</p>}
            {mainpage?.section7_url && <Button text={mainpage?.section7_url} icon={'link'} variant={'icon-start'} className={styles['button']} href={mainpage?.section7_url} target='_blank' />}
          </div>
        </section>


        {blogs?.length > 0 && <section className={styles['blog']}>
          <div className='container-fluid'>
            <div className={styles['blog__top']}>
              <h2>Blog / Haberler <span>Güncel haberler ve gelişmelerden haberdar olun!</span></h2>
              <Button2 locale href={'/blog'} text={'Tümü'} />
            </div>
          
            <div className={styles['blog__slider']}>
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={'auto'}
                spaceBetween={0}
                pagination
                className={'blog__carousel'}
                breakpoints={{
                  768: {
                    slidesPerView: 2
                  },
                  1280 : {
                    slidesPerView: 3
                  }
                }}
              >
                {blogs?.map((item, index) => <SwiperSlide key={index}><CardBlog footer data={item} path={`${blogDetailUrl}/${slug(item.title)}-${item.id}-${item.cat_id}`} /></SwiperSlide>)}
              </Swiper>
            </div>
          </div>
        </section>}

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
  const mainpage = await fetch(`${process.env.API_URL}/mainpage`, options).then(r => r.json()).then(data => data.Result);
  const sliders = await fetch(`${process.env.API_URL}/sliders`, options).then(r => r.json()).then(data => data.Result);
  const blogs = await fetch(`${process.env.API_URL}/blogs/mainpage`, options).then(r => r.json()).then(data => data.Result);
  const productGroup = await fetch(`${process.env.API_URL}/products/groups`, options).then(r => r.json()).then(data => data.Result);

  return {
    props: {
      navlist,
      sliders,
      statics,
      blogs,
      mainpage,
      productGroup
    },
    revalidate: 10,
  }
}