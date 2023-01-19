import {useState} from 'react';
import {useRouter} from 'next/router'
import classNames from 'classnames';
import * as Yup from 'yup'
import {useFormik} from 'formik'
import PropTypes from 'prop-types';

import styles from './Search.module.scss';
import { FormInput, Icon } from '../';

export const Search = (props) => {
  const {onFocus, onBlur, sidebar, id} = props;
  const router = useRouter()

  const searchSchema = Yup.object().shape({
    keyword: Yup.string().min(3, 'Lütfen min. 3 karakter girin').required('Bu alan boş bırakılamaz.'),
  })

  const [search] = useState({
    keyword: '',
  })

  const formik = useFormik({
    initialValues: search,
    validationSchema: searchSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true);
      const pathname = `/search`
      router.push({
        pathname,
        query: {keyword: values.keyword},
      })
    },
  })

  const handleBlur = () => onBlur && onBlur()
  const handleFocus = () => onFocus && onFocus()

  return (
    <div className={classNames(styles['search'], {[styles['search--sidebar']]: sidebar})}>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className={styles['input']}>
          <FormInput 
            field={'Ne aramıştınız?'} 
            name={'keyword'} 
            type="text" 
            required={true}
            id={id}
            errorMessage={formik.errors.keyword}
            className={classNames(styles['search-input'], {'is-invalid': formik.touched.keyword && formik.errors.keyword})}
            onFocus={handleFocus}
            {...formik.getFieldProps('keyword')}
            onBlur={handleBlur}
          />
          <button type='submit' aria-label="Search" className={styles['input-submit']}><Icon icon={'search'} /></button>
        </div>
      </form>
    </div>
  )
}

Search.propTypes = {
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	sidebar: PropTypes.bool,
};