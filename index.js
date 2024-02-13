const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Um banco de dados",
            "Uma linguagem de programação",
            "Um sistema operacional"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função de `console.log()` em JavaScript?",
        respostas: [
            "Registrar um usuário no console",
            "Imprimir algo no console",
            "Criar um novo objeto"
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma variável em JavaScript?",
        respostas: [
            "Uma constante que não pode ser alterada",
            "Um valor que pode variar ao longo do tempo",
            "Um tipo de loop"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "let myVar = 10;",
            "variable myVar = 10;",
            "var myVar = 10;"
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um bloco de código que só pode ser executado uma vez",
            "Um procedimento que não retorna valor",
            "Um bloco de código reutilizável que pode ser executado várias vezes"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '==' em JavaScript?",
        respostas: [
            "Comparação estrita",
            "Atribuição",
            "Comparação de igualdade"
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma array em JavaScript?",
        respostas: [
            "Uma função que retorna um valor",
            "Um tipo de dado que armazena uma coleção de elementos",
            "Um tipo de loop"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário de uma linha",
            "/* Este é um comentário de uma linha */",
            "<!-- Este é um comentário de uma linha -->"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de uma array em JavaScript?",
        respostas: [
            "push()",
            "add()",
            "append()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método usado para remover o último elemento de uma array em JavaScript?",
        respostas: [
            "removeLast()",
            "pop()",
            "deleteLast()"
        ],
        correta: 1
    }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrasTotal = document.querySelector('#acertos span')
mostrasTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repeti
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
        
        
    for(let resposta of item.respostas) {
       const dt = quizItem.querySelector('dl dt').cloneNode(true)
       dt.querySelector('span').textContent = resposta
       dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
       dt.querySelector('input').value = item.respostas.indexOf(resposta)
       dt.querySelector('input').onchange = (event) => {
          const estacorreta = event.target.value == item.correta

          corretas.delete(item)
          if(estacorreta) {
           corretas.add(item)
          }

       mostrasTotal.textContent = corretas.size + ' de ' + totalDePerguntas
       }


       quizItem.querySelector('dl').appendChild(dt)
    }
        
    quizItem.querySelector('dl dt').remove()
        
    // colocar a pergunta tela
    quiz.appendChild(quizItem) 

}
 