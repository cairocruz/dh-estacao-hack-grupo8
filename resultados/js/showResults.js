window.onload = createFilmeCard

function createFilmeCard() {
  const showListView = document.querySelector('#showListResults')
  const card = document.createElement('div')
  card.innerHTML = createPoster()
  showListView.appendChild(card)
}
 
function createPoster() {
  return `
    <a href = "../infoCompleta/index.html">
      <img src="./img/poster-the-hill.jpg" width="200" alt="" />
    </a >
    <h4>
      The Hill (2020?)
    </h4>
  `
}