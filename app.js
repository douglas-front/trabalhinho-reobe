let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#sviso')
//let respostaEsta = document.querySelector('respostaEsta')
let pontos = 0
let placar = 0

//pergunta
let numQuestao = document.querySelector ('numQuestao')
let pergunta = document.querySelector ('#pergunta')

//alternativass
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// classe questoes (article)
let articleQuestoes = document.querySelector('#questoes')
//(ol li)
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao    : 0,
    pergunta      : "pergunta",
    alternativaA  : "Alternativa A",
    alternativaB  : "Alternativa B",
    alternativaC  : "Alternativa C",
    correta       : "0",
}

const q1 = {
    numQuestao   :  1,
    pergunta     : "Éter é uma funcão?",
    alternativaA : "Orgânica gaseificada",
    alternativaB : "Orgânica hidrogenada",
    alternativaC : "Orgânica oxigenada",
    correta      : "Orgânica oxigenada",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Quando o éter apresenta de quatro a mais carbono , apresenta-se no estado?",
    alternativaA : "gasoso",
    alternativaB : "liquido",
    alternativaC : "solido",
    correta      : "liquido",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Èter etílico tem cor?",
    alternativaA : "azul",
    alternativaB : "incolor",
    alternativaC : "vermelho",
    correta      : "incolor",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O éter etílico é usado nas idústrias como?",
    alternativaA : "Produto de limpeza",
    alternativaB : "Não usa",
    alternativaC : "Solvente de resinas",
    correta      : "Solvente de resinas",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual a temperatura de ebulição do éter etílico?",
    alternativaA : "50,5°c",
    alternativaB : "80,2°c",
    alternativaC : "34,6°c",
    correta      : "34,6°c",
}

const q6 ={
    numQuestao   : 6,
    pergunta     : "Quem descobriu o Éter Etílico?",
    alternativaA : "Ernest Rutherford",
    alternativaB : "Valerius Cordus",
    alternativaC : "Socrates",
    correta      :  "Valerius Cordus"
}

const q7 ={
    numQuestao   : 7,
    pergunta     : "Quais destes Éteres são realmente Éteres?",
    alternativaA : "Éter etílico",
    alternativaB : "Éter liquido", 
    alternativaC : "Èter metanóico",
    correta      :  "Éter etílico"
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Como é organizado o radical da função Éter?",
    alternativaA : "RCOOR'",
    alternativaB : "RCOOH",
    alternativaC : "ROR'",
    correta      : "ROR'"
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "O éter é tóxico?",
    alternativaA : "sim",
    alternativaB : "não",
    alternativaC : "",
    correta      : "sim"
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "O éter foi um anestésico?",
    alternativaA : "sim",
    alternativaB : "não",
    alternativaC : "",
    correta      : "sim"
}

const q11 = {
    numQuestao   : 11,
    pergunta     : "como o éter é éter",
    alternativaA : "ele é uma composição natural",
    alternativaB : "ele é uma composição quimica",
    alternativaC : "Só Deus sabe",
    correta      : "Só Deus sabe"
}

// objetos (questoes)
const questoes = [q0, q1, q2, q3, q4, q5 , q6 , q7 , q8, q9, q10, q11]

let numero = document.querySelector ('#numero')
let total = document.querySelector ('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

//montar questao

numQuestao = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// value inicial
a.setAttribute ('value', '1A')
b.setAttribute ('value', '1B')
c.setAttribute ('value', '1C')

//montar prox questao
function proximaQuestao(nQuestao){
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute ('value', nQuestao +'A')
    b.setAttribute ('value', nQuestao +'B')
    c.setAttribute ('value', nQuestao +'C')
}

function bloquearAlternativas(){
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas (){
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta){

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("RespU " + respostaEscolhida )

    let certa = questoes[numeroDaQuestao].correta
    console.log("RespC " + certa)

    if(respostaEscolhida == certa){
        pontos += 10
    } else{
      pontos -= 10
    }

    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    alternativas.addEventListener('dblclick', ()=>{
        pontos -=10
        if(numQuestao.value == 10 && pontos == 120) {pontos = 100}
    })

    //bloquer opc
    bloquearAlternativas()

    setTimeout(function(){
        //respostaEsta.text.Contet = '....'
        proxima = numeroDaQuestao+1

        if(proxima>totalDeQuestoes){
            console.log("Fim de jogo!")
            fimDoJogo();
        } else{
            proximaQuestao(proxima);
        }
    }, 250)
    desbloquearAlternativas();
}

function fimDoJogo (){
    if(pontos >=100){

        instrucoes.textContent = "Fim de Jogo!, exelente!"
        numQuestao.textContent = ""
    } else if(pontos >=60){
        instrucoes.textContent = "Fim de Jogo!, bom"
    } else if (pontos >=30){
        instrucoes.textContent = "Fim de Jogo!, ruim"
    } else{
        instrucoes.textContent = "Fim de jogo!, horrivel"
    }

    let pont = ''
    pontos == 0 ? pont = "ponto" : pont = "pontos"

    pergunta.textContent = "Você conseguiu " + pontos + " " + pont

   // aviso.innerHTML = "Você conseguiu "+ pontos +" "+ pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.textContent = ('value', '0') 
    b.textContent = ('value', '0')
    c.textContent = ('value', '0')


    //ocultar (article)
    articleQuestoes.style.display = 'none'

    setTimeout(function(){
        pontos = 0
        location.reload()
    },1500)
}
