const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
  value: 'Estudar 2h por dia',
  checked: false,
}

let metas = [meta]

const cadastrarMeta = async () => {
  const meta = await input({ message: "Informe a meta: " })

  if (meta.length == 0) {
    console.log('A meta não dever ser vazia.')
    return
  }

  metas.push(
    { value: meta, checked: false }
  )
}

const listarMetas = async () => {
  const respostas = await checkbox({
    message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar",
    choices: [...metas],
    instructions: false,
  })

  if (respostas.length == 0) {
    console.log("Nenhuma meta foi selecionada.")
    return
  }

  metas.forEach((m) => {
    m.checked = false
  })

  respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
      return m.value == resposta
    })

    meta.checked = true
  })

  console.log('Metas marcadas como concluídas.')
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
      ],

    })

    switch (opcao) {
      case "cadastrar":
        await cadastrarMeta()
        console.log(metas)
        break
      case "listar":
        await listarMetas()
        break
      case "sair":
        console.log("Até a próxima!")
        return
    }
  }
}

start()