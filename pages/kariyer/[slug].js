
import { Layout } from '../../layout'
import { LeftNav, PageTab, ContactForm } from '../../components';
import slug from 'slug'

export default function Career({navlist, hr, statics}) {
  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={'content'}>
          <div className={'content__left'}><LeftNav data={navlist.find(item => item.type === 'career')} /></div>
          <div className={'content__right'}>
            <PageTab
              image={hr?.header_image}
              mobileImage={hr?.header_image_mobile}
              title={hr?.title}
              text={hr?.desc}
            />
            <div className={'content__wrap'}>
              <div dangerouslySetInnerHTML={{ __html: hr?.content }} />

              {hr?.form_status && <ContactForm hr />}
            </div>
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

  const hrs = await fetch(`${process.env.API_URL}/hrs`, options).then(r => r.json()).then(data => data.Result);

  hrs.map(item =>  paths.push({ params: { slug: `${slug(item.title)}-${item.id}` } }))

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
  const hrs = await fetch(`${process.env.API_URL}/hrs`, options).then(r => r.json()).then(data => data.Result);
  const hr = hrs.find(item => item?.id == id);

  return {
    props: {
      navlist,
      hr,
      statics,
    },
    revalidate: 10,
  }
}