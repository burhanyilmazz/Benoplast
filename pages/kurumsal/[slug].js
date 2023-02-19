
import { Layout } from '../../layout'
import slug from 'slug'
import { LeftNav, PageTab, CardPrize } from '../../components';
import styles from '../../assets/styles/Corporate.module.scss'

export default function Corporate({navlist, corporate, statics}) {
  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={'content'}>
          <div className={'content__left'}><LeftNav data={navlist.find(item => item.type === 'corporate')} /></div>
          <div className={'content__right'}>
            <PageTab
              image={corporate?.header_image}
              mobileImage={corporate?.header_image_mobile}
              title={corporate?.title}
              text={corporate?.desc}
            />
            {corporate?.tamplate_sef == 'standart' && <div className={'content__wrap block'} dangerouslySetInnerHTML={{ __html: corporate?.content }} />}

            {corporate?.tamplate_sef == 'basarilarimiz' && <div className={'content__wrap'}>
              {corporate?.label.length > 0 && <div className={styles['card--wrap']}>
                {corporate?.label?.map((item, index) => <CardPrize key={index} title={item.title} image={item.left_images} rightImage={item.right_images} />)}
              </div>}
            </div>}
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

  const corporates = await fetch(`${process.env.API_URL}/corporates`, options).then(r => r.json()).then(data => data.Result);

  corporates.map(item =>  paths.push({ params: { slug: `${slug(item.title)}-${item.id}` } }))

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
  const corporates = await fetch(`${process.env.API_URL}/corporates`, options).then(r => r.json()).then(data => data.Result);
  const corporate = corporates.find(item => item?.id == id);

  return {
    props: {
      navlist,
      corporate,
      statics,
    },
    revalidate: 10,
  }
}