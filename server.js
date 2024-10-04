const express = require('express');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');


const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); // Configurando EJS como motor de visualização
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve arquivos estáticos do diretório 'public'

// Usando o Router nas rotas do formulário
app.use('/', formRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
