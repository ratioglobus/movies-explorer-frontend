import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.jsx'
import { testArrCards } from '../../vendor/testArrCards.js'
import { useAdjustSize } from '../../utils/useAdjustSize'


export default function MoviesCardList ({ moviesSavedPage }) {
  const { isScreen839, isScreen989 } = useAdjustSize()

  return (
    <section className={`cardList ${moviesSavedPage ? 'cardList_saved' : ''}`}>
      <h1 hidden={true}>Список фильмов</h1>
      
      <ul
        className={`cardList__items ${
          (testArrCards.length === 3 && testArrCards.length && isScreen989) ||
          (testArrCards.length === 2 && testArrCards.length && isScreen839) ||
          (testArrCards.length === 1 && testArrCards.length)
            ? 'cardList__items_left'
            : ''
        }`}
      >
        {testArrCards.length ? (
           <>
           {testArrCards.map(item => (
             <li>
               <MoviesCard
                 item={item}
                 key={item.id}
                 moviesSavedPage={moviesSavedPage}
               />
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
