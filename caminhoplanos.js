const express = require('express');
const app = express();
const port = 3000;

// Rota para a página de planos
app.get('/planos', (req, res) => {
  res.send(`
    <h1>Planos</h1>
    <ul>
      <li><a href="/cadastro?plano=1">Plano 1</a></li>
      <li><a href="/cadastro?plano=2">Plano 2</a></li>
      <li><a href="/cadastro?plano=3">Plano 3</a></li>
    </ul>
  `);
});

// Rota para a página de cadastro
app.get('/cadastro', (req, res) => {
  const plano = req.query.plano || 'Desconhecido';
  res.send(`
    <h1>Cadastro para o Plano ${plano}</h1>
    <form action="/salvar" method="post">
      Nome: <input type="text" name="nome"><br>
      Email: <input type="email" name="email"><br>
      <button type="submit">Cadastrar</button>
    </form>
  `);
});

// Rota para salvar os dados do cadastro
app.post('/salvar', express.urlencoded({ extended: true }), (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  res.send(`
    <h1>Dados cadastrados:</h1>
    <p>Nome: ${nome}</p>
    <p>Email: ${email}</p>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
