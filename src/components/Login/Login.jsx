import AuthForm from '../AuthForm/AuthForm'
import './Login.css'
import React from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import AuthInput from '../AuthInput/AuthInput'
import { Link } from 'react-router-dom'


export default function Login () {
  const { currentUser, isLoading, isLogged } = React.useContext(CurrentUserContext)

  const [emailInputLoginInfo, setEmailInputLoginInfo] = React.useState('')
  const [passwordInputLoginInfo, setPasswordInputLoginInfo] = React.useState('')

  function handleChangeEmailLoginInfo (event) {
    setEmailInputLoginInfo(event.target.value)
  }

  function handleChangePasswordLoginInfo (event) {
    setPasswordInputLoginInfo(event.target.value)
  }

  return (
    <main className='login'>

      <Link to={'/'}>
          <div className='login__logo buttons-hover-state' />
      </Link>

      <h2 className='login__header'>Рады видеть!</h2>

      <AuthForm
        idForm='loginForm'
        classForm='login__form'
        buttonText='Войти'
        onSubmit={() => {}}
      >
        <AuthInput
          value={emailInputLoginInfo}
          onChange={handleChangeEmailLoginInfo}
          idInput='loginInputEmail'
          labelText='E-mail'
          typeInput='email'
        />
        <AuthInput
          value={passwordInputLoginInfo}
          onChange={handleChangePasswordLoginInfo}
          idInput='loginInputPassword'
          typeInput='password'
          labelText='Пароль'
        />
      </AuthForm>
      <div className='login__info'>
        <span className='login__info-text'>Ещё не зарегистрированы?</span>

        <Link to={'/signup'} className='login__info-link links-hover-state'>
          Регистрация
        </Link>
      </div>
    </main>
  )
}
