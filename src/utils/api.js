
export const url = "https://norma.nomoreparties.space/api";

export const getIngredients = () => {
  return fetch(`${url}/ingredients`)
    .then(checkResponse)
} 

export const createOrder = (ingredients) => {
  return fetch(`${url}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "ingredients": ["643d69a5c3f7b9001cfa093c","643d69a5c3f7b9001cfa0941"]
    })
  })
    .then(checkResponse)
}


const checkResponse = (res) =>  {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}