class Auth {
  constructor ({ url, headers }) {
    this._url = url
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

  getInfo (token) {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  authorize (email, password) {
    return this._request(`${this._url}/signin`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ email: email, password: password })
    })
  }

  register (email, password, name) {
    return this._request(`${this._url}/signup`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ email: email, password: password, name: name })
    })
  }  
}

const authApi = new Auth({
  url: 'https://api.imovie.nomoredomainswork.ru',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default authApi
