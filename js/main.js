// Passo 1 - Dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 - Dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, index) => {
    botao.addEventListener('click', () => {

        // Passo 3 - Desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // Passo 4 - Marcar o botão clicando como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        // Passo 5 - Esconder a imagem ativa de fundo
        esconderImagemAtiva();

        // Passo 6 - Fazer aparecder a imagem de fundo correspondente ao botão clicado
        mostrarImagemFundo(index);
    })
})

function mostrarImagemFundo(index) {
    imagens[index].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

