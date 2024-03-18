class MainApi {
  constructor ({ url, headers }) {
    this._url = url
    this._userUrl = `${this._url}/users/me`
    this._moviesUrl = `${this._url}/movies`
    this._headers = headers
  }

  _request (url, options) {
    return fetch(url, options).then(this._getResponse)
  }

  _getResponse (res) {
    if (res.ok) {
      return res.json()
    }

    return res.json().then(err => Promise.reject(err))
  }

  setAuthorizationHeader (jwt) {
    this._headers = {
      ...this._headers,
      authorization: `Bearer ${jwt}`
    }
  }

  getCurrentUser () {
    return this._request(this._userUrl, {
      headers: this._headers,
      method: 'GET'
    })
  }

  changeUserInfo ({ emailUser, nameUser }) {
    return this._request(this._userUrl, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        email: emailUser,
        name: nameUser
      })
    })
  }

  deleteMovie (id) {
    return this._request(`${this._moviesUrl}/${id}`, {
      headers: this._headers,
      method: 'DELETE'
    })
  }

  saveNewMovie (movie) {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      id,
      nameRU,
      nameEN
    } = movie
    return this._request(this._moviesUrl, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.url}`,
        movieId: id,
        nameRU,
        nameEN
      })
    })
  }

  getSavedMovies () {
    this.setAuthorizationHeader(localStorage.getItem('jwt'))
    
    return this._request(this._moviesUrl, {
      headers: this._headers,
      method: 'GET'
    })
  }
}

const mainApi = new MainApi({
  url: 'https://api.imovie.nomoredomainswork.ru',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default mainApi
