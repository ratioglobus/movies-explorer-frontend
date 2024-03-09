import './Main.css'
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab'
import AboutProject from '../AboutProject/AboutProject'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Techs from '../Techs/Techs'
import Footer from '../Footer/Footer'

export default function Main ({ isLogged }) {
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
    </>
  )
}
