import './Portfolio.css'


export default function Portfolio () {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      
      <ul className='portfolio__list'>
        <li className='portfolio__list-el'>
          <a
            href='https://ratioglobus.github.io/learn-to-study/'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link links-hover-state'
          >
            <p className='portfolio__link-name'>Статичный сайт</p>
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
        <li className='portfolio__list-el'>
          <a
            href='https://ratioglobus.github.io/russian-travel/'
            className='portfolio__link links-hover-state'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__link-name'>Адаптивный сайт</p>
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
        <li className='portfolio__list-el'>
          <a
            href='https://ratioglobus.github.io/react-mesto-auth'
            className='portfolio__link links-hover-state'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__link-name'>Одностраничное приложение</p>
            <p className='portfolio__link-arrow'>↗</p>
          </a>
        </li>
      </ul>
    </section>
  )
}
