
import { Layout } from '../../layout'
import Image from 'next/image'
import classNames from 'classnames';
import { LeftNav, ScrollIcon } from '../../components';

import { navlist } from '../../utils/Nav';

export default function Corporate() {


  return (
    <>
      <Layout navlist={navlist}>
        <section className={'content'}>
          <div className={'content--left'}><LeftNav data={navlist.find(item => item.type === 'corporate')} /></div>
          <div className={'content--right'}>
            <div className={'content__header'}>
              <picture>
                <Image
                  src={"/images/pages/degerlerimiz.jpg"}
                  width={"1544"}
                  height={"1080"}
                  alt={"Degerlerimiz"}
                />
              </picture>

              <div className={'content__desc'}>
                <h2>Degerlerimiz</h2>
                <p>
                  İş arkadaşlarımız en büyük değerimizdir. Sürdürülebilirlik faaliyetlerimizin en büyük halkası onlardır. Biliyoruz ki her bir çalışanın ortak çaba ve özverisi ile başarılara imza atıyor ve hedeflerimize ulaşıyoruz. Bu bağlamda çalışan bağlılığını artıracak kaynaklarımızı maksimum seviyede kullanarak aynı zamanda kişisel gelişimi destekleyen, sağlıklı ve güvenli hissettiren, insan haklarına saygılı, fırsat eşitliği ve çeşitliliği destekleyen bir çalışma ortamı sunuyoruz.
                </p>
              </div>

              <ScrollIcon />
            </div>
            <div className={'content__wrap'}>
              <h3>Benoplast = Önce çalışan</h3>

              <p>İş arkadaşlarımız en büyük değerimizdir. Sürdürülebilirlik faaliyetlerimizin en büyük halkası onlardır. Biliyoruz ki her bir çalışanın ortak çaba ve özverisi ile başarılara imza atıyor ve hedeflerimize ulaşıyoruz. Bu bağlamda çalışan bağlılığını artıracak kaynaklarımızı maksimum seviyede kullanarak aynı zamanda kişisel gelişimi destekleyen, sağlıklı ve güvenli hissettiren, insan haklarına saygılı, fırsat eşitliği ve çeşitliliği destekleyen bir çalışma ortamı sunuyoruz. </p>

              <h3>Benoplast = Cinsiyet eşitliği</h3>
              <p>Tüm birimlerimizde kadının gücü ve katma değer sağlayan bakış açısından, pozitif enerjisinden faydalanırken, çağdaş bakış açımız ile işe alım, fikir paylaşımı, görev dağılımları vb. süreçlerde her zaman cinsiyet eşitliği ilkesine göre hareket ediyoruz.</p>

              <h3>Benoplast = Kalite</h3>
              <p>Markamızın kalite, vaktinde üretim ve doğru teslimat üçgeninde anılarak büyümesi ve en büyük taahhütümüzün kalite olduğunun bilinmesi idealini taşıyoruz. Rekabetçi yapımızdan ödün vermeksizin sadece üretim değil aynı zamanda kiralama ve geri dönüşüm faaliyetlerimizde de başarılı ve örnek bir kurum olmak için elimizden geleni yapıyoruz.</p>

              <h3>Benoplast = Müşteri</h3>
              <p>Müşterilerimizi dinlemek, ihtiyaçlarını anlamak, doğru seçenekler sunarak farklı fikirler kazandırmak, öğrenmek, öğretmek, süreci esnek ve rahat bir şekilde yönetmek ve nihayetinde memnuniyet ile sona eren işler üretmek için gereken her fedakârlığı göstermek şirket mirasımızdır.</p>

              <h3>Benoplast = Çevre</h3>
              <p>Kaynakların doğru şekilde yönetilmemesinin, ekosistemin korunmamasının ve iklim değişikliğine hassasiyet gösterilmemesinin insan sağlığı ve ekonomi üzerinde ciddi negatif etkilerinin olacağının farkındayız. Bu bağlamda çevresel performansımızı üst seviyeye çıkararak döngüsel ekonomiye örnek olacak şekilde geri dönüşüm tesisimiz olan PLASTİKO kanalı ile ayda yaklaşık olarak 2.000 Ton plastiği geri dönüştürerek tekrar ekonomik hayata kazandırıyor ve aynı zamanda kiralama şirketimiz olan TRENTO kanalı ile sadece satış değil ‘kiralamanın da’ bir alternatif olabileceğini göstererek takip edilebilir sağlıklı plastik kasa-palet ve konteynerler üreterek müşterilerimizin kullanımına sunuyoruz.
                Müşterilerine, tedarikçilerine, çalışanlarına ve içinde bulunduğu sosyal çevreye saygılı adil bir kurum olarak anılmak için prensiplerinden hiç taviz vermeden ilerleyen Benoplast, benimsemiş olduğu önce çalışan, cinsiyet eşitliği, kalite ve çevre duyarlılığı konularındaki değişmez kültürü ile sektöründe rol model olmaktadır.  </p>

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