import './Register.css'
import AuthForm from '../AuthForm/AuthForm'
import React from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import AuthInput from '../AuthInput/AuthInput'
import { Link } from 'react-router-dom'


export default function Register () {
  const { currentUser, isLoading, isLogged } = React.useContext(CurrentUserContext)
    
  const [nameInputRegisterInfo, setNameInputRegisterInfo] = React.useState('')
  const [emailInputRegisterInfo, setEmailInputRegisterInfo] = React.useState('')
  const [passwordInputRegisterInfo, setPasswordInputRegisterInfo] = React.useState('')

  function handleChangeNameRegisterInfo (event) {
    setNameInputRegisterInfo(event.target.value)
  }

  function handleChangePasswordRegisterInfo (event) {
    setPasswordInputRegisterInfo(event.target.value)
  }

  function handleChangeEmailRegisterInfo (event) {
    setEmailInputRegisterInfo(event.target.value)
  }

  return (
    <main className='register'>
      <Link to={'/'}>
        <div className='register__logo buttons-hover-state' />
      </Link>

      <h2 className='register__header'>Добро пожаловать!</h2>

      <AuthForm
        idForm='registerForm'
        classForm='register__form'
        buttonText='Зарегистрироваться'
        onSubmit={() => {}}
      >
         <AuthInput
          value={nameInputRegisterInfo}
          onChange={handleChangeNameRegisterInfo}
          idInput='registerInputName'
          typeInput='text'
          labelText='Имя'
          minLength={2}
          maxLength={30}
          required
        />
        <AuthInput
          value={emailInputRegisterInfo}
          onChange={handleChangeEmailRegisterInfo}
          idInput='registerInputEmail'
          labelText='E-mail'
          typeInput='email'
          required
        />
        <AuthInput
          value={passwordInputRegisterInfo}
          onChange={handleChangePasswordRegisterInfo}
          idInput='registerInputPassword'
          typeInput='password'
          labelText='Пароль'
          minLength={4}
          maxLength={16}
          required
 
        />
      </AuthForm>
      <div className='register__info'>
        <span className='register__info-text'>Уже зарегистрированы?</span>

        <Link to={'/signin'} className='register__info-link links-hover-state'>
          Войти
        </Link>
      </div>
    </main>
  )
}
