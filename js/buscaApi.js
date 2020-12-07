const API_KEY = 'c2370d781f6cf44c41a63364c9a3bf51';

window.addEventListener('load', () => {

  //Recebe os valores do input
  const searchForm = document.querySelector('#searchForm');

  //Lida com o evento de pesquisa
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = document.querySelector('#searchInput');

    //Executa a busca na API(assincrona)
    buscaMoviesDBApi(searchInput.value)
    .then(() => {
      location.href = '../resultados/index.html'
    })
  });

  // Busca os dados na API
  async function buscaMoviesDBApi(value) {
    const url = new URL('https://api.themoviedb.org/3/search/movie');
    const params = {
      api_key: API_KEY,
      language: 'pt-BR',
      query: value,
    };
    url.search = new URLSearchParams(params).toString();
    const data = await fetch(url);
    const resultadosBusca = await data.json()

    sessionStorage.setItem('resultadosBusca', JSON.stringify(resultadosBusca))
  }
});
