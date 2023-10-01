const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice) => {
    botao.addEventListener('mouseenter', () => {

        removerSelecionado()

        adicionaSelecionado(botao, personagens[indice])

    })
});

function removerSelecionado() {
    const persongemSelecionado = document.querySelectorAll('.selecionado')
    persongemSelecionado.forEach(selecionado => {
        selecionado.classList.remove('selecionado')
    })
}

function adicionaSelecionado(botao, personagem) {
    botao.classList.add('selecionado')
    personagem.classList.add('selecionado')
}