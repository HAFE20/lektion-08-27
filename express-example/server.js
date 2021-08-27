const express = require('express');
const app = express();
const PORT = 8000;

//Används för att skicka statiska filer (HTML, CSS, JS, bilder etc)
//Express kommer automatiskt att skicka tillbaka en fil om url:en stämmer
//Ex. /style.css
//Detta kan vi använda istället för att skicka filer som vi gjort nedan
app.use(express.static('frontend'));

//get är vald HTTP - metod (går också att skriva post, put och delete)
//Strängen är url:en
//Det sista är funktionen som tar två parametrar och där svaret till klienten skickas
// app.get('/', (request, response) => {
//   console.log(`Request url: ${request.url}`);
//   console.log(`Request method: ${request.method}`);

//   //__dirname är en inbyggd variabel i Node som specififerar vilken mapp vi står i
//   //sendFile() skickar tillbaka en fil till klienten
//   response.sendFile(__dirname + '/frontend/index.html');
// });

// app.get('/style.css', (request, response) => {
//   response.sendFile(__dirname + '/frontend/style.css');
// });

// app.get('/index.js', (request, response) => {
//   response.sendFile(__dirname + '/frontend/index.js');
// });

app.post('/test', (request, response) => {
  response.send('On test page');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
