
import { useState } from "react";
import { Layout } from '../../layout'
import Image from 'next/image'
import Link from 'next/link';
import slug from 'slug'
import {useRouter} from 'next/router'

import { Breadcrumb, ShareMedia, GalleryImage, Modal, CardBlog, Back } from '../../components';

import styles from "../../assets/styles/BlogDetail.module.scss";

export default function BlogDetail({navlist, statics, blogs, blog, blogCat, popular}) {
  const [modalImage, setModalImage] = useState();
  const router = useRouter()
  const blogDetailUrl = '/blog-detay';

  const handleOnChange = (event) => {
    router.push({ pathname : event.target.value })
  }

  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: blogCat?.title,
      href: `/blog/${slug(blogCat?.title)}-${blogCat?.id}`
    },
    {
      title: blog?.title
    }
  ]

  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={styles['blog-detail']}>
          <div className={styles['blog-detail__content']}>
            <div className={styles['blog-detail__left']}>
              <Breadcrumb className={styles['breadcrumb']} data={breadcrumbList} />
              <div className={'select select-mobile'}>
                <select value={`/blog/${slug(blogCat.title)}-${blogCat.id}`} onChange={handleOnChange}>
                  <option disabled value={'default'}>Kategori Seçiniz</option>
                  <option value={'/blog'}>Tümü</option>
                  { blogs?.map((item, index) => <option key={index} value={`/blog/${slug(item.title)}-${item.id}`}>{item.title}</option>)}
                </select>
              </div>
              <div className={styles['blog-detail__head']}>
                {blog?.title && <h2>{blog?.title}</h2>}
                {blog?.created_at && <h3>{new Intl.DateTimeFormat('tr', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(blog.created_at))}</h3>}
              </div>
              <div className={styles["blog-detail__image"]}>
                {blog?.header_image && <picture>
                  {blog?.header_image_mobile && <source media="(max-width: 768px)" srcSet={blog?.header_image_mobile} />}
                  <Image
                    src={blog?.header_image}
                    width={"906"}
                    height={"486"}
                    alt={blog?.title}
                    priority
                  />
                </picture>}
              </div>
              <div className={styles["blog-detail__text"]} dangerouslySetInnerHTML={{ __html: blog?.content }} />

              {blog?.gallery && <div className={styles["blog-detail__gallery"]}>
                {blog?.gallery?.map((item, index) => <GalleryImage key={index} image={item.item_name} onClick={() => setModalImage(item.item_name)} />)}
              </div>}

              <div className={styles["blog-detail__share"]}>
                <ShareMedia />
              </div>
            </div>

            <div className={styles['blog-detail__right-nav']}>
              <div className={styles['blog-detail__back']}>
                <Back path={`/blog/${slug(blogCat?.title)}-${blogCat?.id}`} />
              </div>
              <h4>Kategoriler</h4>
              <div className={styles["right-nav__categories"]}>
                <ul>
                  {blogs?.map((item, index) => <li key={index}>
                    <Link href={`/blog/${slug(item?.title)}-${item?.id}`}>
                      <span>{item?.title}</span>
                      <div>({item?.blogs?.length || '0'})</div>
                    </Link>
                  </li>)}
                </ul>
              </div>
              <div className={styles["right-nav__popular"]}>
                <h4>Popüler Haberler</h4>
                {popular?.map((item, index) => <div key={index}><CardBlog data={item} path={`${blogDetailUrl}/${slug(item.title)}-${item.id}-${blogCat.id}`} footer /></div>)}
              </div>
            </div>
          </div>

          {modalImage && <Modal onClose={() => setModalImage('')}>
            <Image
              src={modalImage}
              width={"700"}
              height={"486"}
              alt={blog?.title}
            />
          </Modal>}
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

  const blogs = await fetch(`${process.env.API_URL}/blogs`, options).then(r => r.json()).then(data => data.Result);

  blogs.map(item => item?.blogs?.map(blog => {
    paths.push({ params: { slug: `${slug(blog.title)}-${blog.id}-${item.id}` } })
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

export async function getStaticProps(ctx) {
  const catid = ctx.params.slug.split('-').slice(-1)[0]
  const id = ctx.params.slug.split('-').slice(-2)[0]

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr' })
  }

  const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);
  const statics = await fetch(`${process.env.API_URL}/statics`, options).then(r => r.json()).then(data => data.Result);
  const blogs = await fetch(`${process.env.API_URL}/blogs`, options).then(r => r.json()).then(data => data.Result);
  const popular = await fetch(`${process.env.API_URL}/blogs/populer`, options).then(r => r.json()).then(data => data.Result);
  const blogCat = blogs.find(item => item?.id == catid);
  const blog = blogCat?.blogs?.find(item => item?.id == id )

  await fetch(`${process.env.API_URL}/blogs/counter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ language: 'tr', blog_id: id })
  })

  return {
    props: {
      navlist,
      statics,
      blogs,
      blog,
      blogCat,
      popular
    },
    revalidate: 10,
  }
}