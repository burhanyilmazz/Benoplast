
import { Layout } from '../../layout'
import Image from 'next/image'
import classNames from 'classnames';
import { LeftNav, Breadcrumb, Card, OfferBox } from '../../components';

import styles from '../../assets/styles/Product.module.scss'

import { navlist } from '../../utils/Nav';

export default function Product() {

  const cards = [
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
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
      title: 'Kurumsal',
      href: '/'
    },
    {
      title: 'Ürünler'
    }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={'content product'}>
          <div className={'content--left'}><LeftNav data={navlist.find(item => item.type === 'products')} /></div>
          <div className={'content--right'}>
            <div className={'content__wrap'}>
              <Breadcrumb data={breadcrumbList} className={styles['Breadcrumb']} />
              <h3>Pasif Kilitli Katlanır Kasalar</h3>

              <div className={styles['product-wrap']}>
                {cards.map((item, index) => <Card key={index} title={item.title} subTitle={item.subTitle} image={item.image} path={`${'#'}`} />)}
              </div>
            </div>
          </div>
          <OfferBox />
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