import './Main.css'
import React from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Techs from '../Techs/Techs'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'


export default function Main () {

  const { currentUser, isLoading, isLogged } =
  React.useContext(CurrentUserContext)

  return (
    <>
      <Header isLogged={isLogged} mainPage={true} />

      <main className='main'>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>

      <Footer />
      {isLoading && <Preloader />}
    </>
  )
}
