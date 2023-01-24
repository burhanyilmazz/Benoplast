import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Layout } from "../layout";
import styles from "../assets/styles/Search.module.scss";
import { Search, Icon, Card } from "../components";
import slug from 'slug'

import { navlist } from '../utils/Nav';

export default function SearchPage() {
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
  const sectorDetailUrl = '/sektor';
  const systemDetailUrl = '/sistem';
  const systemsFolder = '/sistemler';
  const sectorsFolder = '/sektorler';
  const corporateFolder = '/kurumsal';
  const servicesFolder = '/hizmetlerimiz';


  const total = (data?.blogs?.length || 0) + (data?.corporate?.length || 0) + (data?.sector_contents?.length || 0) + (data?.sectors?.length || 0) + (data?.services?.length || 0) + (data?.system_contents?.length || 0) + (data?.systems?.length || 0)

  const cards = [
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={styles["search"]}>
          <h2>Arama Sonuçları</h2>
          <h4><b>“KASA” </b>ile ilgili 22 sonuç bulundu.</h4>
          <Search className={styles['search-input']} />

          <div className={styles["content"]}>
            <h3>Sürdürülebilirlik</h3>
            <div className={styles["text"]}>
              https://www.benoplast.com/b-400-katlanir-kasa-30514684
            </div>

            <Link href={`#`} className={styles['button']}><Icon icon='arrow' /></Link>
          </div>

          <div className={styles["content"]}>
            <h3>Sürdürülebilirlik</h3>
            <div className={styles["text"]}>
              https://www.benoplast.com/b-400-katlanir-kasa-30514684
            </div>

            <Link href={`#`} className={styles['button']}><Icon icon='arrow' /></Link>
          </div>

          <div className={styles['search__cards']}>
            <h4>Pasif Kilitli Katlanır Kasalar</h4>
            <div>
              {cards.map((item, index) => <Card key={index} title={item.title} subTitle={item.subTitle} image={item.image} path={`${'#'}`} />)}
            </div>
          </div>

          {data && <>
            {data?.blogs?.map((item, index) => <div className={styles["item"]} key={index}>
              <div className={styles["content"]}>
                <h3>{item.title}</h3>
                <div className={styles["text"]} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
              <Link href={`${blogDetailUrl}/${slug(item.title)}-${item.id}-${item.cat_id}`}>Sayfaya Git <Icon icon='arrow' /></Link>
            </div>)}

            {data?.corporate?.map((item, index) => <div className={styles["item"]} key={index}>
              <div className={styles["content"]}>
                <h3>{item.title}</h3>
                <div className={styles["text"]} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
              <Link href={`${corporateFolder}/${slug(item.title)}-${item.id}`}>Sayfaya Git <Icon icon='arrow' /></Link>
            </div>)}

            {data?.sector_contents?.map((item, index) => <div className={styles["item"]} key={index}>
              <div className={styles["content"]}>
                <h3>{item.title}</h3>
                <div className={styles["text"]} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
              <Link href={`${sectorDetailUrl}/${slug(item.title)}-${item.id}-${item.cat_id}`}>Sayfaya Git <Icon icon='arrow' /></Link>
            </div>)}

            {data?.sectors?.map((item, index) => <div className={styles["item"]} key={index}>
              <div className={styles["content"]}>
                <h3>{item.title}</h3>
                <div className={styles["text"]} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
              <Link href={`${sectorsFolder}/${slug(item.title)}-${item.id}`}>Sayfaya Git <Icon icon='arrow' /></Link>
            </div>)}

            {data?.services?.map((item, index) => <div className={styles["item"]} key={index}>
              <div className={styles["content"]}>
                <h3>{item.title}</h3>
                <div className={styles["text"]} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
              <Link href={`${servicesFolder}/${slug(item.title)}-${item.id}`}>Sayfaya Git <Icon icon='arrow' /></Link>
            </div>)}

            {data?.system_contents?.map((item, index) => <div className={styles["item"]} key={index}>
              <div className={styles["content"]}>
                <h3>{item.title}</h3>
                <div className={styles["text"]} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
              <Link href={`${systemDetailUrl}/${slug(item.title)}-${item.id}-${item.cat_id}`}>Sayfaya Git <Icon icon='arrow' /></Link>
            </div>)}

            {data?.systems?.map((item, index) => <div className={styles["item"]} key={index}>
              <div className={styles["content"]}>
                <h3>{item.title}</h3>
                <div className={styles["text"]} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
              <Link href={`${systemsFolder}/${slug(item.title)}-${item.id}`}>Sayfaya Git <Icon icon='arrow' /></Link>
            </div>)}

          </>}
        </section>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ language: 'tr' })
//   }

//   const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);


//   return {
//     props: {
//       navlist
//     },
//     revalidate: 10,
//   }
// }