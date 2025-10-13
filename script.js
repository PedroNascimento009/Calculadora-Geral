const btn = document.querySelectorAll('.btn')
const ip = document.querySelector('#ip')
const resultado = document.querySelector('#result')
const deletar = document.querySelector('#delet')

const addNumero = (n) => ip.textContent += n

const addOperador = (op) => ip.textContent += op

resultado.addEventListener('click', () => {
    const valorAntigo = ip.textContent
    const novoValor = eval(valorAntigo)
    ip.textContent = novoValor
})

deletar.addEventListener('click', () => {
    ip.textContent= ''
})

btn.forEach(botao => {
    botao.addEventListener('click', () => {
        const numero = botao.dataset.n
        const operador = botao.dataset.op
        if(numero){
            addNumero(numero)
        } else if(operador){
            addOperador(operador)
        }
})});