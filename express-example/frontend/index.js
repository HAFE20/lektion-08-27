function showInsult(insult) {
  const insultElem = document.querySelector('#insult');
  const playElem = document.querySelector('#play');

  insultElem.innerHTML = insult.insult;
  playElem.innerHTML = insult.play;
}

async function getInsult() {
  const response = await fetch('http://localhost:8000/api/insult');
  const data = await response.json();

  showInsult(data);
}

getInsult();