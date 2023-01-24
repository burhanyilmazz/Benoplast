
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link'

import styles from './CardContact.module.scss';

export const CardContact = (props) => { 
  const { className, data } = props;

  return (
    <div  className={classNames(styles['card-contact'], className)}>
      <h4>{data?.title}</h4>

      <ul>
        <li><span>Adres</span> {data?.address} </li>
        <li><span>Telefon</span> <Link href={'#'}> {data?.fax} </Link> <Link href={'#'}> {data?.phone} </Link> </li>
        <li><span>E-Posta</span> <Link href={'#'}>{data?.email}</Link> </li>
        <li><span>Website</span> <Link href={data?.website}>{data?.website}</Link> </li>
      </ul>
   
    </div>
  )
}

CardContact.propTypes = {
	className: PropTypes.string,
	data: PropTypes.any,
};

CardContact.defaultProps = {
};