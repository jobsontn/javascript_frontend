// Importação CommonJS modules
const express = require('express');
const site = require('../controllers/siteController');

// Criar router express
const router = express.Router();

// Rotas (End Points)
router.get('/', (req, res) => {
  site.index(req, res);
});

// Exportar router express
module.exports = router;
