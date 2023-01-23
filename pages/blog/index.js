
import { Layout } from '../../layout'
import Image from 'next/image'
import classNames from 'classnames';
import { Breadcrumb, CardBlog } from '../../components';

import styles from "../../assets/styles/Blog.module.scss";

import { navlist } from '../../utils/Nav';

export default function Blog() {

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Blog'
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

          <div className={styles['blog__top']}>
            <h2>Blog / Haber <span>Güncel haberler ve gelişmelerden haberdar olun!</span></h2>

            <div className={styles["blog__select"]}>
            <select defaultValue={'default'}>
              <option disabled value={'default'}>Kategori Seçiniz</option>
              <option value={'Genel'}>Genel</option>
              <option value={'Fuar'}>Fuar</option>
            </select>
          </div>
          </div>

          <div className={styles['blog__list']}>
            {blogData.map((item, index) => <CardBlog key={index} data={item} path={`${'#'}`} />)}
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