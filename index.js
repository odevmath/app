const { select, input } = require('@inquirer/prompts')

let meta = {
  value: 'Estudar 2h por dia',
  checked: false,
}

let metas = [meta]

const cadastrarMeta = async () => {
  const meta = await input({ message: "Informe a meta: "})

  if(meta.length == 0) {
    console.log('A meta não dever ser vazia.')
    return
  }

  metas.push(
    { value: meta, checked: false}
  )

}

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
        await cadastrarMeta()
        console.log(metas)
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