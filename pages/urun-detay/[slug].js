
import { Layout } from '../../layout'
import {useRouter} from 'next/router'
import slug from 'slug'
import { LeftNav, Breadcrumb, Card, Back, ListBox, GallerySlide, InfoList, OfferBox } from '../../components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../../assets/styles/ProductDetail.module.scss'

export default function ProductDetail({navlist, statics, product}) {
  const router = useRouter()
  const activeId = router.asPath.split('-').slice(-1)[0]
  const nav = navlist.find(item => item.type === 'product')
  const activeNav = nav?.children?.filter(item => item.id == activeId)
  const productDetailUrl = '/urun-detay';

  const handleOnChange = (event) => {
    router.push({ pathname : event.target.value })
  }

  const cards = [
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
  ]

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Ürünler'
    },
    {
      title: activeNav[0]?.title,
      href: `/urun/${slug(activeNav[0]?.title)}-${activeNav[0]?.id}`
    }
  ]

  const industries = [
    { title: 'SANAYİ', icon: 'industry', hover: '/images/content/industry.png' },
    { title: 'TARIM', icon: 'agriculture', hover: '/images/content/agriculture.png' },
    { title: 'GIDA', icon: 'food', hover: '/images/content/food.png' },
    { title: 'LOJİSTİK', icon: 'logistics', hover: '/images/content/logistics.png' },
    { title: 'ZİNCİR MARKETLER', icon: 'market', hover: '/images/content/market.png' },
  ]

  const gallery = [
    {
      thumbnail: "/images/products/product-big.jpg",
      image: "/images/products/product-big.jpg",
      big: "/images/products/product-big.jpg",
    },
    {
      thumbnail: "/images/products/otomotiv.png",
      image: "/images/products/otomotiv.png",
      big: "/images/products/otomotiv.png",
    },
    {
      thumbnail: "/images/products/product-big.jpg",
      image: "/images/products/product-big.jpg",
      big: "/images/products/product-big.jpg",
    },
    {
      thumbnail: "/images/products/product-big.jpg",
      image: "/images/products/product-big.jpg",
      big: "/images/products/product-big.jpg",
    },
    {
      thumbnail: "/images/products/product-big.jpg",
      image: "/images/products/product-big.jpg",
      big: "/images/products/product-big.jpg",
    }
  ]

  const list = [
    { icon: "dimensions", text: "400 x 600 x 300 mm (U x G x Y)" },
    { icon: "truck", text: "370 x 570 x 283 mm (U x G x Y)" },
    { icon: "dimensions", text: "370 x 570 x 283 mm (U x G x Y)" },
    { icon: "union", text: "400 x 600 x 300 mm (U x G x Y)" },
    { icon: "truck-big", text: "370 x 570 x 283 mm (U x G x Y)" },
    { icon: "volume", text: "370 x 570 x 283 mm (U x G x Y)" },
    { icon: "dimensions", text: "59.05 lt" },
    { icon: "palett", text: "59.05 lt" },
    { icon: "dimensions", text: "59.05 lt" },
  ]

  const offer = [
    { icon: "share", title: "Sayfayı Paylaş" },
    { icon: "360degree", title: "XR 360" },
    { icon: "download", title: "Teknik Broşür (TDS)" },
    { icon: "plus-circle", title: "Teklif Listesine Ekle" },
  ]

  console.log(product)

  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={'content product'}>
          <div className={'content__left'}><LeftNav data={navlist.find(item => item.type === 'product')} /></div>
          <div className={'content__right'}>
            <div className={'content__wrap'}>
              <Breadcrumb data={breadcrumbList} className={'breadcrumb'} />

              <div className={'select select-mobile'}>
                <select value={`/urun/${slug(activeNav[0]?.title)}-${activeNav[0]?.id}`} onChange={handleOnChange}>
                  <option disabled value={'default'}>Kategori Seçiniz</option>
                  {nav?.children?.map((item, index) => <option key={index} value={`/urun/${slug(item.title)}-${item.id}`}>{item.title}</option>)}
                </select>
              </div>

              <div className={styles['product-detail__head']}>
                <h3>{product?.title}</h3>
                <Back path={`/urun/${slug(activeNav[0]?.title)}-${activeNav[0]?.id}`} />
              </div>

              {product?.gallery?.length > 0 && <div className={styles["product-detail__gallery"]}>
                <GallerySlide data={product?.gallery} foodly={product?.food_icon_status} />
              </div>}

              {product?.label?.length > 0 && <InfoList data={product?.label} />}

              <div dangerouslySetInnerHTML={{ __html: product?.content }} />

              {product?.relations?.length > 0 && <div className={styles['product-detail__slider']}>
                <h3>Uyumlu Ürünler</h3>
                <div>
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
                    {product?.relations?.map((item, index) => <SwiperSlide key={index}><Card title={item.title} subTitle={item.cat_title} image={item.listing_image} path={`${productDetailUrl}/${slug(item.title)}-${item.id}-${item.group_id}`} /></SwiperSlide>)}
                  </Swiper>
                </div>
              </div>}

              {product?.selected_sectors.length > 0 && <>
              <h3>Kullanıldığı Sektörler</h3>

              <div className={styles['product-detail__wrap']}>
                {product?.selected_sectors?.map((item, index) => <ListBox key={index} data={item} />)}
              </div>
              </>}
            </div>
          </div>

          <OfferBox data={offer} buttons />
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

  const products = await fetch(`${process.env.API_URL}/products`, options).then(r => r.json()).then(data => data.Result);

  products?.map(item => {
    paths.push({ params: { slug: `${slug(item.title)}-${item.id}` } })
  })

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
  const products = await fetch(`${process.env.API_URL}/products`, options).then(r => r.json()).then(data => data.Result);
  const product = products?.find(item => item?.id == id);

  return {
    props: {
      navlist,
      statics,
      product
    },
    revalidate: 10,
  }
}