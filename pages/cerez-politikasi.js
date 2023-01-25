import { Layout } from "../layout";
import { Breadcrumb } from "../components";

import { navlist } from '../utils/Nav';

export default function Cookie() {
  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Çerez Politikası',
    }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={"container-fluid"}>
          <Breadcrumb data={breadcrumbList} unmobile />
          <div className={'block'}>
            <h3>Çerez Politikası </h3>
            <b>Kullanım süresine göre çerez çeşitleri:</b>
            <p>Düzlem Metal Sanayi ve Ticaret Ltd. Şti. tarafından işletilen elektronik ticaret platformlarının
              web sitelerinde ve mobil sitelerinde kullanım sürelerine göre, oturum çerezleri ve kalıcı
              çerezler kullanılmaktadır. Oturum çerezi, tarayıcınızı kapattığınızda sona ermektedir. Kalıcı
              çerez ise, sabit diskinizde uzun bir süre veya süresiz olarak kalmaktadır.</p>
            <b>Çerezin sahibi veya çerezi yerleştiren tarafa göre çerez çeşitleri:</b>
            <p>Düzlem Metal Sanayi ve Ticaret Ltd. Şti. tarafından işletilen elektronik ticaret platformlarının
              web sitelerinde ve mobil sitelerinde yerleştiren tarafa göre “Düzlem Metal Sanayi ve Ticaret
              Ltd. Şti. çerezleri (first party cookie)” ve &quot;üçüncü taraf (third party cookie) çerezler&quot;
              kullanılmaktadır. Düzlem Metal Sanayi ve Ticaret Ltd. Şti.’nin çerezleri iş birliği yaptığımız
              üçüncü taraf firmalar (Google, Facebook gibi) tarafından yönetilmektedir.</p>
            <b>Kullanım amaçlarına göre çerez çeşitleri:</b>
            <p>Düzlem Metal Sanayi ve Ticaret Ltd. Şti. web sitesinde ve mobil sitesinde, kullanım amacına
              göre aşağıdaki çerezler kullanılmaktadır.</p>
            <b>Zorunlu Çerezler:</b>
            <p>Bu çerezler, web sitesinin çalışması için gereklidir ve sistemlerimizde kapatılamaz. Web
              sitesinde dolaşmanızı ve gizlilik tercihlerinizi belirlemenizi, giriş yapma veya formları
              doldurma gibi hizmet talebine karşılık gelen eylemleri kullanmanıza olanak sağlamaktadır.</p>
            <b>Performans Çerezleri:</b>
            <p>Bu çerezler, web sitesinin çalışma şeklini geliştirmek için kullanılmaktadır. Ziyaretçiyi
              tanımlayan bilgileri toplamaz. Ziyaretçilerin web sitesini nasıl kullandıklarına (Örneğin web
              sayfalarında hata mesajı alıp almadıkları) ilişkin bilgileri içermektedir.</p>
            <b>Fonksiyonel Çerezler:</b>
            <p>Bu çerezler web sitesinin yaptığınız seçimleri (kullanıcı adınız, diliniz veya bulunduğunuz
              bölge gibi) hatırlamasını ve gelişmiş, daha fazla kişisel özellikler sağlamasını sağlar. Ayrıca
              metin boyutunda, yazı tiplerinde ve web sayfalarının diğer bölümlerinde
              özelleştirebileceğiniz değişiklikleri hatırlamak için de kullanılabilir. Bu çerezlerin topladığı
              bilgiler gizli tutulabilir ve bu çerezler diğer web sitelerindeki göz atma etkinliğinizi
              izleyemezler. Bu çerezlere izin vermezseniz, bu işlevlerin bazıları veya tümü düzgün
              çalışmayabilir.</p>
            <b>Hedefleme ve Reklam Çerezleri:</b>
            <p>Bu çerezler, profilinizi oluşturmak ve ilgi alanlarınızla alakalı reklamlar sunmak için
              kullanılmaktadır. Reklam kampanyasının etkinliğini ölçmeye yardımcı olmasının yanı sıra, bir
              reklamı görme sayısını sınırlamak için de kullanılmaktadır. Genellikle web sitesi sahibinin
              izniyle reklam ağlarına yerleştirilir (Örneğin; sosyal medya siteleri). Web sitesini ziyaretinize
              ilişkin bilgiler reklam veren diğer kuruluşlarla paylaşılmaktadır. Bu çerezlere izin verilmemesi
              durumunda, farklı web sitelerinde hedefli reklamlarımız deneyimlenememektedir.</p>
            <p>www.voldeglobal.com web sitesi ve mobil sitesinde kullandığımız çerezler için, kullanıcıların

              açık rızaları alınmakta ve diledikleri zaman bu rızayı değiştirebilme olanağı sağlanmaktadır.
              Açık rıza yönetimi olarak adlandırdığımız bu sistem, web sitesi ve mobil sitesinde ana sayfada
              bulunan banner’da yer almaktadır. Kullanıcılar, bu banner üzerinden, web sitesi ve mobil
              sitesinde kullanılan çerez çeşitlerini, çerez sahiplerini, çerezlerin amacını ve niteliğini ve
              süresini görebilmekte ve Zorunlu Çerezler dışında kalan tüm çerezler için “aktif” veya “pasif”
              seçeneği ile tercihlerini belirleyebilmektedirler. Yine kullanıcıların bu banner üzerinden
              yaptıkları tercihleri her zaman değiştirebilmeleri mümkündür.</p>

          </div>
        </section>
      </Layout>
    </>
  );
}


// export async function getStaticProps() {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ language: 'tr' })
//   }

//   const navlist = await fetch(`${process.env.API_URL}/navi`, options).then(r => r.json()).then(data => data.Result);

//   return {
//     props: {
//       navlist,
//     },
//     revalidate: 10,
//   }
// }