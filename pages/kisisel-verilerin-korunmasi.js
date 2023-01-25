import Image from "next/image";
import { Layout } from "../layout";
import { Breadcrumb } from "../components";

import { navlist } from '../utils/Nav';

export default function Security() {
  const breadcrumbList = [
    {
      title: 'Anasayfa',
      href: '/'
    },
    {
      title: 'Kişisel Verileri Koruma Kanunu',
    }
  ]

  return (
    <>
      <Layout navlist={navlist}>
        <section className={"container-fluid"}>
          <Breadcrumb data={breadcrumbList} unmobile />
          <div className={'block'}>
            <h3>Kişisel Verileri Koruma Kanunu </h3>
            <b>Kişisel Veriler Kanunu hakkında genel bilgilendirme</b>
            <p>6698 Sayılı Kişisel Verilerin Korunması Kanunu (bundan sonra KVK olarak anılacaktır) 24 Mart
              2016 tarihinde kabul edilmiş, 7 Nisan 2016 tarihli 29677 sayılı Resmi Gazete’de
              yayınlanmıştır. KVK’nIn bir kısmı yayın tarihinde, bir kısmı ise 7 Ekim 2016’da yürürlüğe
              girmiştir.</p>
            <b>Veri sorumlusu sıfatıyla bilgilendirme</b>
            <p>Aşağıda detaylı kurumsal bilgileri yayınlanan Düzlem Metal Sanayi ve Ticaret Ltd. Şti. olarak,
              6698 sayılı KVK uyarınca ve Veri Sorumlusu sıfatıyla, kişisel verileriniz bu sayfada açıklandığı
              çerçevede; kaydedilecek, saklanacak, güncellenecek, mevzuatın izin verdiği durumlarda 3.
              kişilere açıklanabilecek / devredilebilecek, sınıflandırılabilecek ve KVK’da sayılan şekillerde
              işlenebilecektir.</p>
            <b>Kişisel verilerinizin ne şekilde işlenebileceği</b>
            <p>6698 sayılı KVK uyarınca, Düzlem Metal Sanayi ve Ticaret Ltd. Şti. ile paylaştığınız kişisel
              verileriniz, tamamen veya kısmen, otomatik olarak, veyahut herhangi bir veri kayıt sisteminin
              parçası olmak kaydıyla otomatik olmayan yollarla elde edilerek, kaydedilerek, depolanarak,
              değiştirilerek, yeniden düzenlenerek, kısacası veriler üzerinde gerçekleştirilen her türlü
              işleme konu olarak tarafımızdan işlenebilecektir. KVK kapsamında veriler üzerinde
              gerçekleştirilen her türlü işlem &quot;kişisel verilerin işlenmesi” olarak kabul edilmektedir.</p>
            <b>Kişisel verilerinizin işlenme amaçları ve hukuki sebepleri</b>
            <p>Paylaştığınız kişisel veriler,</p>
            <ul>
              <li>Müşterilerimize verdiğimiz hizmetlerin gereklerini, sözleşmenin ve teknolojinin gereklerine
                uygun şekilde yapabilmek, sunulan ürün ve hizmetlerimizi geliştirebilmek için;</li>
              <li>6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun, 6502 sayılı Tüketicinin
                Korunması Hakkında Kanun ile bu düzenlemelere dayanak yapılarak hazırlanan 26.08.2015
                tarihli 29457 sayılı RG’de yayınlanan Elektronik Ticarette Hizmet Sağlayıcı ve Aracı Hizmet
                Sağlayıcılar Hakkında Yönetmelik, 27.11.2014 tarihli ve 29188 sayılı RG’de yayınlanan
                Mesafeli Sözleşmeler Yönetmeliği ve diğer ilgili mevzuat kapsamında işlem sahibinin
                bilgilerini tespit için kimlik, adres ve diğer gerekli bilgileri kaydetmek için;</li>
              <li>Bankacılık ve Elektronik Ödeme alanında zorunlu olan ödeme sistemleri, elektronik
                sözleşme veya kağıt ortamında işleme dayanak olacak tüm kayıt ve belgeleri düzenlemek;
                mevzuat gereği ve diğer otoritelerce öngörülen bilgi saklama, raporlama, bilgilendirme
                yükümlülüklerine uymak için;</li>
              <li>Kamu güvenliğine ilişkin hususlarda ve hukuki uyuşmazlıklarda, talep halinde ve mevzuat
                gereği savcılıklara, mahkemelere ve ilgili kamu görevlilerine bilgi verebilmek için;
                6698 sayılı KVK ve ilgili ikincil düzenlemelere uygun olarak işlenecektir.</li>
            </ul>
            <b>Kişisel verilerinizin aktarılabileceği üçüncü kişi veya kuruluşlar hakkında bilgilendirme</b>
            <p>Yukarıda belirtilen amaçlarla, Düzlem Metal Sanayi ve Ticaret Ltd. Şti. ile paylaştığınız kişisel
              verilerinizin aktarılabileceği kişi / kuruluşlar; ana hissedarlarımız, doğrudan veya dolaylı yurt
              içi / yurt dışı iştiraklerimiz; başta Düzlem Metal Sanayi ve Ticaret Ltd. Şti. E-ticaret altyapısı
              kullanan Üye firmalar ve bunlarla sınırlı olmamak üzere sunulan hizmet ile ilgili kişi ve
              kuruluşlar olmak üzere, faaliyetlerimizi yürütmek üzere ve/veya Veri İşleyen sıfatı ile hizmet
              aldığımız, iş birliği yaptığımız, program ortağı kuruluşları, yurtiçi / yurtdışı kuruluşlar ve diğer
              3. kişilerdir.</p>
            <b>Kişisel verilerinizin toplanma şekli</b>
            <p>Kişisel verileriniz,</p>
            <ul>
              <li>Düzlem Metal Sanayi ve Ticaret Ltd. Şti. İnternet sitesi ve mobil uygulamalarındaki formlar
                ve/veya Düzlem Metal Sanayi ve Ticaret Ltd. Şti. Ticaret altyapısı kullanan Üye Firmaların
                web siteleri aracılığıyla ad, soyad, TC kimlik numarası, adres, telefon, iş veya özel e-posta
                adresi gibi bilgiler ile; kullanıcı adı ve şifresi kullanılarak giriş yapılan sayfalardaki tercihleri,
                gerçekleştirilen işlemlerin IP kayıtları, tarayıcı tarafından toplanan çerez verileri ile gezinme
                süre ve detaylarını içeren veriler, konum verileri şeklinde;</li>
              <li>Satış ve pazarlama departmanı çalışanlarımız, acentelerimiz, bâyilerimiz, kağıt üzerindeki
                formlar, kartvizitler, dijital pazarlama ve çağrı merkezi gibi kanallarımız aracılığıyla sözlü,
                yazılı veya elektronik ortamdan;</li>
              <li>Ayrıca farklı kanallardan dolaylı yoldan elde edilen, web sitesi, blog, yarışma, anket, oyun,
                kampanya ve benzeri amaçlı kullanılan (mikro) web sitelerinden ve sosyal medyadan elde
                edilen veriler, e-bülten okuma veya tıklama hareketleri, kamuya açık veri tabanlarının
                sunduğu veriler, sosyal medya platformları (Facebook, Twitter, Google, Instagram, Snapchat
                vs) gibi sosyal paylaşım sitelerinden paylaşıma açık profil ve verilerden;
                işlenebilmekle ve toplana bilmektedir.</li>
            </ul>
            <b>KVK yürürlüğe girmeden önce elde edilen kişisel verileriniz</b>
            <p>KVKK’nun yürürlük tarihi olan 7 Nisan 2016 tarihinden önce, üyelik, elektronik ileti izni, ürün
              / hizmet satın alma ve diğer şekillerde hukuka uygun olarak elde edilmiş olan kişisel
              verileriniz de bu belgede düzenlenen şart ve koşullara uygun olarak işlenmekte ve muhafaza
              edilmektedir.</p>
            <b>Kişisel verilerinizin yurt dışına aktarılması</b>
            <p>Türkiye’de işlenerek veya Türkiye dışında işlenip muhafaza edilmek üzere, yukarıda sayılan
              yöntemlerden herhangi birisi ile toplanmış kişisel verileriniz KVKK kapsamında kalmak
              kaydıyla ve sözleşme amaçlarına uygun olarak yurtdışında bulunan (Kişisel Veriler Kurulu
              tarafından akredite edilen ve kişisel verilerin korunması hususunda yeterli korumanın
              bulunduğu ülkelere) hizmet aracılarına da aktarılabilecektir.</p>
            <b>Kişisel verilerin saklanması ve korunması</b>
            <p>Kişisel verileriniz, Düzlem Metal Sanayi ve Ticaret Ltd. Şti. nezdinde yer alan veri tabanında
              ve sistemlerde KVK’nın 12. maddesi gereğince gizli olarak saklanacak; yasal zorunluluklar ve
              bu belgede belirtilen düzenlemeler haricinde hiçbir şekilde üçüncü kişilerle
              paylaşılmayacaktır.</p>
            <p>Düzlem Metal Sanayi ve Ticaret Ltd. Şti. kişisel verilerinizin barındığı sistemleri ve veri
              tabanlarını, KVK’nIn 12. Maddesi gereği kişisel verilerin hukuka aykırı olarak işlenmesini
              önlemekle, yetkisiz kişilerin erişimlerini engellemekle; muhafazalarını sağlamak amacıyla
              hash, şifreleme, işlem kaydı, erişim yönetimi gibi yazılımsal tedbirleri ve fiziksel güvenlik
              önlemleri almakla mükelleftir. Kişisel verilerin yasal olmayan yollarla başkaları tarafından
              elde edilmesinin öğrenilmesi halinde durum derhal, yasal düzenlemeye uygun ve yazılı olarak
              Kişisel Verileri Koruma Kurulu’na bildirilecektir.</p>
            <b>Kişisel verilerin güncel ve doğru tutulması</b>
            <p>KVK’nın 4. maddesi uyarınca Düzlem Metal Sanayi ve Ticaret Ltd. Şti. ‘nin kişisel verilerinizi
              doğru ve güncel olarak tutma yükümlülüğü bulunmaktadır. Bu kapsamda Düzlem Metal
              Sanayi ve Ticaret Ltd. Şti. ‘nin yürürlükteki mevzuattan doğan yükümlülüklerini yerine
              getirebilmesi için Müşterilerimizin doğru ve güncel verilerini paylaşması veya web sitesi /
              mobil uygulama üzerinden güncellemesi gerekmektedir.</p>
            <b>6698 sayılı KVK uyarınca kişisel veri sahibinin hakları</b>
            <p>6698 sayılı KVK 11.maddesi 07 Ekim 2016 tarihinde yürürlüğe girmiş olup ilgili madde
              gereğince, Kişisel Veri Sahibi’nin bu tarihten sonraki hakları aşağıdaki gibidir:</p>
            <ol>
              <li>Kişisel Veri Sahibi, Düzlem Metal Sanayi ve Ticaret Ltd. Şti. ‘ye (veri sorumlusu) başvurarak
                kendisiyle ilgili;</li>
              <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını
                öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>KVK’nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok
                edilmesini isteme,</li>
              <li>Kişisel verilerin düzeltilmesi, silinmesi, yok edilmesi halinde bu işlemlerin, kişisel verilerin
                aktarıldığı üçüncü kişilere de bildirilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin
                kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın
                giderilmesini talep etme, haklarına sahiptir.</li>
            </ol>
            <p>Düzlem Metal Sanayi ve Ticaret Ltd. Şti. tarafından atanacak Veri Sorumlusu Temsilcisi, yasal
              altyapı sağlandığında Veri Sorumluları Sicilinde ve bu belgenin bulunduğu İnternet adresinde
              ilan edilecektir.</p>
            <p>Kişisel Veri Sahipleri, sorularını, görüşlerini veya taleplerini aşağıdaki iletişim kanallarından
              herhangi birisine yöneltebilir.</p>
            <p>E-posta: info@voldeglobal.com</p>
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