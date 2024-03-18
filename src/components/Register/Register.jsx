import './Register.css'
import AuthForm from '../AuthForm/AuthForm'
import React from 'react'
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import AuthInput from '../AuthInput/AuthInput'
import Preloader from '../Preloader/Preloader'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'


export default function Register ({ onRegister }) {
  const { isLoading, setApiMessage, apiMessage } = React.useContext(CurrentUserContext)
  const { values, errors, isValid, handleChange } = useFormWithValidation()

  function handleSubmit (event) {
    event.preventDefault()

    onRegister({
      name: values.registerInputName,
      email: values.registerInputEmail,
      password: values.registerInputPassword
    })
  }

  React.useEffect(() => {
    setApiMessage('')
  }, [])

  return (
    <main className='register'>
      <Link to={'/'} className='register__link-logo'>
        <div className='register__logo buttons-hover-state' />
      </Link>

      <h2 className='register__header'>Добро пожаловать!</h2>

      <AuthForm
        idForm='registerForm'
        classForm='register__form'
        buttonText='Зарегистрироваться'
        onSubmit={handleSubmit}
        isValid={isValid}
        apiMessage={apiMessage}
      >
         <AuthInput
          value={values.registerInputName || ''}
          onChange={handleChange}
          idInput='registerInputName'
          typeInput='text'
          labelText='Имя'
          minLength={2}
          maxLength={30}
          required
          pattern='^[^\s][A-Za-zА-Яа-яЁё - \s]+$'
          error={
            errors.registerInputName === 'Введите данные в правильном формате.'
              ? `Поле должно быть заполнено и может содержать только латиницу,
                кириллицу, пробел или дефис`
              : errors.registerInputName
          }
        />
        <AuthInput
          value={values.registerInputEmail || ''}
          onChange={handleChange}
          idInput='registerInputEmail'
          labelText='E-mail'
          typeInput='email'
          pattern='^[^\s][\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$'
          error={errors.registerInputEmail}
          required
        />
        <AuthInput
          value={values.registerInputPassword || ''}
          onChange={handleChange}
          idInput='registerInputPassword'
          typeInput='password'
          labelText='Пароль'
          minLength={2}
          maxLength={16}
          pattern='^[^\s]*$'
          error={errors.registerInputPassword}
          required
 
        />
      </AuthForm>
      <div className='register__info'>
        <span className='register__info-text'>Уже зарегистрированы?</span>

        <Link to={'/signin'} className='register__info-link links-hover-state'>
          Войти
        </Link>
      </div>

      {isLoading && <Preloader />}
    </main>
  )
}
