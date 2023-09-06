const express = require('express');
const app = express();

app.use(express.json());

// Rotas
const authRoutes = require('./routes/auth');
const plansRoutes = require('./routes/plans');
const newsRoutes = require('./routes/news');
const aboutRoutes = require('./routes/about');

app.use('/auth', authRoutes);
app.use('/plans', plansRoutes);
app.use('/news', newsRoutes);
app.use('/about', aboutRoutes);

// Inicie o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
