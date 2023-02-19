import PropTypes from 'prop-types';
import Image from 'next/image';
import { Icon } from "..";

import styles from './InfoList.module.scss';

export const InfoList = (props) => {
  const { data } = props;

  return (
    <div className={styles["info-list"]}>
      <ul className={styles["gallery-slide__layer"]}>
        {data?.map((item, index) => <li key={index}>{/* <Icon icon={item?.icon} /> */}<Image src={item?.images} alt={item?.title} width={59} height={24} /> <span>{item?.title}</span></li>)}
      </ul>
    </div>
  )
}

InfoList.propTypes = {
  data: PropTypes.array,
};