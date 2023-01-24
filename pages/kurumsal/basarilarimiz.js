
import { Layout } from '../../layout'
import Image from 'next/image'
import classNames from 'classnames';
import { LeftNav, PageTab, CardPrize } from '../../components';

import styles from '../../assets/styles/Corporate.module.scss'

import { navlist } from '../../utils/Nav';

export default function OurSuccess() {

  const cardPrize = [
    {
      titleDate: '2010',
      title: 'Altın Ambalaj Ödülü',
      image: '/images/content/prize-1.png',
      rightImage: '/images/prize/prize-1.png'
    },
    {
      titleDate: '2010',
      title: 'Altın Ambalaj Ödülü',
      image: '/images/content/prize-1.png',
      rightImage: '/images/prize/prize-2.png'
    },
    {
      titleDate: '2010',
      title: 'Altın Ambalaj Ödülü',
      image: '/images/content/prize-1.png',
      rightImage: '/images/prize/prize-3.png'
    },
    {
      titleDate: '2010',
      title: 'Altın Ambalaj Ödülü',
      image: '/images/content/prize-1.png',
      rightImage: '/images/prize/prize-1.png'
    }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={'content'}>
          <div className={'content--left'}><LeftNav data={navlist.find(item => item.type === 'corporate')} /></div>
          <div className={'content--right'}>
            <PageTab
              image={'/images/pages/basarilarimiz.jpg'}
              title={'Başarılarımız'}
              text={'İş arkadaşlarımız en büyük değerimizdir. Sürdürülebilirlik faaliyetlerimizin en büyük halkası onlardır. Biliyoruz ki her bir çalışanın ortak çaba ve özverisi ile başarılara imza atıyor ve hedeflerimize ulaşıyoruz. Bu bağlamda çalışan bağlılığını artıracak kaynaklarımızı maksimum seviyede kullanarak aynı zamanda kişisel gelişimi destekleyen, sağlıklı ve güvenli hissettiren, insan haklarına saygılı, fırsat eşitliği ve çeşitliliği destekleyen bir çalışma ortamı sunuyoruz.'}
            />
            <div className={'content__wrap'}>
              <div className={styles['card--wrap']}>
                {cardPrize.map((item, index) => <CardPrize key={index} title={item.title} titleDate={item.titleDate} image={item.image} rightImage={item.rightImage} />)}
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