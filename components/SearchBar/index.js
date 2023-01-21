import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Search, Icon } from '../';

import styles from './SearchBar.module.scss';

export const SearchBar = (props) => {
  const { isShow, outsideClick } = props;

  const handleOutsideClick = (event) => {
    const { target } = event;

    if (target.nodeName === "ASIDE") {
      outsideClick && outsideClick()
    }
  }

  return (
    <aside className={classNames(styles['search'], { [styles['search--open']]: isShow })} onClick={(event) => handleOutsideClick(event)}>
      <div className={styles['search__close']} onClick={() => outsideClick && outsideClick()}><Icon icon={'close'} /></div>
      <div className={styles['wrap']}>
        <h2>Ne Aramıştınız ?</h2>
        <p>Ürünler, hizmetler ve daha fazlası için…</p>
        <Search id={'layout'} />
      </div>
    </aside>
  )
}

SearchBar.propTypes = {
  isShow: PropTypes.bool,
};

SearchBar.defaultProps = {
  isShow: false,
}