import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { Icon, FormInput, Button } from "../"
import styles from './Newsletter.module.scss';

export const Newsletter = (props) => {
  const { className, handleSubmit, title } = props;

  const newsletterSchema = Yup.object().shape({
    email: Yup.string()
      .email('Geçerli bir email girin!')
      .required('Bu alan boş bırakılamaz'),
  })

  const [newsletter] = useState({
    email: '',
  })

  const formik = useFormik({
    initialValues: newsletter,
    validationSchema: newsletterSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)

      await fetch(`${process.env.API_URL}/bulten`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(r => r.json()).then(data => handleSubmit && handleSubmit(data));
    },
  })

  return (
    <div className={classNames(styles['newsletter'], className)}>
      <div className={styles['container']}>
        <div className={styles['title']}>{title}</div>

        <form onSubmit={formik.handleSubmit} noValidate>
          <div className={styles['form-input']}>
            <Icon icon={'email'} className={styles['icon']} />
            <FormInput
              field='E-Posta adresiniz'
              type="email"
              required
              errorMessage={formik.errors.email}
              {...formik.getFieldProps('email')}
              className={classNames(styles['input'], { 'is-invalid': formik.touched.email && formik.errors.email })}
            />
          </div>
          <Button text={'Kaydol'} button className={styles['button']} />
        </form>
      </div>
    </div>
  )
}

Newsletter.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  handleSubmit: PropTypes.func
};

Newsletter.defaultProps = {
  title: 'E-Bülten Kayıt'
};