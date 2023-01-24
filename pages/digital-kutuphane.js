import { Layout } from "../layout";
import { Breadcrumb, CardLibrary } from "../components";

import styles from '../assets/styles/Library.module.scss'

import { navlist } from '../utils/Nav';
import classNames from "classnames";

export default function Cookie() {
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
      title: 'Dijital kütüphane'
    }
  ]

  const library = [
    { year: "2020", title: "Lorem Ipsum Sıt Amet", path: "" },
    { year: "2020", title: "Lorem Ipsum Sıt Amet", path: "" },
    { year: "2020", title: "Lorem Ipsum Sıt Amet", path: "" },
    { year: "2020", title: "Lorem Ipsum Sıt Amet", path: "" },
    { year: "2020", title: "Lorem Ipsum Sıt Amet", path: "" },
    { year: "2020", title: "Lorem Ipsum Sıt Amet", path: "" }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={classNames("container-fluid", styles['library'])}>
          <Breadcrumb data={breadcrumbList} unmobile />
          <h2>Dijital kütüphane</h2>
          <div className={styles['library__list']}>
            {library?.map((item, index) => <CardLibrary key={index} title={item.title} years={item.year} path={item.path} />)}
          </div>
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
//       navlist,
//     },
//     revalidate: 10,
//   }
// }