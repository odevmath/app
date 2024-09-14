//Criaremos uma função de nome "start", Lembrando da teoria das: function arrow e named function, podemos fazer de duas formas:
/* Named Function:
function start() {
  while(true){
    console.log('Entrou!')
    return;
  }
}; */

/*start(); ==> Comando de execução*/

/*Arrow Function
const start2 = () => {
  console.log('Começou!²')
};

 start2(); Comando de execução mantém a mesma sintaxe. */

const start = () => {
  let count = 0
  while (count <= 10) {
    console.log(count)
    count++ //(count = count + 1)
  }
}

start()