
import { Layout } from '../../layout'
import Image from 'next/image'
import classNames from 'classnames';
import { LeftNav, ScrollIcon, ContactForm } from '../../components';

import { navlist } from '../../utils/Nav';

export default function Career() {


  return (
    <>
      <Layout navlist={navlist}>
        <section className={'content'}>
          <div className={'content--left'}><LeftNav data={navlist.find(item => item.type === 'career')} /></div>
          <div className={'content--right'}>
            <div className={'content__header'}>
              <picture>
                <Image
                  src={"/images/pages/kariyer.jpg"}
                  width={"1544"}
                  height={"1080"}
                  alt={"Bize Katıl"}
                />
              </picture>

              <div className={'content__desc'}>
                <h2>Bize Katıl</h2>
                <p>
                  Benoplast değerlerini benimseyen, şirket dinamizminin gerektirdiği yetkinliklere sahip, öğrenmeye açık, dinamik ve gelişmeye istekli, kişisel gelişimlerine katkı sağlayan, müşteri odaklı, topluma karşı sorumlu ve etik değerlere önem veren, potansiyellerini en verimli şekilde kullanmalarına olanak tanımak ve sektöründe üstün nitelikli çalışanlar için en çok tercih edilen şirket olmasını sağlamaktır.
                </p>
              </div>

              <ScrollIcon />
            </div>
            <div className={'content__wrap'}>

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it? </p>

                <ContactForm hr/>


            </div>
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