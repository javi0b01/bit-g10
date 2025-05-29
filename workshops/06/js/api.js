export async function getPokemons() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    if (!res.ok) throw 'error';
    const data = await res.json();
    return { message: 'success', data };
  } catch (error) {
    return { message: 'An error occurred in API call', data: error };
  }
}
