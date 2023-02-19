
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
        {data?.address && <li><span>Adres</span> {data?.address} </li>}
        {(data?.tel1 ||data?.tel2) &&<li><span>Telefon</span> {data?.tel1 && <Link href={`tel:${data?.tel1}`}>{data?.tel1}</Link>} {data?.tel2 && <Link href={`tel:${data?.tel2}`}>{data?.tel2}</Link>}</li>}
        {data?.email && <li><span>E-Posta</span> <Link href={`mailto:${data?.email}`}>{data?.email}</Link> </li>}
        {data?.website && <li><span>Website</span> <Link href={data?.website} target={'_blank'}>{data?.website}</Link> </li>}
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