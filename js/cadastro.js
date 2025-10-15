// cadastro.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-voluntario');
  const mensagem = document.getElementById('mensagem-cadastro');

  // Função para validar CPF (apenas formato básico: 000.000.000-00)
  function validarCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
  }

  // Função para validar email (formato simples)
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Função para mostrar mensagem de sucesso
  function mostrarMensagem(msg) {
    mensagem.textContent = msg;
    mensagem.style.display = 'block';
    setTimeout(() => {
      mensagem.style.display = 'none';
    }, 4000); // desaparece após 4 segundos
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // evita envio real

    // Captura valores
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const telefone = form.telefone.value.trim();
    const cep = form.cep.value.trim();
    const habilidades = form.habilidades.value.trim();
    const experiencia = form.experiencia.value.trim();
    const diasSelecionados = form.querySelectorAll('input[name="dias"]:checked');

    // Validação simples
    if (!nome || !email || !cpf || !telefone || !cep || !habilidades || !experiencia) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!validarEmail(email)) {
      alert('E-mail inválido. Verifique o formato.');
      return;
    }

    if (!validarCPF(cpf)) {
      alert('CPF inválido. Use o formato 000.000.000-00');
      return;
    }

    if (diasSelecionados.length === 0) {
      alert('Selecione pelo menos um dia de disponibilidade.');
      return;
    }

    // Se tudo ok, mostra mensagem de sucesso
    mostrarMensagem('Cadastro enviado com sucesso! Obrigado por se voluntariar.');

    // Opcional: limpar o formulário
    form.reset();
  });

  // Aplicar máscaras se mascaras.js estiver carregado
  if (typeof aplicarMascaras === 'function') {
    aplicarMascaras(); // função definida em mascaras.js
  }
});
