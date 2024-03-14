import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.jsx'
import { testCardsList } from '../../constants/testCardsList.js'
import { useAdjustSize } from '../../utils/useAdjustSize'


export default function MoviesCardList ({ moviesSavedPage }) {
  const { isScreen839, isScreen989 } = useAdjustSize()

  return (
    <section className={`cardList ${moviesSavedPage ? 'cardList_saved' : ''}`}>
      <h1 hidden={true}>Список фильмов</h1>
      
      <ul
        className={`cardList__items ${
          (testCardsList.length === 3 && testCardsList.length && isScreen989) ||
          (testCardsList.length === 2 && testCardsList.length && isScreen839) ||
          (testCardsList.length === 1 && testCardsList.length)
            ? 'cardList__items_left'
            : ''
        }`}
      >
        {testCardsList.length ? (
          <>
          {testCardsList.map(item => (
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
