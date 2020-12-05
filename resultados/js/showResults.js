const API_KEY = '6ab7a07c6c27567d0d32f419dbb3d5f1';
const url = new URL('https://api.themoviedb.org/3/search/movie');

window.addEventListener('load', () => {
  // Busca os dados na API
  async function get_data() {
    const params = {
      api_key: API_KEY,
      language: 'pt-BR',
      query: searchInput.value,
    };

    url.search = new URLSearchParams(params).toString();

    const data = await fetch(url);
    const json = await data.json();

    return json;
  }

  // Cria a lista
  const showListView = document.querySelector('#showListResults');
  function createFilmeCard(data) {
    data.results.forEach((filme) => {
      const card = document.createElement('div');
      card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');

      //Tratamento para filmes sem poster. Obs:Podemos adicionar uma imagem em vez de não mostrar.
      if (filme.poster_path !== null) {
        card.innerHTML = createPoster(filme);
        showListView.appendChild(card);
      }
    });
  }

  // Cria o poster
  function createPoster(filme) {
    const { poster_path, title, id } = filme;
    return `
    <a href = '../infoCompleta/index.html?id=${id}'>
    <img src="https://image.tmdb.org/t/p/w185${poster_path}" alt="${title}" />
    </a >
    <h4>
    ${title}
    </h4>
    `;
  }

  //Recebe os valores do input
  const searchForm = document.querySelector('#searchForm');

  //Lida com o evento de pesquisa
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = document.querySelector('#searchInput');

    //Esvazia a lista para não acumular
    showListView.innerHTML = '';

    //Executa a busca na API(assincrona)
    get_data().then((res) => createFilmeCard(res));
  });
});
