window.onload = createFilmeCard

const filmesExample = [
  {
    poster: '../infoCompleta/index.html',
    title: 'The Hill (2020?)'
  },
  {
    poster: '../infoCompleta/index.html',
    title: 'The Hill (2020?)'
  },
  {
    poster: '../infoCompleta/index.html',
    title: 'The Hill (2020?)'
  },
  {
    poster: '../infoCompleta/index.html',
    title: 'The Hill (2020?)'
  },
  {
    poster: '../infoCompleta/index.html',
    title: 'The Hill (2020?)'
  }
]

function createFilmeCard() {
  const showListView = document.querySelector('#showListResults')
  filmesExample.forEach((filme, i) => {
    const card = document.createElement('div')
    card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4')
    card.innerHTML = createPoster(i)
    showListView.appendChild(card)
  });
}
 
function createPoster(i) {
  return `
    <a href = ${filmesExample[i].poster}>
      <img src="./img/poster-the-hill.jpg" width="200" alt="" />
    </a >
    <h4>
      ${filmesExample[i].title}
    </h4>
  `
}