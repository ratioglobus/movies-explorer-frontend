import './Profile.css'
import React from 'react'
import Header from '../Header/Header.jsx'
import { useNavigate } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation.js'
import Preloader from '../Preloader/Preloader.jsx'


export default function Profile ({ onSignOut, onUpdateUserInfo }) {
  const { currentUser, isLoading, isLogged, apiMessage, setApiMessage } = React.useContext(CurrentUserContext)
  const { values, errors, isValid, handleChange, setValues, setIsValid } = useFormWithValidation()
  const [editInfo, setEditInfo] = React.useState(false)

  const navigate = useNavigate()

  function editInfoHandler (event) {
    event.preventDefault()
    setEditInfo(true)
    setApiMessage('')
  }

  function handleSubmit (event) {
    event.preventDefault()
    onUpdateUserInfo({
      nameUser: values.userNameInput,
      emailUser: values.userEmailInput
    })
    setEditInfo(false)
  }

  function handlerClickExitFromAccount (event) {
    event.preventDefault()
    navigate('/')
    onSignOut()
  }

  React.useEffect(() => {
    setApiMessage('')
  }, [])

  React.useEffect(() => {
    if (currentUser) {
      setValues({
        userNameInput: currentUser.name,
        userEmailInput: currentUser.email
      })
    }
  }, [setValues, currentUser])

  React.useEffect(() => {
    if (
      currentUser.name === values.userNameInput &&
      currentUser.email === values.userEmailInput
    ) {
      setIsValid(false)
    }
  }, [setIsValid, values, currentUser])

  React.useEffect(() => {
    if (editInfo) {
      const userNameInput = document.querySelector('#userNameInput')
      userNameInput.focus()
    }
  }, [editInfo])

  return (
    <>
      <Header isLogged={isLogged} mainPage={false} />
      <main className='main'>
        <section className='profile'>
          <h3 className='profile__title'>Привет, {currentUser.name}!</h3>
          <form
            action='#'
            method='POST'
            id='profileForm'
            className='profile__form'
            name='profileForm'
            onSubmit={handleSubmit}
            noValidate
          >
            <label className='profile__box'>
              <span className='profile__input-name'>Имя</span>
              <input
                type='text'
                id='userNameInput'
                className='profile__input'
                autoComplete='off'
                value={values.userNameInput || ''}
                onChange={handleChange}
                disabled={!editInfo}
                pattern='^[^\s][A-Za-zА-Яа-яЁё - \s]+$'
                placeholder=' '
                minLength={2}
                maxLength={30}
                required
              />

              <span className='profile__input-error'>
                {errors.userNameInput === 'Введите данные в правильном формате.'
                  ? `Поле должно быть заполнено и может содержать только латиницу,
                кириллицу, пробел или дефис`
                  : errors.userNameInput}
              </span>

            </label>
            <label className='profile__box'>
              <span className='profile__input-name'>E-mail</span>
              <input
                type='email'
                id='userEmailInput'
                className='profile__input'
                autoComplete='off'
                value={values.userEmailInput || ''}
                pattern='^[^\s][\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$'
                onChange={handleChange}
                disabled={!editInfo}
                placeholder=' '
                required
              />

              <span className='profile__input-error'>
                {errors.userEmailInput}
              </span>
            </label>

            <div className='profile__boxBtnSave'>
            <span
                className={`profile__apiMessage ${
                  apiMessage === 'Вы успешно изменили данные аккаунта'
                    ? 'profile__apiMessage_green'
                    : ''
                } `}
              >
                {apiMessage}
              </span>
              <button
                className={`profile__btn-save ${
                  isValid ? 'buttons-hover-state' : 'profile__btn-save-disabled'
                }`}
                hidden={!editInfo}
                type='submit'
                form='profileForm'
                disabled={!isValid}
              >
                Сохранить
              </button>
            </div>
          </form>
          <div className='profile__panel'>
            <button
              className='profile__panel-btn profile__panel-btnEdit buttons-hover-state'
              onClick={editInfoHandler}
              hidden={editInfo}
              type='button'
            >
              Редактировать
            </button>
            <button
              className='profile__panel-btn profile__panel-btnExit buttons-hover-state'
              hidden={editInfo}
              onClick={handlerClickExitFromAccount}
              type='button'
            >
              Выйти из аккаунта
            </button>
          </div>
        </section>

        {isLoading && <Preloader />}
      </main>
    </>
  )
}
