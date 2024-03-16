import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import { useAdjustSize } from '../../utils/useAdjustSize'
import Navigation from '../Navigation/Navigation'


export default function Header ({ isLogged, mainPage }) {
  const [isOpened, setIsOpened] = React.useState(false)
  const { isScreen839 } = useAdjustSize()
  const location = useLocation()

  function closeBurgerMenu () {
    setIsOpened(false)
  }

  function openBurgerMenu () {
    setIsOpened(true)
  }

  return (
    <>
      <header className={mainPage ? 'header header_grey' : 'header header_no-color'}>
        <Link to={'/'}>
          <div className='header__logo links-hover-state' />
        </Link>

        <div
          className={
            isLogged && isScreen839
              ? 'header__buttons'
              : 'header__buttons header__buttons-end'
          }
        >
          {isLogged && isScreen839 && (
            <div className='header__links-movies'>
              <Link
                to={'/movies'}
                className={`links-hover-state header__link ${
                  location.pathname === '/movies' ? 'header__link-active' : ''
                }`}
              >
                Фильмы
              </Link>
              <Link
                to={'/saved-movies'} className={`links-hover-state header__link ${
                  location.pathname === '/saved-movies'
                    ? 'header__link-active'
                    : ''
                }`}
              >
                Сохранённые фильмы
              </Link>
            </div>
          )}

          {isLogged ? (
            <>
              {isScreen839 ? (
                <Link
                  to={'/profile'}
                  className='buttons-hover-state header__button-profile'
                >
                  <div className='header__button-img' />
                  Аккаунт
                </Link>
              ) : (
                <button
                  className='buttons-hover-state header__burgerMenu'
                  onClick={openBurgerMenu}
                  type='button'
                ></button>
              )}
            </>
          ) : (
            <nav className='header__links-profile'>
              <Link
                to={'/signup'}
                className='buttons-hover-state header__button-signUp'
              >
                Регистрация
              </Link>
              <Link
                to={'/signin'}
                className='buttons-hover-state header__button-signIn'
              >
                Войти
              </Link>
            </nav>
          )}
        </div>
      </header>
      <Navigation isOpened={isOpened} onClose={closeBurgerMenu} />
    </>
  )
}