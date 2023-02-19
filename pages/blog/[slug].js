
import { Layout } from '../../layout'
import slug from 'slug'
import classNames from 'classnames';
import { Breadcrumb, CardBlog } from '../../components';
import {useRouter} from 'next/router'

import styles from "../../assets/styles/Blog.module.scss";

export default function Blog({navlist, blogs, statics, category}) {
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
      title: category.title
    }
  ]

  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={styles['blog']}>
          <Breadcrumb data={breadcrumbList} />
          <div className={'select select-mobile'}>
            <select value={`/blog/${slug(category.title)}-${category.id}`} onChange={handleOnChange}>
              <option disabled value={'default'}>Kategori Seçiniz</option>
              <option value={'/blog'}>Tümü</option>
              {blogs?.map((item, index) => <option key={index} value={`/blog/${slug(item.title)}-${item.id}`}>{item.title}</option>)}
            </select>
          </div>
          <div className={styles['blog__top']}>
            <h2>Blog / Haber <span>Güncel haberler ve gelişmelerden haberdar olun!</span></h2>

            <div className={classNames('select', styles['blog__select'])}>
              <select value={`/blog/${slug(category.title)}-${category.id}`} onChange={handleOnChange}>
                <option disabled value={'default'}>Kategori Seçiniz</option>
                <option value={'/blog'}>Tümü</option>
                {blogs?.map((item, index) => <option key={index} value={`/blog/${slug(item.title)}-${item.id}`}>{item.title}</option>)}
              </select>
            </div>
          </div>

          <div className={styles['blog__list']}>
            {category?.blogs?.map((blog, index) => <CardBlog footer key={index} data={blog} path={`${blogDetailUrl}/${slug(blog.title)}-${blog.id}-${blog.cat_id}`} />)}
          </div>
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

  blogs?.map(item => {
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
  const blogs = await fetch(`${process.env.API_URL}/blogs`, options).then(r => r.json()).then(data => data.Result);
  const category = blogs?.find(item => item?.id == id);
  

  return {
    props: {
      navlist,
      blogs,
      category,
      statics,
    },
    revalidate: 10,
  }
}