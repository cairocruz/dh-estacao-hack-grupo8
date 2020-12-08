
window.addEventListener('load', () => {

  // Recebe o valor do filmeID
  let filmeId = (new URLSearchParams(window.location.search)).get('id')
  
  if(filmeId == null){
    bannerNenhumaBusca()
  } else {
    sessionStorage.setItem('filmeId', filmeId)
    buscaInfoCompleta(filmeId)
  }

  // Busca os dados na API
  async function buscaInfoCompleta(id) {
    const url = new URL(id, 'https://api.themoviedb.org/3/movie/');
    const params = {
      api_key: API_KEY,
      language: 'pt-BR'
    };
    url.search = new URLSearchParams(params).toString();
    const data = await fetch(url);
    const resultadosBusca = await data.json()
    criarInfoCompletaCard(resultadosBusca)
  }

  // Cria card com dados do filme
  function criarInfoCompletaCard(filme) {
    document.querySelector('#filmeTitulo').innerHTML = createTitulo(filme)
    document.querySelector('#filmeSinopse').innerHTML = (createSinopse(filme.overview))

    //Tratamento para filmes sem poster. Obs:Podemos adicionar uma imagem em vez de não mostrar.
    if (filme.poster_path !== null) {
      document.querySelector('#filmePoster').innerHTML = (createPoster(filme))
    }
  }

  function createTitulo(filme) {
    const release_date = new Date(filme.release_date)
    return (`${filme.title} (${release_date.getFullYear()})`)
  }


  // Cria o poster
  function createPoster(filme) {
    const { poster_path, title } = filme;
    return `
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" class="img-thumbnail" />
    `;
  }

  function createSinopse(sinopse) {
    return (`<p> ${sinopse} </p>`)
  }

  function bannerNenhumaBusca() {
    const banner = document.createElement('h4')
    banner.classList.add('col', 'text-center')
    banner.innerText = 'Nenhuma busca realizada'
    document.querySelector('#infoCompleta').innerHTML = ''
    document.querySelector('#infoCompleta').appendChild(banner)
  }

})
