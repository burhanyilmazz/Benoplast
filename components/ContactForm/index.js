import Head from 'next/head'
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { FormInput, FormTextarea, Button, FormCheckbox, FileInput, Modal, Icon } from "../"
import styles from './ContactForm.module.scss';

export const ContactForm = (props) => {
  const { className, hr, title, titles, contacts, backClick } = props;
  const [checkboxAllow, setCheckboxAllow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [agreementModal, setAgreementModal] = useState(false);

  const contactSchema = Yup.object().shape({
    email: Yup.string()
      .email('Geçerli bir email girin.')
      .required('Bu alan boş bırakılamaz!'),
    name: Yup.string().required('Bu alan boş bırakılamaz!'),
    surname: Yup.string().required('Bu alan boş bırakılamaz!'),
    permission: Yup.bool().oneOf([true], 'Bu alan boş bırakılamaz!'),
    recaptcha: Yup.string().required('Bu alan boş bırakılamaz!'),
  })

  const [contact] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
    permission: false,
    recaptcha: '',
    cv: {}
  })

  const formik = useFormik({
    initialValues: contact,
    validationSchema: contactSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)

      if (hr) {
        const formData = new FormData();
        for (const property in values) {
          formData.append(property, values[property]);
        }

       await fetch(`${process.env.API_URL}/hr_form`, {
          method: 'POST',
          body: formData
        }).then(r => r.json()).then(data => setModalOpen(true));
      } else {
        await fetch(`${process.env.API_URL}/contact_form`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((r) => r.json())
          .then((data) => setModalOpen(true));
      }
    },
  })

  const verifyCallback = (response) => formik.setFieldValue('recaptcha', response);

  useEffect(() => {
    window.onloadCallback = () => {
      try {
        window.grecaptcha.render('captcha', {
          'sitekey': '6LcmT9YjAAAAADNzc4MO4aGds7ghrYsvX2Spt8PJ',
          'callback': verifyCallback,
        });
      } catch (error) {
        console.log(error)
      }
    };
  }, [])

  const handleChangePermission = () => {
    setCheckboxAllow(!checkboxAllow)
    formik.setFieldValue('permission', !checkboxAllow)
  };

  const handleButtonClick = () => {
    backClick && backClick()
  }

  return (
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
      </Head>
      <div className={classNames(styles['contact-form'], { [styles["contact-form--hr"]]: hr }, className)}>
        {titles ? <h3>{title}</h3> : null}
        <form onSubmit={formik.handleSubmit} noValidate>
          <div className='form-group'>
            <div>
              <FormInput
                field='Adınız'
                required
                errorMessage={formik.errors.name}
                {...formik.getFieldProps('name')}
                className={classNames({ 'is-invalid': formik.touched.name && formik.errors.name })}
              />
            </div>
            <div>
              <FormInput
                field='Soyadınız'
                required
                errorMessage={formik.errors.surname}
                {...formik.getFieldProps('surname')}
                className={classNames({ 'is-invalid': formik.touched.surname && formik.errors.surname })}
              />
            </div>
          </div>

          <div className='form-group'>
            <div>
              <FormInput
                field='E-Posta'
                type="email"
                required
                errorMessage={formik.errors.email}
                {...formik.getFieldProps('email')}
                className={classNames({ 'is-invalid': formik.touched.email && formik.errors.email })}
              />
            </div>

            <div>
              <FormInput
                field='Telefon'
                type="phone"
                required
                errorMessage={formik.errors.phone}
                {...formik.getFieldProps('phone')}
                className={classNames({ 'is-invalid': formik.touched.phone && formik.errors.phone })}
              />
            </div>
          </div>

          {hr && <div className='form-group'>
            <FileInput
              field={'Lütfen CV’nizi yükleyiniz.'}
              name={'cv'}
              onChange={(event) => formik.setFieldValue('cv', event.currentTarget.files[0])}
              accept="image/*,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
          </div>}

          <div className='form-group'>
            <FormTextarea
              field='Mesajınız'
              rows={5}
              name={'message'}
              {...formik.getFieldProps('message')}
            />
          </div>

          <div className='form-group'>
            <FormCheckbox
              label='<b>BENOPLAST</b> tarafından yukarıda belirtmiş olduğum bilgiler üzerinden benimle iletişim kurulmasını ve <u>izinli iletişim formu</u>‘nu onaylıyorum.'
              onChange={() => handleChangePermission()}
              checked={checkboxAllow}
              errorMessage={formik.errors.permission}
              name={'permission'}
              required
              onClickText={() => setAgreementModal(true)}
              className={classNames({ 'is-invalid': formik.touched.permission && formik.errors.permission })}
            />
          </div>

          <div className={'form-group-buttons'}>
            <div className={classNames('captcha', { 'is-invalid': formik.touched.recaptcha && formik.errors.recaptcha })}>
              <div id="captcha"></div>
              <pre>{formik.errors.recaptcha}</pre>
            </div>
            {hr || contacts && <Button variant={'left-animation'} text={'Gönder'} button className={styles['button']} />}
          </div>

          {!hr && !contacts &&
            <div className={classNames('form-group-buttons')}>
              <Button variant={'small'} className={styles['button']} onClick={() => handleButtonClick()} />
              <Button variant={'middle'} text={'Formu Gönder'} button className={styles['button']} />
            </div>
          }
        </form>
      </div>

      {modalOpen && <Modal onClose={() => setModalOpen(false)}>
        <div className='success-modal'>
          <div className='success-modal__icon'><Icon icon='check' /></div>
          <div className='success-modal__title'>Tebrikler!</div>
          <div className='success-modal__text'>E-Bülten kaydınız gerçekleşti.</div>
          <div className='success-modal__desc'>E-Posta kaydınız veritabanımıza başarıyla tanımlanmıştır. Teşekkürler.</div>
        </div>
      </Modal>}

      {agreementModal && <Modal onClose={() => setAgreementModal(false)}>
        <div className={styles['permission']}>
          <div className={styles['permission__content']}>
            <p><b>www.benoplast.com</b> web sitesi aracılığıyla yeni bültenlerin tanıtımı başta olmak üzere,
              tarafıma ticari elektronik ileti gönderilmesi amacıyla <b>Düzlem Metal Sanayi ve Ticaret Ltd.
                Şti.</b> ile paylaşmış olduğum telefon ve e-posta aracılığıyla adresimin kullanılmasına ve işbu
              iletişim araçları ile şahsımla iletişime geçilmesine, bu kapsamda paylaşmış olduğum bilgilerin
              Düzlem Metal Sanayi ve Ticaret Ltd. Şti. tarafından saklanmasına, kullanılmasına ve ticari
              elektronik iletinin içeriğinin ve gönderiye ilişkin diğer kayıtların gerektiğinde Gümrük ve
              Ticaret Bakanlığı’na sunulmak üzere kayıt altına alınarak saklanmasına onay veriyorum.</p>
          </div>
        </div>
      </Modal>}
    </>
  )
}

ContactForm.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  hr: PropTypes.bool,
  titles: PropTypes.bool,
  contacts: PropTypes.bool
};