const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Rota para obter a lista de tarefas
app.get('/tasks', (req, res) => {
    const tasks = [
        { id: 1, title: 'Fazer compras' },
        { id: 2, title: 'Estudar JavaScript' }
    ];
    res.json(tasks);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
