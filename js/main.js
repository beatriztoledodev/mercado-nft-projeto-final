// Passo 1 - Dar um jeito de pegar o elemento HTML dos botões
const carouselBtns = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.image');

// Passo 2 - Dar um jeito de identificar o clique do usuário no botão
carouselBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        // Passo 3 - Desmarcar o botão selecionado anterior
        deactivateSelectedBtn();

        // Passo 4 - Marcar o botão clicando como se estivesse selecionado
        selectCarouselBtns(btn);

        // Passo 5 - Esconder a imagem ativa de fundo
        hideActiveImage();

        // Passo 6 - Fazer aparecder a imagem de fundo correspondente ao botão clicado
        showBackgroundImage(index);
    })
})

function showBackgroundImage(index) {
    images[index].classList.add('active');
}

function selectCarouselBtns(btn) {
    btn.classList.add('selected');
}

function hideActiveImage() {
    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active');
}

function deactivateSelectedBtn() {
    const selectedBtn = document.querySelector('.selected');
    selectedBtn.classList.remove('selected');
}


