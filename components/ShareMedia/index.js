import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useRouter } from "next/router";

import {Icon} from ".."
import styles from './ShareMedia.module.scss';

export const ShareMedia = (props) => { 
  const { className } = props;

  const router = useRouter();

  const pageUrl = `${process.env.HOST_URL}${router.asPath}`
  
  
  return (
    <div className={classNames(styles['share'], className)}>
      <h2>Paylaş</h2>
      <ul>
        <li><a href={`https://facebook.com/sharer/sharer.php?u=${pageUrl}`} target="_blank" aria-label='Benoplast Facebook' rel="noreferrer"><Icon icon="facebook" /></a></li>
        <li><a href={`https://twitter.com/intent/tweet/?text=${pageUrl}`} target="_blank" aria-label='Benoplast Twitter' rel="noreferrer"><Icon icon="twitter" /></a></li>
        <li><a href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`} target="_blank" aria-label='Benoplast Linkedin' rel="noreferrer"><Icon icon="linkedin" /></a></li>
      </ul>
    </div>
  )
}

ShareMedia.propTypes = {
	className: PropTypes.string,
};