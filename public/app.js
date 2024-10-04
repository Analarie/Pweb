document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    let isValid = true; // Para acompanhar se o formulário é válido
    let errorMessages = []; // Para armazenar mensagens de erro

    // Validação do nome
    const nome = document.getElementById('nome').value;
    if (nome.length < 10) {
        isValid = false;
        errorMessages.push("O nome precisa ter pelo menos 10 caracteres");
    }

    // Validação do email
    const email = document.getElementById('email').value;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        errorMessages.push("Email inválido");
    }

    // Validação da senha
    const senha = document.getElementById('senha').value;
    if (senha.length < 8) {
        isValid = false;
        errorMessages.push("A senha deve ter pelo menos 8 caracteres");
    }

    // Validação de confirmação de senha
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    if (senha !== confirmarSenha) {
        isValid = false;
        errorMessages.push("As senhas não coincidem");
    }

    // Validação do DDD
    const ddd = document.getElementById('ddd').value;
    const dddsValidos = [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63, 65, 66, 67, 68, 
        69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 88, 86, 89, 91, 93, 94, 95, 96, 97, 
        98, 99
    ];
    if (!dddsValidos.includes(Number(ddd))) {
        isValid = false;
        errorMessages.push("DDD inválido");
    }

    // Validação do telefone
    const telefone = document.getElementById('telefone').value;
    if (telefone.length < 8 || telefone.length > 9) {
        isValid = false;
        errorMessages.push("Telefone inválido. Deve ter 8 ou 9 dígitos");
    }

    // Validação da data de nascimento
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const ano = document.getElementById('ano').value;
    const dataNascimento = new Date(ano, mes - 1, dia);
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    if (idade < 0 || idade > 120 || dataNascimento.getDate() != dia) {
        isValid = false;
        errorMessages.push("Data de nascimento inválida");
    }

    // Exibe mensagens de erro ou envia o formulário
    if (!isValid) {
        alert(errorMessages.join("\n")); // Exibe todas as mensagens de erro
    } else {
        alert("Formulário enviado com sucesso!"); // Adicione este alert para teste
        this.submit(); // Envia o formulário
    }
});
