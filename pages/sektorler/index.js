
import { Layout } from '../../layout'
import Image from 'next/image'
import classNames from 'classnames';
import { LeftNav, ScrollIcon, Button2, Card } from '../../components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../../assets/styles/Industries.module.scss'

import { navlist } from '../../utils/Nav';

export default function Industries() {

  const cards = [
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={'content'}>
          <div className={'content--left'}><LeftNav data={navlist.find(item => item.type === 'industries')} /></div>
          <div className={'content--right'}>
            <div className={'content__header'}>
              <picture>
                <Image
                  src={"/images/pages/sektorler.jpg"}
                  width={"1544"}
                  height={"1080"}
                  alt={"Otomotiv"}
                />
              </picture>

              <div className={'content__desc'}>
                <h2>Otomotiv</h2>
                <p>
                  İş arkadaşlarımız en büyük değerimizdir. Sürdürülebilirlik faaliyetlerimizin en büyük halkası onlardır. Biliyoruz ki her bir çalışanın ortak çaba ve özverisi ile başarılara imza atıyor ve hedeflerimize ulaşıyoruz. Bu bağlamda çalışan bağlılığını artıracak kaynaklarımızı maksimum seviyede kullanarak aynı zamanda kişisel gelişimi destekleyen, sağlıklı ve güvenli hissettiren, insan haklarına saygılı, fırsat eşitliği ve çeşitliliği destekleyen bir çalışma ortamı sunuyoruz.
                </p>
              </div>

              <ScrollIcon />
            </div>
            <div className={'content__wrap'}>
              <h3>Quisque a purus ac tellus maximus accumsan.</h3>

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>

            </div>

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
                  spaceBetween={30}
                  navigation={{
                    nextEl: `.${styles['next']}`,
                    prevEl: `.${styles['prev']}`
                  }}
                  className={'industries__carousel'}
                >
                  {cards.map((item, index) => <SwiperSlide key={index}><Card title={item.title} subTitle={item.subTitle} image={item.image} path={`${'#'}`} /></SwiperSlide>)}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}


// export async function getStaticPaths() {
//   let paths = [];
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ language: 'tr' })
//   }

//   const corporates = await fetch(`${process.env.API_URL}/corporate`, options).then(r => r.json()).then(data => data.Result);

//   corporates.map(item => paths.push({ params: { slug: `${slug(item.title)}-${item.id}` } }))

//   return {
//     paths,
//     fallback: "blocking"
//   }
// }

// export async function getStaticProps(ctx) {
//   const id = ctx.params.slug.split('-').slice(-1)[0]

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ language: 'tr' })
//   }

//   const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);
//   const corporates = await fetch(`${process.env.API_URL}/corporate`, options).then(r => r.json()).then(data => data.Result);
//   const corporate = corporates.find(item => item?.id == id);

//   return {
//     props: {
//       navlist,
//       corporate,
//     },
//     revalidate: 10,
//   }
// }