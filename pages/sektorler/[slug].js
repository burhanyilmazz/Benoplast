
import { Layout } from '../../layout'
import { LeftNav, PageTab, Button2, Card } from '../../components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slug from 'slug'

import styles from '../../assets/styles/Industries.module.scss'

export default function Industries({navlist, statics, sector}) {
  const productDetail = '/urun-detay';

  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={'content'}>
          <div className={'content__left'}><LeftNav data={navlist.find(item => item.type === 'sectors')} /></div>
          <div className={'content__right'}>
            <PageTab
              image={sector?.header_image}
              mobileImage={sector?.header_image_mobile}
              title={sector?.title}
              text={sector?.desc}
            />

            {sector?.content && <div className={'content__wrap block'} dangerouslySetInnerHTML={{ __html: sector?.content }} />}

            <div className={styles['industries']}>
              <div className={styles['industries__buttons']}>
                <h2>Önerilen Ürünler</h2>

                <div className={styles['group-buttons']}>
                  <Button2 button icon={'arrow'} className={styles['prev']} />
                  <Button2 button icon={'arrow'} className={styles['next']} />
                </div>
              </div>
              <div className={styles['industries__slider']}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  slidesPerView={'auto'}
                  spaceBetween={16}
                  navigation={{
                    nextEl: `.${styles['next']}`,
                    prevEl: `.${styles['prev']}`
                  }}
                  className={'industries__carousel'}
                >
                  {sector?.selected_products?.map((item, index) => <SwiperSlide key={index}><Card title={item.title} subTitle={item.cat_title} image={item.listing_image} path={`${productDetail}/${slug(item.title)}-${item.id}-${item.group_id}`} /></SwiperSlide>)}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  let paths = [];
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr' })
  }

  const sectors = await fetch(`${process.env.API_URL}/sectors`, options).then(r => r.json()).then(data => data.Result);

  sectors.map(item =>  paths.push({ params: { slug: `${slug(item.title)}-${item.id}` } }))

  return {
    paths,
    fallback: "blocking"
  }
}

export async function getStaticProps(ctx) {
  const id = ctx.params.slug.split('-').slice(-1)[0]

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr' })
  }

  const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);
  const statics = await fetch(`${process.env.API_URL}/statics`, options).then(r => r.json()).then(data => data.Result);
  const sectors = await fetch(`${process.env.API_URL}/sectors`, options).then(r => r.json()).then(data => data.Result);
  const sector = sectors.find(item => item?.id == id);

  return {
    props: {
      navlist,
      sector,
      statics,
    },
    revalidate: 10,
  }
}