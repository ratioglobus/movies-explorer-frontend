import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.jsx'
import { testFilms } from '../../constants/testFilms.js'
import { useAdjustSize } from '../../utils/useAdjustSize'


export default function MoviesCardList ({ moviesSavedPage }) {
  const { isScreen839, isScreen989 } = useAdjustSize()

  return (
    <section className={`cardList ${moviesSavedPage ? 'cardList_saved' : ''}`}>
      <h1 hidden={true}>Список фильмов</h1>
      
      <ul
        className={`cardList__items ${
          (testFilms.length === 3 && testFilms.length && isScreen989) ||
          (testFilms.length === 2 && testFilms.length && isScreen839) ||
          (testFilms.length === 1 && testFilms.length)
            ? 'cardList__items_left'
            : ''
        }`}
      >
        {testFilms.length ? (
          <>
          {testFilms.map(item => (
            <li key={item.id}> {}
              <MoviesCard item={item} moviesSavedPage={moviesSavedPage}/>
            </li>
          ))}
          </>
        ) : ( <p className='cardList__error'>Фильмов не найдено</p>
        )}
      </ul>
      <button
        type='button'
        className={`cardList__buttonMore buttons-hover-state ${
          moviesSavedPage ? 'cardList__buttonMore-none' : ''
        }`}>
        Ещё
      </button>
    </section>
  )
}
