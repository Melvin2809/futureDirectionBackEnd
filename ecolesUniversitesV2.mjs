import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

async function fetchData() {
  const response = await fetch("C:\Users\guirc\Desktop\siteFinal\futureDirection2\test\futureDirectionBackEnd\db.json");
  const data = await response.json();
  return data;
}

// Route pour gérer la demande GET à l'URL '/data'
app.get('/data', async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data); // Renvoie les données JSON comme réponse
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    res.status(500).json({ message: "Erreur lors de la récupération des données" });
  }
});

app.listen(port, () => {
  console.log(`Backend en écoute sur le port ${port}`);
});