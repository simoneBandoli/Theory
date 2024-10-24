function secondPage() {
  window.location.href = 'secondPage.html'; 
}

function home() {
  window.location.href = 'index.html'; 
}

//carica i dati dal file JSON
function loadJSON() {
  fetch('./games.json') // file JSON
      .then(response => response.json()) // Converte la risposta in JSON
      .then(data => {
          // Richiama la funzione per creare la tabella con i dati
          console.log(data);
      })
      .catch(error => {
          console.error('Errore nel caricamento del file JSON:', error);
      });
}

// Funzione per creare la tabella
function generateTable(data) {
  const tableBody = document.getElementById('gameContainer'); 
  
  // Cicla attraverso i dati JSON e crea le righe
  data.forEach(item => {
      const row = document.createElement('tr'); // Crea una nuova riga
      conasole.log(item);
      tableBody.appendChild(row);
  });
}

// Chiamata alla funzione per caricare i dati JSON all'avvio della pagina
loadJSON();
