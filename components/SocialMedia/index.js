import classNames from 'classnames';
import PropTypes from 'prop-types';

import {Icon} from "../"
import styles from './SocialMedia.module.scss';

export const SocialMedia = (props) => { 
  const { className } = props;
  
  return (
    <div className={classNames(styles['social-media'], className)}>
      <ul>
        <li><a href="https://www.instagram.com/benoplast/" target="_blank" aria-label='Benoplast Instagram' rel="noreferrer"><Icon icon="instagram" /></a></li>
        <li><a href="https://www.facebook.com/benoplast/" target="_blank" aria-label='Benoplast Facebook' rel="noreferrer"><Icon icon="facebook" /></a></li>
        <li><a href="https://www.youtube.com/channel/UCcXqZk3MYmd8VvP9-339yWg" target="_blank" aria-label='Benoplast Youtube' rel="noreferrer"><Icon icon="youtube" /></a></li>
        <li><a href="https://www.linkedin.com/company/benoplast/?viewAsMember=true" target="_blank" aria-label='Benoplast Linkedin' rel="noreferrer"><Icon icon="linkedin" /></a></li>
      </ul>
    </div>
  )
}

SocialMedia.propTypes = {
	className: PropTypes.string,
};