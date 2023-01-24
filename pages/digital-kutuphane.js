import Image from "next/image";
import { Layout } from "../layout";
import { Breadcrumb } from "../components";

import { navlist } from '../utils/Nav';

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

  return (
    <>
      <Layout navlist={navlist}>
        <Breadcrumb data={breadcrumbList} unmobile />
        <section className={"block"}>

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