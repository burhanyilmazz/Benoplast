
import { Layout } from '../../layout'
import slug from 'slug'
import {useRouter} from 'next/router'
import { LeftNav, Breadcrumb, Card, OfferBox } from '../../components';

import styles from '../../assets/styles/Product.module.scss'

export default function Product({navlist, statics, products, category}) {
  const router = useRouter()
  const activeId = router.asPath.split('-').slice(-1)[0]
  const nav = navlist.find(item => item.type === 'product')
  const activeNav = nav?.children?.filter(item => item.id == activeId)
  const productDetailUrl = '/urun-detay';

  const handleOnChange = (event) => {
    router.push({ pathname : event.target.value })
  }

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Ürünler'
    },
    {
      title: activeNav[0]?.title
    }
  ]

  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={'content product'}>
          <div className={'content__left'}><LeftNav data={nav} /></div>
          <div className={'content__right'}>
            <div className={'content__wrap'}>
              <div className={'select select-mobile'}>
                <select value={`/urun/${slug(activeNav[0]?.title)}-${activeNav[0]?.id}`} onChange={handleOnChange}>
                  <option disabled value={'default'}>Kategori Seçiniz</option>
                  {nav?.children?.map((item, index) => <option key={index} value={`/urun/${slug(item.title)}-${item.id}`}>{item.title}</option>)}
                </select>
              </div>
              <Breadcrumb data={breadcrumbList} className={'breadcrumb'} />
              <h3>{activeNav[0]?.title}</h3>

              <div className={styles['product-wrap']}>
                {category.map((item, index) => <Card key={index} title={item.title} image={item.listing_image} path={`${productDetailUrl}/${slug(item.title)}-${item.id}-${item.group_id}`} />)}
              </div>
            </div>
          </div>
          <OfferBox />
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
  const category = products?.filter(item => item?.group_id == id);

  return {
    props: {
      navlist,
      statics,
      products,
      category,
    },
    revalidate: 10,
  }
}