import './NavTab.css'

export default function NavTab () {
  return (
    <section className='navTab'>
      <ul className='navTab__links'>
        <li className='navTab__links-element'>
          <a href='#aboutProject' className='navTab__link links-hover-state'>
            О проекте
          </a>
        </li>
        <li className='navTab__links-element'>
          <a href='#techs' className='navTab__link links-hover-state'>
            Технологии
          </a>
        </li>
        <li className='navTab__links-element'>
          <a href='#aboutMe' className='navTab__link links-hover-state'>
            Студент
          </a>
        </li>
      </ul>
    </section>
  )
}
