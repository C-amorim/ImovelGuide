
// Menu Hamburguer
const hamburguer = document.getElementById("hamburguer");
const nav = document.getElementById("nav");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});



// Mostrar telefone funcionalidade do quadro 1
const botaoTelefone = document.getElementById("verTelefoneBtn");
const telefone = document.getElementById("telefone");

let telefoneVisivel = false;

botaoTelefone.addEventListener("click", () => {
  telefoneVisivel = !telefoneVisivel;

  if (telefoneVisivel) {
    telefone.classList.add("telefone-visivel");
    botaoTelefone.textContent = "Ocultar Telefone";
  } else {
    telefone.classList.remove("telefone-visivel");
    botaoTelefone.textContent = "Ver Telefone";
  }
});

// Máscara CPF em tempo real do quadro 2
document.getElementById('cpf').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');

  if (value.length > 11) value = value.slice(0, 11);

  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  e.target.value = value;
});

// Máscara Telefone em tempo real do quadro 2
document.getElementById('telefone1').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, ''); // remove tudo que não é número

  if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

  if (value.length <= 10) {
    // Fixo ou celular antigo (sem 9 na frente)
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, function (_, ddd, parte1, parte2) {
      return `(${ddd}) ${parte1}${parte2 ? '-' + parte2 : ''}`;
    });
  } else {
    // Celular com 9 dígitos
    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, function (_, ddd, parte1, parte2) {
      return `(${ddd}) ${parte1}${parte2 ? '-' + parte2 : ''}`;
    });
  }
  e.target.value = value;
});

// Alerta de envio do quadro 2

document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();

  const cpf = document.getElementById('cpf').value;
  const telefone = document.getElementById('telefone1').value;
  const mensagem = document.getElementById('mensagem').value;

  alert(`Mensagem enviada!\nCPF: ${cpf}\nTelefone: ${telefone}\nAssunto: ${mensagem}`);
});

// Regra de 3 do Quadro 3 kkk

document.getElementById('formRegraDeTres').addEventListener('submit', function (e) {
  e.preventDefault();

  const valor1 = parseFloat(document.getElementById('valor1').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);
  const valor3 = parseFloat(document.getElementById('valor3').value);
  const resultadoInput = document.getElementById('resultado');

  if (valor1 !== 0) {
    const resultado = (valor2 * valor3) / valor1;
    resultadoInput.value = resultado.toFixed(2);
  } else {
    resultadoInput.value = 'Erro';
    alert("Valor não atribuido");
  }
});

// Abrir a Imagem
function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Fecha o modal ao clicar fora da imagem
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Baixar imagem
function baixarImagem() {
  const elemento = document.getElementById('section_card_four');

  html2canvas(elemento)
    .then(function(canvas) {
      const link = document.createElement('a');
      link.download = 'quadro4.png'; // Nome do arquivo
      link.href = canvas.toDataURL('image/png'); // Formato da imagem
      link.click(); // Baixa automaticamente
    })
    .catch(function(error) {
      console.error("Erro ao gerar a imagem:", error);
      alert("Erro ao gerar a imagem.");
    });
}
