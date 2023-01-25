import PropTypes from 'prop-types';
import { Icon } from "..";

import styles from './InfoList.module.scss';

export const InfoList = (props) => {
  const { data } = props;

  return (
    <div className={styles["info-list"]}>
      <ul className={styles["gallery-slide__layer"]}>
        {data?.map((item, index) => <li key={index}><Icon icon={item?.icon} /><span>{item?.text}</span></li>)}
      </ul>
    </div>
  )
}

InfoList.propTypes = {
};