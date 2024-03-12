import './AboutMe.css'

export default function AboutMe () {
  return (
    <section className='aboutMe' id='aboutMe'>
      
      <h2 className='main__subtitle'>Студент</h2>

      <div className='aboutMe__cards'>
        <img src='https://aigis.club/uploads/posts/2022-05/1653296256_29-adonius-club-p-sindzi-na-stule-oboi-krasivo-48.png' alt='Изображение студента' className='aboutMe__photo' />
        <div className='aboutMe__texts'>
          <h3 className='aboutMe__name'>Синдзи Икари</h3>
          <p className='aboutMe__myRole'>Фронтенд-разработчик, 22 года</p>
          <p className='aboutMe__info'>
            Я живу в Токио-3, учился управлению Евангелионами. 
            Меня также называют «Третье Дитя» и я единственный пилот Евангелиона-01. 
            Проживаю вместе со своим опекуном Мисато Кацураги, в 17 доме сети бизнес-класс отелей Comfort Hotel.
            Недавно начал кодить. С 2015 года работал в компании Nerv. После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href='https://github.com/ratioglobus' className='aboutMe__link links-hover-state' rel='noopener noreferrer'>Github </a>
        </div>
      </div>
    </section>
  )
}
