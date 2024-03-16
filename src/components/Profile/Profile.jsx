import './Profile.css'

import React from 'react'
import Header from '../Header/Header.jsx'
import { useNavigate } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


export default function Profile () {
  const { currentUser, isLoading, isLogged } = React.useContext(CurrentUserContext)

  const [userName, setUserName] = React.useState(currentUser.name)
  const [userEmail, setUserEmail] = React.useState(currentUser.email)
  const [editInfo, setEditInfo] = React.useState(false)

  const navigate = useNavigate()

  function editInfoHandler (event) {
    event.preventDefault()
    setEditInfo(true)
  }

  function handleChangeUserName (event) {
    setUserName(event.target.value)
  }

  function handleChangeUserEmail (event) {
    setUserEmail(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    setEditInfo(false)
  }

  function handlerClickExitFromAccount (event) {
    event.preventDefault()
    navigate('/')
  }

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
            id='profileForm'
            className='profile__form'
            method='POST'
            name='profileForm'
            onSubmit={handleSubmit}
            placeholder='Форма профиля'
          >
            <label className='profile__box'>
              <span className='profile__input-text'>Имя</span>
              <input
                type='text'
                id='userNameInput'
                className='profile__input'
                autoComplete='off'
                value={userName}
                onChange={handleChangeUserName}
                disabled={!editInfo}
                placeholder=' '
                minLength={2}
                maxLength={30}
                required
              />
            </label>
            <label className='profile__box'>
              <span className='profile__input-text'>E-mail</span>
              <input
                type='text'
                id='userEmailInput'
                className='profile__input'
                autoComplete='off'
                value={userEmail}
                onChange={handleChangeUserEmail}
                disabled={!editInfo}
                placeholder=' '
                required
              />
            </label>

            <button
              className='profile__btn-save buttons-hover-state'
              hidden={!editInfo}
              type='submit'
              form='profileForm'
            >
              Сохранить
            </button>
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
      </main>
    </>
  )
}
