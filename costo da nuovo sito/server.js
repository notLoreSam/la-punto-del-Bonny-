const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Endpoint che funge da proxy
app.get('/proxy', async (req, res) => {
  try {
    const url = 'https://stockx.com/it-it/air-jordan-4-retro-fear-2024';
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36'
      }
    });
    
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Errore durante la richiesta al sito remoto');
  }
});

app.listen(PORT, () => console.log(`Server proxy in esecuzione su http://localhost:${PORT}`));
