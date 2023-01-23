
import { Layout } from '../../layout'
import Image from 'next/image'
import classNames from 'classnames';
import { Breadcrumb, CardBlog } from '../../components';

import styles from "../../assets/styles/BlogDetail.module.scss";

import { navlist } from '../../utils/Nav';

export default function BlogDetail() {

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Blog',
      href: '/'
    },
    {
      title: 'Blog Detay'
    }
  ]

  const blogData = [
    { title: 'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar', image: '/images/content/blog-4.jpg', created_at: '11-26-2022' },
    { title: 'WIN AUTOMATİON EURASİA’da sektörün liderleri ile buluşuyor.', image: '/images/content/blog-2.png', created_at: '11-26-2022' },
    { title: 'BENOPLAST’ın yeni ürünü ALC kendinden kapaklı kasalar.', image: '/images/content/blog-3.png', created_at: '11-26-2022' },
    { title: 'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar', image: '/images/content/blog.png', created_at: '11-26-2022' },
    { title: 'WIN AUTOMATİON EURASİA’da sektörün liderleri ile buluşuyor.', image: '/images/content/blog-2.png', created_at: '11-26-2022' },
    { title: 'BENOPLAST’ın yeni ürünü ALC kendinden kapaklı kasalar.', image: '/images/content/blog-3.png', created_at: '11-26-2022' },
    { title: 'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar', image: '/images/content/blog.png', created_at: '11-26-2022' },
    { title: 'WIN AUTOMATİON EURASİA’da sektörün liderleri ile buluşuyor.', image: '/images/content/blog-2.png', created_at: '11-26-2022' },
    { title: 'BENOPLAST’ın yeni ürünü ALC kendinden kapaklı kasalar.', image: '/images/content/blog-3.png', created_at: '11-26-2022' },
    { title: 'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar', image: '/images/content/blog.png', created_at: '11-26-2022' },
    { title: 'WIN AUTOMATİON EURASİA’da sektörün liderleri ile buluşuyor.', image: '/images/content/blog-2.png', created_at: '11-26-2022' },
    { title: 'BENOPLAST’ın yeni ürünü ALC kendinden kapaklı kasalar.', image: '/images/content/blog-3.png', created_at: '11-26-2022' },
    { title: 'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar', image: '/images/content/blog.png', created_at: '11-26-2022' },
    { title: 'BENOPLAST’ın yeni ürünü ALC kendinden kapaklı kasalar.', image: '/images/content/blog-3.png', created_at: '11-26-2022' },
    { title: 'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar', image: '/images/content/blog.png', created_at: '11-26-2022' },
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={styles['blog']}>
          <Breadcrumb data={breadcrumbList} />


   
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