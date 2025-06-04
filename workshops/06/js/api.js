'use strict';
export async function getData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw 'error';
    const data = await res.json();
    return { message: 'success', data };
  } catch (error) {
    return { message: 'An error occurred in API call', data: error };
  }
}
