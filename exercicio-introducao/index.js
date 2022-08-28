// SEVEN DAYS OF CODE
// INTRODUÇÃO


const nome = prompt('Qual é o seu nome?')
const idade = prompt('Qual é sua idade?')
const linguagemEstudada = prompt('Qual linguagem você está estudando?')

const mensagem = 'Legal ' + nome + ', você tem ' + idade + ' anos e está estudando ' + linguagemEstudada + '!';

alert(mensagem)
const interesseLinguagem = prompt('Você gosta do que está aprendendo? Digite 1 para SIM e 2 para NÂO')

respostaInteresse()

function respostaInteresse(){
    if (interesseLinguagem == 1){
        alert('Que bom! Isso é muito importante, continue se esforçando e verá resultados cada vez melhores!')
    }else if (interesseLinguagem == 2){
        alert('Isso é comum, muitas vezes encontramos dificuldades que nos desanimam um pouco, mas é importante manter os objetivos definidos e bem planejados!')
    }
}

