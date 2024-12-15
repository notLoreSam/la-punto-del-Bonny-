const proxyUrl = 'http://localhost:3000/proxy'; // URL del server proxy
const selector = 'h2.chakra-heading.css-vacpx7'; // Selettore dell'elemento da prendere

async function getContent() {
  try {
    const response = await fetch(proxyUrl);
    const html = await response.text();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const extractedContent = doc.querySelector(selector);
    
    if (extractedContent) {
      document.getElementById('contenuto').innerHTML = `<strong>Contenuto:</strong> ${extractedContent.textContent}`;
    } else {
      document.getElementById('contenuto').innerHTML = 'Contenuto non trovato';
    }
  } catch (error) {
    console.error('Errore durante la richiesta:', error);
    document.getElementById('contenuto').innerHTML = 'Errore nel caricamento del contenuto';
  }
}

// Avvia il recupero del contenuto al caricamento della pagina
window.addEventListener('DOMContentLoaded', getContent);
