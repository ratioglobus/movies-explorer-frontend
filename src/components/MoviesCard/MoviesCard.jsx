import React from 'react'
import './MoviesCard.css'

export default function MoviesCard ({ item, moviesSavedPage }) {
  const [liked, setLiked] = React.useState(false)

  function likeCard () { !liked ? setLiked(true) : setLiked(false) }

  function durationInHours (mins) {
    const hours = Math.trunc(mins / 60)
    const minutes = mins % 60
    return `${hours}ч ${minutes}м`
  }

  return (
    <article className='card'>
      <img
        src={`https://api.nomoreparties.co${item.image.formats.small.url}`}
        alt='постер для фильма'
        className='card__img'
      />
      <div className='card__box'>
        <div className='card__info'>
          <p className='card__name'>{item.nameRU}</p>
          <p className='card__duration'>{durationInHours(item.duration)}</p>
        </div>
        {!moviesSavedPage ? (
          <button
            className={`buttons-hover-state card__button card__likeButton ${
              liked && 'card__likeButton_active'
            }`}
            onClick={likeCard}
          ></button>
        ) : (
          <button className='buttons-hover-state card__button card__deleteButton'></button>
        )}
      </div>
    </article>
  )
}
