'use strict';
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export async function getData(url = API_URL) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw 'error';
    const data = await res.json();
    return { message: 'success', data };
  } catch (error) {
    return { message: 'An error occurred in API call', data: error };
  }
}
