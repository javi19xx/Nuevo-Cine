const API_KEY = 'ea959dc0eb55fb309c72805604d83f59';

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error al buscar películas:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error al buscar películas:', error);
    return [];
  }
};
