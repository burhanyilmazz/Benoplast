import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Layout } from "../layout";
import styles from "../assets/styles/Search.module.scss";
import { Search, Icon, Card, Breadcrumb, CardLink } from "../components";
import slug from 'slug'

export default function SearchPage({navlist, statics}) {
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const keyword = router.query.keyword || params.get('keyword');

    if (!keyword) return

    fetch(`${process.env.API_URL}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ language: 'tr', keyword })
    }).then(r => r.json()).then(data => setData(data.Result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.keyword])

  const blogDetailUrl = '/blog-detay';
  const sectorDetailUrl = '/sektorler';
  const corporateFolder = '/kurumsal';
  const productDetailUrl = '/urun-detay';
  const productGroupUrl = '/urun';

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Arama'
    }
  ]

  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={styles["search"]}>
        <Breadcrumb data={breadcrumbList} className={'breadcrumb'} />

          <h2>Arama Sonuçları</h2>
          <h4><b>“{router.query.keyword}” </b>ile ilgili 22 sonuç bulundu.</h4>
          <Search className={styles['search-input']} />

          {data && <>
            {data?.blogs?.map((item, index) => 
              <div className={styles["content"]} key={index}>
                <h3>{item.title}</h3>
                <div className={styles["text"]}>{process.env.HOST_URL}{blogDetailUrl}/{slug(item.title)}-{item.id}-{item.cat_id}</div>
                <Link href={`${blogDetailUrl}/${slug(item.title)}-${item.id}-${item.cat_id}`} className={styles['button']}><Icon icon='arrow' /></Link>
              </div>
            )}

            {data?.corporate?.map((item, index) => 
              <div className={styles["content"]} key={index}>
                <h3>{item.title}</h3>
                <div className={styles["text"]}>{process.env.HOST_URL}{corporateFolder}/{slug(item.title)}-{item.id}</div>
                <Link href={`${corporateFolder}/${slug(item.title)}-${item.id}`} className={styles['button']}><Icon icon='arrow' /></Link>
              </div>
            )}

            {data?.sectors?.map((item, index) => 
              <div className={styles["content"]} key={index}>
                <h3>{item.title}</h3>
                <div className={styles["text"]}>{process.env.HOST_URL}{sectorDetailUrl}/{slug(item.title)}-{item.id}</div>
                <Link href={`${sectorDetailUrl}/${slug(item.title)}-${item.id}`} className={styles['button']}><Icon icon='arrow' /></Link>
              </div>
            )}

            {data?.prodcuts?.length > 0 && <div className={styles['search__cards']}>
              <h4>Ürünler</h4>
              <div>
                {data?.prodcuts?.map((item, index) => <Card data={item} key={index} title={item.title} image={item.listing_image} path={`${productDetailUrl}/${slug(item.title)}-${item.id}-${item.group_id}`} />)}
              </div>
            </div>}

            {data?.prodcutgroups?.length > 0 && <div className={styles['search__cards']}>
              <h4>Ürün Grupları</h4>
              <div>
                {data?.prodcutgroups?.map((item, index) => <span key={index}><CardLink title={item?.title} image={item?.listing_image} path={`${productGroupUrl}/${slug(item.title)}-${item.id}`} /></span>)}
              </div>
            </div>}

          </>}
        </section>
      </Layout>
    </>
  );
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

  return {
    props: {
      navlist,
      statics,
    },
    revalidate: 10,
  }
}