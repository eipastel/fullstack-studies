// Exercícios Práticos

// Exercício 1: Fazer uma chamada GET simples e visualizar a resposta.
// 1. Utilize a Fetch API para fazer uma chamada GET para https://jsonplaceholder.typicode.com/posts.
// 2. Log os dados recebidos no console.

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro desconhecido:', error))



// Exercício 2: Criar um novo post usando uma chamada POST.
// 1. Use a Fetch API para criar um novo post em https://jsonplaceholder.typicode.com/posts.
// 2. Envie um corpo de requisição com um objeto JSON contendo title e body.
// 2. Log a resposta no console.

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }, body: JSON.stringify( {title: 'foo', body: 'bar', userId: 1} )
})
  .then(response => response.json())
  .then(data => console.log('Dados recebidos:', data))
  .catch(error => console.error(`Erro não identificado:`, error))
