import { Button } from ".."
import styles from './Cookie.module.scss';

export const Cookie = (props) => {
  const { onClick } = props;
  const handleClick = () => onClick && onClick();

  return (
    <div className={styles['cookie']}>
      <div className={styles['text']}>
        Web sitemizden en iyi şekilde faydalanabilmeniz için tanımlama bilgileri (çerezler) kullanılmaktadır. Ancak dilerseniz tanımlama bilgileri ayarlarınızı istediğiniz zaman değiştirebilirsiniz. Web sitemizin işleyişi için kesinlikle gerekli olan bazı tanımlama bilgileri engellenememektedir. “Detaylı bilgi” butonuna tıklayarak tanımlama bilgilerinin bu web sitesinde nasıl kullanıldığı ile ilgili detaylı bilgi alabilirsiniz.
      </div>
      <div className={styles['button']}>
        <Button variant={'middle'} text={'Detaylı Bilgi'} onClick={handleClick} />
      </div>
    </div>
  )
}