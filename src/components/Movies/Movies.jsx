import './Movies.css'
import React from 'react'
import Preloader from '../Preloader/Preloader'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'

import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Movies () {
  const { currentUser, isLoading, isLogged } = React.useContext(CurrentUserContext)

  return (
    <>
      <Header isLogged={isLogged} mainPage={false} />
      <main>
        <SearchForm />
        <MoviesCardList moviesSavedPage={false} />
      </main>
      <Footer />
      {isLoading && <Preloader />}
    </>
  )
}
