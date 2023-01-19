import {Button} from ".."
import styles from './Cookie.module.scss';

export const Cookie = (props) => { 
  const { onClick } = props;
  const handleClick = () => onClick && onClick();
  
  return (
    <div className={styles['cookie']}>
      <div className={styles['text']}>
      Çerezler, içeriği ve reklamları kişiselleştirmek, sosyal medya özellikleri sağlamak ve trafiğimizi analiz etmek için kullanılmaktadır. <b>“Kabul Et”</b> seçeneği ile tüm çerezleri kabul edebilirsiniz.
      </div>
      <div className={styles['button']}>
        <Button button text={'Kabul Et'} onClick={handleClick} />
      </div>
    </div>
  )
}