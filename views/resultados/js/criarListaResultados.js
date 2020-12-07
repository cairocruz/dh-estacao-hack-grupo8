
window.addEventListener('load', () => {

  const showListView = document.querySelector('#showListResults');

  // Cria a lista
  function createFilmeCard(filmes) {
    filmes.results.forEach((filme) => {
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

  function bannerNenhumaBusca() {
    const banner = document.createElement('h4')
    banner.classList.add('col', 'text-center')
    banner.innerText = 'Nenhuma busca realizada'
    showListView.appendChild(banner)
  }

  function verificaSessionStorage() {
    if(sessionStorage.getItem('resultadosBusca') !== null){
      const filmes = JSON.parse(sessionStorage.getItem('resultadosBusca'))
      createFilmeCard(filmes)
    } else {
      bannerNenhumaBusca()
    }
  }
  verificaSessionStorage()
});
