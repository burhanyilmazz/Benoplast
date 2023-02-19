import { Layout } from "../layout";
import { Breadcrumb, CardLibrary } from "../components";
import classNames from "classnames";

import styles from '../assets/styles/Library.module.scss'

export default function Cookie({navlist, statics, digitallibrary}) {
  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Dijital Kütüphane'
    }
  ]

  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={classNames("container-fluid", styles['library'])}>
          <Breadcrumb data={breadcrumbList} unmobile />
          <h2>Dijital Kütüphane</h2>
          {digitallibrary?.length > 0 && <div className={styles['library__list']}>
            {digitallibrary?.map((item, index) => <CardLibrary key={index} title={item?.title} years={item?.year} path={item?.filename} />)}
          </div>}
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
  const digitallibrary = await fetch(`${process.env.API_URL}/digitallibrary`, options).then(r => r.json()).then(data => data.Result);

  return {
    props: {
      navlist,
      statics,
      digitallibrary,
    },
    revalidate: 10,
  }
}