
import { useState } from "react";
import { Layout } from '../../layout'
import Image from 'next/image'
import classNames from 'classnames';
import { LeftNav, Breadcrumb, Card, Back, ListBox, GallerySlide, Modal, InfoList, OfferBox } from '../../components';

import styles from '../../assets/styles/ProductDetail.module.scss'

import { navlist } from '../../utils/Nav';

export default function ProductDetail() {
  const [modalImage, setModalImage] = useState();

  const cards = [
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
    { title: 'B-400', subTitle: "Katlanır Kasa", image: '/images/cards/card-2.jpg' },
  ]

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
      title: 'Ürünler'
    }
  ]

  const industries = [
    { title: 'SANAYİ', icon: 'industry', hover: '/images/content/industry.png'},
    { title: 'TARIM', icon: 'agriculture', hover: '/images/content/agriculture.png'},
    { title: 'GIDA', icon: 'food', hover: '/images/content/food.png'},
    { title: 'LOJİSTİK', icon: 'logistics', hover: '/images/content/logistics.png'},
    { title: 'ZİNCİR MARKETLER', icon: 'market', hover: '/images/content/market.png' },
  ]

  const gallery = [
    {
      image: "/images/products/product-big.jpg",
      child: [
        { path: "/images/products/product-big.jpg" },
        { path: "/images/products/product-big.jpg" },
        { path: "/images/products/product-big.jpg" },
        { path: "/images/products/product-big.jpg" },
        { path: "/images/products/product-big.jpg" }
      ]
    }
  ]

  const list = [
    { icon: "dimensions", text: "400 x 600 x 300 mm (U x G x Y)" },
    { icon: "truck", text: "370 x 570 x 283 mm (U x G x Y)" },
    { icon: "dimensions", text: "370 x 570 x 283 mm (U x G x Y)" },
    { icon: "union", text: "400 x 600 x 300 mm (U x G x Y)" },
    { icon: "truck-big", text: "370 x 570 x 283 mm (U x G x Y)" },
    { icon: "volume", text: "370 x 570 x 283 mm (U x G x Y)" },
    { icon: "dimensions", text: "59.05 lt" },
    { icon: "palett", text: "59.05 lt" },
    { icon: "dimensions", text: "59.05 lt" },
  ]

  const offer = [
    { icon: "share", title: "Sayfayı Paylaş" },
    { icon: "360degree", title: "XR 360" },
    { icon: "download", title: "Teknik Broşür (TDS)" },
    { icon: "plus-circle", title: "Teklif Listesine Ekle" },
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={'content product'}>
          <div className={'content--left'}><LeftNav data={navlist.find(item => item.type === 'products')} /></div>
          <div className={'content--right'}>
            <div className={'content__wrap'}>
              <Breadcrumb data={breadcrumbList} className={'breadcrumb'} />

              <div className={styles['product-detail__head']}>
                <h3>Pasif Kilitli Katlanır Kasalar</h3>
                <Back />
              </div>

              {gallery && <div className={styles["product-detail__gallery"]}>
                {gallery?.map((item, index) => <GallerySlide key={index} image={item.image} data={item.child} onClick={() => setModalImage(item.image)} />)}
              </div>}

              <InfoList data={list} />

              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.</p>

              <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>

              <h3>Uyumlu Ürünler</h3>

              <div className={styles['product-detail__wrap']}>
                {cards.map((item, index) => <Card key={index} title={item.title} subTitle={item.subTitle} image={item.image} path={`${'#'}`} />)}
              </div>


              <h3>Kullanıldığı Sektörler</h3>

              <div className={styles['product-detail__wrap']}>
                {industries.map((item, index) => <ListBox key={index} data={item} />)}
              </div>
            </div>
          </div>

          <OfferBox data={offer} buttons />

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