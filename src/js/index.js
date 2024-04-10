/*

Objetivo 1 - quando o usuário clicar no botão de mostrar mais, deverá abrir os projetos que estão escondidos no HTML

    Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - identificar o clique do botão

    Passo 3 - adicionar a classe ativo nos projetos escondidos

Objetivo 2 - esconder o botão de mostrar mais

    Passo 1 - pegar o botão e esconder ele

*/

// Obj. 1 - 1º Passo

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    // 3º Passo
    mostrarMaisProjetos();

    // OBJ 2
    // Passo 1
    esconderBotao();
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
