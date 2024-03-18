
export const url = "https://norma.nomoreparties.space/api";

// export const getIngredients = () => {
//   return fetch(`${url}/ingredients`)
//     .then(checkResponse)
// } 

// export const createOrder = (ingredients) => {
//   return fetch(`${url}/orders`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "ingredients": ingredients
//     })
//   })
//     .then(checkResponse)
// }

export const getIngredients = () => {
  return request('ingredients', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}


export const createOrder = (ingredients) => {
  return request('orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "ingredients": ingredients
    })
  })
}


const request = (endpoint, options) => {
  return fetch(`${url}/${endpoint}`, options).then(checkResponse);
}

const checkResponse = (res) =>  {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}