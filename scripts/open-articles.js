let articles = document.getElementsByClassName("article-container");
let competition = document.getElementsByClassName("page-section")[0];

function showCompetitions() {
  competition.style.display = "block";
  for (let article of articles) {
    article.style.display = "none";
  }
}

function showArticle(number) {
  competition.style.display = "none";
  let article = document.getElementById(number.toString());
  article.style.display = "block";
  window.scrollBy(0, -10000);
}