import fetch from 'node-fetch';

// const URL = 'https://localhost7899/api/v1/dogs';
const URL = 'https://thawing-badlands-82054.herokuapp.com/api/v1/dogs/';


export const postDog = (name, type, characteristic) => {
  const data = { name, type, characteristic };
    
  return fetch(`${URL}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());
};

export const getDog = () => {
  return fetch(`${URL}`)
    .then(res => res.json());
};

export const findDogById = (id) => {
  return fetch(`${URL}/${id}`)
    .then(res => res.json());
};

export const deleteDog = (id) => {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }    
  }).then(res => res.json());
};

export const updateDog = (id, name, type, characteristic) => {
  const data = { name, type, characteristic };
  //   console.log(id, name, type, characteristic);

  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());
};
  

