const express = require('express');
const router = express.Router();

// Rota principal - GET
router.get('/', (req, res) => {
    res.render('form', { title: 'Cadastro', errors: null });
});

// Rota principal - POST
router.post('/submit', (req, res) => {
    const { nome, email, senha, "confirmar-senha": confirmarSenha, ddd, telefone, ramal, dia, mes, ano, serie, turno, atividade } = req.body;
    const errors = [];

    // Validações no servidor
    if (nome.length < 10) {
        errors.push("O nome precisa ter pelo menos 10 caracteres");
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        errors.push("Email inválido");
    }

    if (senha.length < 8) {
        errors.push("A senha deve ter pelo menos 8 caracteres");
    }

    if (senha !== confirmarSenha) {
        errors.push("As senhas não coincidem");
    }

    const dddsValidos = [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63, 65, 66, 67, 68, 
        69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 88, 86, 89, 91, 93, 94, 95, 96, 97, 
        98, 99
    ];
    if (!dddsValidos.includes(Number(ddd))) {
        errors.push("DDD inválido");
    }

    if (telefone.length < 8 || telefone.length > 9) {
        errors.push("Telefone inválido. Deve ter 8 ou 9 dígitos");
    }

    if (ramal.length < 1) {
        errors.push("Ramal inválido");
    }

    const dataNascimento = new Date(ano, mes - 1, dia);
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    if (idade < 0 || idade > 120 || dataNascimento.getDate() != dia) {
        errors.push("Data de nascimento inválida");
    }

    if (!serie) {
        errors.push("Por favor, selecione uma série");
    }

    if (!turno) {
        errors.push("Por favor, selecione um turno");
    }

    if (!atividade || atividade.length === 0) {
        errors.push("Por favor, selecione pelo menos uma atividade extracurricular");
    }

    if (errors.length > 0) {
        res.render('form', { title: 'Cadastro', errors });
    } else {
        res.send('Formulário submetido com sucesso!');
    }
});

module.exports = router;
