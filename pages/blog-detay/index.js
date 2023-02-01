
import { useState } from "react";
import { Layout } from '../../layout'
import Image from 'next/image'
import Link from 'next/link';
import { Breadcrumb, ShareMedia, GalleryImage, Modal, CardBlog, Back } from '../../components';

import styles from "../../assets/styles/BlogDetail.module.scss";

import { navlist } from '../../utils/Nav';

export default function BlogDetail() {
  const [modalImage, setModalImage] = useState();

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
      title: 'Blog detay'
    }
  ]

  const blogs = [
    { title: "Teknoloji" },
    { title: "Ektinlikler" },
    { title: "Üretim" },
    { title: "Fuarlar" },
    { title: "Genel" }
  ]

  const gallery = [
    { image: "/images/content/blog-big-1.jpg" },
    { image: "/images/content/blog-big-1.jpg" },
    { image: "/images/content/blog-big-1.jpg" },
  ]

  const popular = [
    { title: 'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar', image: '/images/content/blog-4.jpg', created_at: '11-26-2022' },
    { title: 'WIN AUTOMATİON EURASİA’da sektörün liderleri ile buluşuyor.', image: '/images/content/blog-2.png', created_at: '11-26-2022' },
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={styles['blog-detail']}>
          <div className={styles['blog-detail__content']}>
            <div className={styles['blog-detail__left']}>
              <Breadcrumb className={styles['breadcrumb']} data={breadcrumbList} />
              <div className={'select select-mobile'}>
                <select defaultValue={'default'}>
                  <option disabled value={'default'}>Kategoriler</option>
                  <option value={'Genel'}>Genel</option>
                  <option value={'Fuar'}>Fuar</option>
                </select>
              </div>
              <div className={styles['blog-detail__head']}>
                <h2>SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar</h2>

                <h3>30 Mayıs 2020</h3>
              </div>
              <div className={styles["blog-detail__image"]}>
                <Image
                  src={'/images/content/blog-big-1.jpg'}
                  width={"906"}
                  height={"486"}
                  alt={'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar'}
                  priority
                />
              </div>
              <div className={styles["blog-detail__text"]}>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32. </p>

                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. </p>

                <h4>Lorem Ipsum used since the 1500s is reproduced below</h4>

                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.</p>

                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

              </div>
              {gallery && <div className={styles["blog-detail__gallery"]}>
                {gallery?.map((item, index) => <GalleryImage key={index} image={item.image} onClick={() => setModalImage(item.image)} />)}
              </div>}
              <div className={styles["blog-detail__share"]}>
                <ShareMedia />
              </div>
            </div>

            <div className={styles['blog-detail__right-nav']}>
              <div className={styles['blog-detail__back']}>
                <Back />
              </div>
              <h4>Kategoriler</h4>
              <div className={styles["right-nav__categories"]}>
                <ul>
                  {blogs.map((item, index) => <li key={index}>
                    <Link href={`/blog/`}>
                      <span>{item.title}</span>
                      <div>({item?.blogs?.length})</div>
                    </Link>
                  </li>)}
                </ul>
              </div>
              <div className={styles["right-nav__popular"]}>
                <h4>Popüler Haberler</h4>
                {popular.map((item, index) => <div key={index}><CardBlog data={item} path={`#`} /></div>)}
              </div>
            </div>
          </div>

          {modalImage && <Modal onClose={() => setModalImage('')}>
            <Image
              src={modalImage}
              width={"700"}
              height={"486"}
              alt={'SAHİBİNDEN.COM’da satışa sunduğumuz kalıplar'}
            />
          </Modal>}

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