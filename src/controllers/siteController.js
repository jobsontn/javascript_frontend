function index(req, res) {
  const head = {
    title: 'Moura Tech',
    description: 'Exemplo de uso de bibliotecas e frameworks javascript.',
    keywords: 'jQuery, pagePiling.js',
  };
  res.status(200).render('index', { head });
}

module.exports = { index };
