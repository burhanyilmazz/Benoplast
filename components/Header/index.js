import classNames from 'classnames';
import { Logo } from '../';

import styles from './Header.module.scss';

export const Header = (props) => { 
  const {className} = props;
  return (
    <header className={classNames(styles['header'], className)}>
      <div className={styles['logo']}>
        <Logo />
      </div>
    </header>
  )
}
