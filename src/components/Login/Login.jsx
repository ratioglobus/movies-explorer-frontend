import AuthForm from '../AuthForm/AuthForm'
import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import AuthInput from '../AuthInput/AuthInput'
import Preloader from '../Preloader/Preloader'


export default function Login ({ onLogin }) {
  const { isLoading, setApiMessage, apiMessage } = React.useContext(CurrentUserContext)
  const { values, errors, isValid, handleChange } = useFormWithValidation()

  function handleSubmit (event) {
    event.preventDefault()

    onLogin({
      email: values.loginInputEmail,
      password: values.loginInputPassword
    })
  }

  React.useEffect(() => {
    setApiMessage('')
  }, [])

  return (
    <main className='login'>

      <Link to={'/'} className='login__link-logo'>
      <div className='login__logo buttons-hover-state' />
      </Link>

      <h2 className='login__header'>Рады видеть!</h2>

      <AuthForm
        idForm='loginForm'
        classForm='login__form'
        buttonText='Войти'
        onSubmit={handleSubmit}
        isValid={isValid}
        apiMessage={apiMessage}
      >
        <AuthInput
          value={values.loginInputEmail || ''}
          onChange={handleChange}
          idInput='loginInputEmail'
          labelText='E-mail'
          typeInput='email'
          pattern='^[^\s]*$'
          error={errors.loginInputEmail}
          required
        />
        <AuthInput
          value={values.loginInputPassword || ''}
          onChange={handleChange}
          idInput='loginInputPassword'
          typeInput='password'
          labelText='Пароль'
          required
          minLength={2}
          maxLength={16}
          error={errors.loginInputPassword}
        />
      </AuthForm>
      <div className='login__info'>
        <span className='login__info-text'>Ещё не зарегистрированы?</span>

        <Link to={'/signup'} className='login__info-link links-hover-state'>
          Регистрация
        </Link>
      </div>

      {isLoading && <Preloader />}
    </main>
  )
}
