const { select } = require('@inquirer/prompts')

const start = async () => {

  while (true) {
    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "cadastrar meta",
          value: "cadastrar"
        },
        {
          name: "listar metas",
          value: "listar"
        },
        {
          name: "Sair",
          value: "sair"
        }
      ]
    })
    switch (opcao) {
      case "cadastrar":
        console.log("Beleza, bora cadastrar!")
        break
      case "listar":
        console.log("Agora nós iremos listar!")
        break
      case "sair":
        console.log("Até a próxima!")
        return
    }
  }
}

start()