
import { Layout } from '../layout'
import Image from 'next/image'
import classNames from 'classnames';
import { Carousel, Boxes, Card, Button, CardBlog, Button2 } from '../components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../assets/styles/Home.module.scss'

import { navlist } from '../utils/Nav';

export default function Home() {
  const sliders = [
    {
      "id": 3,
      "title": "Sanayi",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      "first_image": "/images/products/otomotiv.png",
      "first_image_mobile": "https://volde.ozanuzer.com/images/slider/1671959776e9de51.png",
      "sort": 1
    },
    {
      "id": 2,
      "title": "Otomotiv",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      "first_image": "/images/products/otomotiv.png",
      "first_image_mobile": "https://volde.ozanuzer.com/images/slider/1671959833fb7515.png",
      "sort": 2
    },
    {
      "id": 1,
      "title": "Gıda",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      "first_image": "/images/products/otomotiv.png",
      "first_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
      "sort": 3
    },
    {
      "id": 4,
      "title": "Tarım",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      "first_image": "/images/products/otomotiv.png",
      "first_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
      "sort": 4
    },
    {
      "id": 5,
      "title": "Zincir Marketler",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      "first_image": "/images/products/otomotiv.png",
      "first_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
      "sort": 5
    },
    {
      "id": 6,
      "title": "Lojistik",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      "first_image": "/images/products/otomotiv.png",
      "first_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
      "sort": 6
    },
    {
      "id": 7,
      "title": "Genel",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      "first_image": "/images/products/otomotiv.png",
      "first_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
      "sort": 7
    }
  ]

  const innovator = [
    { title: "Çalışan Sayısı", number: "519" },
    { title: "Üretim Kapasitemiz", number: "54.000" },
    { title: "Geri Dönüşüm Kapasitemiz", number: "24.000" },
    { title: "Fabrikalarımız", number: "5" },
    { title: "Bölge Müdürlüklerimiz", number: "6" },
    { title: "İhracat Yapılan Ülke", number: "70" }
  ]

  const blogData = [
    { title: 'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar', image: '/images/content/blog-4.jpg', created_at: '11-26-2022' },
    { title: 'WIN AUTOMATİON EURASİA’da sektörün liderleri ile buluşuyor.', image: '/images/content/blog-2.png', created_at: '11-26-2022' },
    { title: 'BENOPLAST’ın yeni ürünü ALC kendinden kapaklı kasalar.', image: '/images/content/blog-3.png', created_at: '11-26-2022' },
    { title: 'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar', image: '/images/content/blog.png', created_at: '11-26-2022' },
  ]

  const cardsList = [
    { title: "Kasalar", image: "/images/cards/card-big-1.png" },
    { title: "Paletler", image: "/images/cards/card-big-2.png" },
    { title: "Konteynerlar", image: "/images/cards/card-big-3.png" },
    { title: "Kapaklar", image: "/images/cards/card-big-4.png" },
    { title: "Dolly", image: "/images/cards/card-big-5.png" },
    { title: "Diğer Ürünler", image: "/images/cards/card-big-6.png" },
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={styles['carousel']}>
          <Carousel data={sliders} />
        </section>

        <section className={styles['innovator']}>
          <div className='container'>
            <div className={styles['innovator__content']}>
              <div className={styles['innovator__text']}>
                <h2>Avrupa’da ki ilk 5 üretici firmadan biri!</h2>
                <p>Yenilikçi çözümleri ilk sunan firma olmanın gururuyla kaliteli, teknolojik, özgün ve işlevsel tasarım hedefiyle üretim gerçekleştiriyoruz. Türkiye ve dünyada, birçok global markaya yenilikçi çözümler sunuyoruz.</p>
              </div>

              {innovator?.map((item, index) => <Boxes key={index} title={item.title} number={item.number} />)}
            </div>
          </div>
        </section>

        <section className={styles['cards']}>
          {cardsList?.map((item, index) => <Card key={index} title={item.title} image={item.image} /> )}
        </section>

        <section className={styles['video']}>
          <video width="1920" height="1080" autoPlay muted loop fetchpriority="high">
            <source src={'/video/benoplast-video.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className={styles['section-explanation']}>
          <figure>
            <Image src={'/images/content/tree.png'} width={'666'} height={'888'} alt={'Sürdürülebilirlik'} fetchpriority="high" />
          </figure>
          <div>
            <h3>Sürdürülebilirlik</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <Button text={'Detaylı Bilgi'} className={styles['button']} />
          </div>
        </section>

        <section className={classNames(styles['section-explanation'], [styles['section-align-right']])}>
          <figure>
            <Image src={'/images/content/capital.png'} width={'744'} height={'780'} alt={'trento'} fetchpriority="high" />
          </figure>
          <div>
            <h3><Image src={'/images/content/trento.png'} width={'295'} height={'71'} alt={'trento'} fetchpriority="high" /></h3>
            <p>Taşıma ve depolamaya yönelik ihtiyaçlara çözüm üretmek üzere 2020 yılında ‘Kirala, Katla Kazan’ sloganı ve %100 yerli sermaye ile kurulan Trento, enerji tüketimi düşük, yüksek teknoloji ve çevreye duyarlı ekipmanlar ile üretilen, yeniden kullanılabilir, karbon ayak izini azaltan, döngüsel ekonomiye uygun, takip edilebilir, kullanıcı dostu ve %100 geri dönüştürülebilir ürün sistemleri sunar.</p>

            <p>Anlık bilgi erişimine olanak sağlayan Online Takip Sistemi ve 7/24 hizmet sunan Servis Merkezleri ile müşterilerinin tedarik zinciri yönetimi süreçlerini kolaylaştırmak ve hızlandırmak üzere kurulmuş otomasyon sistemleriyle zaman ve maliyet tasarrufu sağlamaktadır..</p>
            <Button text={'www.trento.com.tr'} icon={'link'} variant={'icon-start'} className={styles['button']} />
          </div>
        </section>

        <section className={styles['section-explanation']}>
          <figure>
            <Image src={'/images/content/recycle.png'} width={'744'} height={'780'} alt={'trento'} fetchpriority="high" />
          </figure>
          <div>
            <h3><Image src={'/images/content/trento.png'} width={'295'} height={'71'} alt={'trento'} fetchpriority="high" /></h3>
            <p>Taşıma ve depolamaya yönelik ihtiyaçlara çözüm üretmek üzere 2020 yılında ‘Kirala, Katla Kazan’ sloganı ve %100 yerli sermaye ile kurulan Trento, enerji tüketimi düşük, yüksek teknoloji ve çevreye duyarlı ekipmanlar ile üretilen, yeniden kullanılabilir, karbon ayak izini azaltan, döngüsel ekonomiye uygun, takip edilebilir, kullanıcı dostu ve %100 geri dönüştürülebilir ürün sistemleri sunar.</p>

            <p>Anlık bilgi erişimine olanak sağlayan Online Takip Sistemi ve 7/24 hizmet sunan Servis Merkezleri ile müşterilerinin tedarik zinciri yönetimi süreçlerini kolaylaştırmak ve hızlandırmak üzere kurulmuş otomasyon sistemleriyle zaman ve maliyet tasarrufu sağlamaktadır..</p>
            <Button text={'www.trento.com.tr'} icon={'link'} variant={'icon-start'} className={styles['button']} />
          </div>
        </section>

        <section className={styles['blog']}>
          <div className='container-fluid'>
            <div className={styles['blog__top']}>
              <h2>Blog / Haberler <span>Güncel haberler ve gelişmelerden haberdar olun!</span></h2>

              <Button2 locale href={'/blog'} text={'Tümü'} />
            </div>
          </div>
          <div className={styles['blog__slider']}>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={'auto'}
              spaceBetween={0}
              className={'blog__carousel'}
            >
              {blogData.map((item, index) => <SwiperSlide key={index}><CardBlog data={item} path={`${'#'}`} /></SwiperSlide>)}
            </Swiper>
          </div>
        </section>

      </Layout>
    </>
  )
}