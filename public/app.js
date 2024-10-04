document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário caso haja erros
    let isValid = true;
    let errorMessages = [];

    const formData = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        senha: document.getElementById('senha').value,
        confirmarSenha: document.getElementById('confirmar-senha').value,
        ddd: document.getElementById('ddd').value.trim(),
        telefone: document.getElementById('telefone').value.trim(),
        ramal: document.getElementById('ramal').value.trim(),
        dia: document.getElementById('dia').value.trim(),
        mes: document.getElementById('mes').value.trim(),
        ano: document.getElementById('ano').value.trim()
    };

    // Validação do nome
    if (formData.nome.length < 10) {
        isValid = false;
        errorMessages.push("O nome precisa ter pelo menos 10 caracteres.");
    }

    // Validação do email usando regex
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(formData.email)) {
        isValid = false;
        errorMessages.push("Email inválido.");
    }

    // Validação da senha
    if (formData.senha.length < 8) {
        isValid = false;
        errorMessages.push("A senha deve ter pelo menos 8 caracteres.");
    }

    // Validação da confirmação de senha
    if (formData.senha !== formData.confirmarSenha) {
        isValid = false;
        errorMessages.push("As senhas não coincidem.");
    }

    // Validação do DDD (precisa ser um número válido)
    const dddsValidos = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "64", "63", "65", "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85", "86", "87", "88", "89", "91", "92", "93", "94", "95", "96", "97", "98", "99"];
    if (!dddsValidos.includes(formData.ddd)) {
        isValid = false;
        errorMessages.push("DDD inválido.");
    }

    // Validação do telefone (deve ser numérico e com 8 ou 9 dígitos)
    if (!/^\d{8,9}$/.test(formData.telefone)) {
        isValid = false;
        errorMessages.push("Telefone inválido.");
    }

    // Validação do ramal (deve ser numérico)
    if (!/^\d+$/.test(formData.ramal)) {
        isValid = false;
        errorMessages.push("Ramal inválido.");
    }

    // Validação da data de nascimento
    const dia = parseInt(formData.dia);
    const mes = parseInt(formData.mes);
    const ano = parseInt(formData.ano);

    if (isNaN(dia) || dia < 1 || dia > 31 || isNaN(mes) || mes < 1 || mes > 12 || isNaN(ano) || ano < 1900 || ano > 2100) {
        isValid = false;
        errorMessages.push("Data de nascimento inválida.");
    }

    // Exibição das mensagens de erro, se houver
   

// Função para bloquear a entrada de letras e permitir apenas números
function apenasNumeros(event) {
    const valor = event.target.value;
    // Remove qualquer caractere que não seja número
    event.target.value = valor.replace(/\D/g, '');
}

// Aplica a função nos campos de DDD, Telefone e Ramal
document.getElementById('ddd').addEventListener('input', apenasNumeros);
document.getElementById('telefone').addEventListener('input', apenasNumeros);
document.getElementById('ramal').addEventListener('input', apenasNumeros);
if (!isValid) {
    alert(errorMessages.join("\n"));
} else {
    // Se tudo for válido, envia o formulário
    this.submit();
}
});