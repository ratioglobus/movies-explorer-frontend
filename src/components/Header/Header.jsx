import './Header.css'
import { Link } from 'react-router-dom'

export default function Header ({ isLogged, mainPage }) {
  return (
    <header className={mainPage ? 'header header_grey' : 'header header_no-color'}>

      <Link to={'/'}>
        <div className='header__logo links-hover-state' />
      </Link>
      <div className={ isLogged ? 'header__buttons' : 'header__buttons header__buttons-flexend' }>
        {isLogged && (
          <div className='header__links-movies'>
            <Link to={'/'} className='links-hover-state header__link'>
              Фильмы
            </Link>
            <Link to={'/'} className='links-hover-state header__link'>
              Сохранённые фильмы
            </Link>
          </div>
        )}
        {isLogged ? (
          <Link to={'/'} className='buttons-hover-state header__button-profile'>
            <div className='header__button-img' />
            Аккаунт
          </Link>
        ) : (
          <div className='header__links-profile'>
            <Link to={'/'} className='buttons-hover-state header__button-signUp'>
              Регистрация
            </Link>
            <Link to={'/'} className='buttons-hover-state header__button-signIn'>
              Войти
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
