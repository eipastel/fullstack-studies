// Exercício 1: API Fetch Assíncrono com Manipulação de Erros

// Descrição: Crie uma função assíncrona que faça uma chamada GET para uma API pública de sua escolha (por exemplo, a API de fotos aleatórias do Unsplash). Use a estrutura try/catch para manipular possíveis erros que possam ocorrer durante a chamada da API.

async function chamadaApi() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await response.json()
    console.log(data)
  } catch(error) {
    console.error('Erro não identificado:', error.message)
  }
}
// chamadaApi()


// Exercício 2: Postagem de Dados para uma API com Manipulação de Erros

// Descrição: Crie uma função que aceita um objeto de dados como argumento e faz uma chamada POST assíncrona para uma API (você pode usar JSONPlaceholder para isso). Novamente, use a estrutura try/catch para lidar com possíveis erros.

async function postEmApi(obj) {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      headers: {
        'Content-Type': 'application/json'
      }, 
      method: 'POST', 
      body: JSON.stringify(obj)
    })
    if(!response.ok) {
      throw new Error(response.status)
    }
    let data = await response.json()
    console.log(data)
  } catch(error) {
    console.log(error.message)
  }
  
}
//postEmApi({"userId": 189,"id": 189,"title": "teste de post method","completed": false})


// Exercício 3: Função Assíncrona de Manipulação de Erros Personalizada

// Descrição: Crie uma função assíncrona que simula o lançamento de um erro personalizado após um tempo de espera aleatório (entre 1 e 5 segundos). Capture esse erro em um bloco try/catch e registre a mensagem de erro no console.

function gerarNumeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min) + min) * 1000);
}

class erroPersonalizado extends Error {
  constructor(message) {
    super(message)
    this.nome = 'Erro Personalizado'
  }
}

async function lancandoErroPersonalizado() {
  try {
    let resposta = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new erroPersonalizado('Erro não identificado'))
      }, gerarNumeroAleatorio(1, 5)); // (minímo, máximo) em segundos
    })
    
  } catch(error) {
    console.error(error.message)
  }
}

lancandoErroPersonalizado()

