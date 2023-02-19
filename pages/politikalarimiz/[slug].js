import { Layout } from "../../layout";
import { Breadcrumb } from "../../components";
import slug from 'slug'

export default function Policies({navlist, policy, statics}) {
  const breadcrumbList = [
    {
      title: "Ana Sayfa",
      href: '/'
    },
    {
      title: policy?.title,
    },
  ];

  return (
    <>
      <Layout navlist={navlist} statics={statics}>
        <section className={"container-fluid"}>
          <Breadcrumb data={breadcrumbList} unmobile />
          <div className={"block"} dangerouslySetInnerHTML={{ __html: policy?.content }} />
        </section>
      </Layout>
    </>
  );
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

  const statics = await fetch(`${process.env.API_URL}/statics`, options).then(r => r.json()).then(data => data.Result);

  statics.map(item =>  paths.push({ params: { slug: `${slug(item.title)}-${item.id}` } }))

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
  const policy = statics.find(item => item?.id == id);

  return {
    props: {
      navlist,
      policy,
      statics,
    },
    revalidate: 10,
  }
}