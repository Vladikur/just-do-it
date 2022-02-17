export const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

const checkResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.statusText}`);
}

export const getContent = () => {
    return fetch(`${BASE_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkResponse);
};