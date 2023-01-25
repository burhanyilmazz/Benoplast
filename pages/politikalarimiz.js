import Image from "next/image";
import { Layout } from "../layout";
import { Breadcrumb } from "../components";

import { navlist } from '../utils/Nav';

export default function Policies() {
  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Gizlilik ve Güvenlik Politikası',
    }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={"container-fluid"}>
          <Breadcrumb data={breadcrumbList} unmobile />
          <div className={"block"}>
            <h3>Gizlilik ve Güvenlik Politikası </h3>
            <p><b>Düzlem Metal Sanayi ve Ticaret Ltd. Şti.</b> Esenşehir Mah. İlkyaz Sk. Kartal Plaza
              No:24-28 Kat:2 Ümraniye - İstanbul / Türkiye adresine kayıtlı bulunmaktadır. Volde,
              Düzlem Metal Sanayi ve Ticaret Ltd. Şti.’nin tescilli markasıdır.</p>
            <p>Firmamız, çeşitli amaçlarla kişisel veriler toplayabilir. Aşağıda, toplanan kişisel
              verilerin nasıl ve ne şekilde toplandığı, bu verilerin nasıl ve ne şekilde korunduğu
              belirtilmiştir.</p>
            <p>Üyelik çeşitli form ve anketlerin doldurulması suretiyle üyelerin kendileriyle ilgili bir
              takım kişisel bilgileri (isim-soy isim, firma bilgileri, telefon, adres veya e-posta
              adresleri gibi) işin doğası gereği toplanmaktadır.</p>
            <p>Firmamız bazı dönemlerde müşterilerine teklif ve bilgilendirici içerikli mailler
              gönderebilir. Üyelerimiz bu gibi bilgileri alıp almama konusunda her türlü seçimi üye
              olurken yapabilir, sonrasında üye girişi yaptıktan sonra hesap bilgileri bölümünden bu
              seçimi değiştirilebilir ya da kendisine gelen bilgilendirme iletisindeki linkle bildirim
              yapabilir.</p>
            <p>E-posta ile gerçekleştirilen onay sürecinde, kişisel bilgiler, &quot;Kullanıcı Sözleşmesi&quot; ile
              belirlenen amaçlar ve kapsam dışında üçüncü kişilere açıklanmayacaktır.</p>
            <p>Sistemle ilgili sorunların tanımlanması ve verilen hizmet ile ilgili çıkabilecek sorunların
              veya uyuşmazlıkların hızla çözülmesi için, Firmamız, üyelerinin IP adresini
              kaydetmekte ve bunu kullanmaktadır. IP adresleri, kullanıcıları genel bir şekilde
              tanımlamak ve kapsamlı demografik bilgi toplamak amacıyla da kullanılabilir.</p>
            <p>Kişisel veriler, kullanıcı kimliği ifşa edilmeden çeşitli istatistiksel değerlendirmeler, veri
              tabanı oluşturma ve pazar araştırmalarında kullanılabilir, üçüncü bir kişiye ifşasını
              önlemek için gerekli tüm tedbirleri almayı ve gerekli özeni göstermeyi taahhüt
              etmektedir.</p>
            <b>ÜÇÜNCÜ TARAF WEB SİTELERİ VE UYGULAMALAR</b>
            <p>Web sitemiz başka sitelere link verebilir. Firmamız, bu linkler vasıtasıyla erişilen
              sitelerin gizlilik uygulamaları ve içeriklerine yönelik herhangi bir sorumluluk
              taşımamaktadır. Firmamıza ait sitede yayınlanan reklamlar, reklamcılık yapan iş
              ortaklarımız aracılığı ile kullanıcılarımıza dağıtılır. İş bu sözleşmedeki Gizlilik
              Politikası Prensipleri, sadece Mağazamızın kullanımına ilişkindir, üçüncü taraf web
              sitelerini kapsamaz.</p>
            <b>TARAYICI ÇEREZLERİ</b>
            <p>Firmamız, web sitemizi veya sanal mağazamızı ziyaret eden kullanıcılar hakkındaki
              bilgileri teknik bir iletişim dosyası (Çerez-Cookie) kullanarak elde edebilir. Bahsi
              geçen teknik iletişim dosyaları, ana bellekte saklanmak üzere bir İnternet sitesinin
              kullanıcının tarayıcısına (browser) gönderdiği küçük metin dosyalarıdır. Teknik
              iletişim dosyası site hakkında durum ve tercihleri saklayarak İnternet&#39;in kullanımını
              kolaylaştırır.</p>
            <p>Çerezler, site ziyaretçi trafiği, ziyaretçilerin siteyi hangi amaçla, kaç kez ziyaret ettiğini
              ve ne kadar sitede kaldıkları hakkında istatistiksel bilgileri elde etmeye ve kullanıcılar
              için özel tasarlanmış kullanıcı sayfalarından dinamik olarak reklam ve içerik
              üretilmesine yardımcı olur. Çerezler, ana bellekte veya E-pastanızdan veri veya farklı
              bir kişisel veri almak için tasarlanmamıştır. Tarayıcıların pek çoğu başta teknik
              iletişim dosyasını kabul eder biçimde tasarlanmıştır ancak kullanıcılar dilerse teknik
              iletişim dosyasının gelmemesi veya teknik iletişim dosyasının gönderildiğinde uyarı
              verilmesini sağlayacak biçimde ayarları değiştirebilirler.</p>
            <p>Firmamız, işbu &quot;Gizlilik Politikası&quot; hükümlerini dilediği zaman sitede yayınlamak veya
              kullanıcılara elektronik posta göndermek veya sitesinde yayınlamak suretiyle
              değiştirebilir. Gizlilik Politikası hükümleri değiştiği takdirde, yayınlandığı tarihte
              yürürlük kazanır.</p>
            <p>Soru ve önerileriniz info@voldeglobal.com adresine e-mail gönderebilirsiniz.</p>
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