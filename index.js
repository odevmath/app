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
  if (metas.length == 0) {
    console.log("Nenhuma meta foi selecionada.")
    return
  }

  const respostas = await checkbox({
    message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o enter para finalizar",
    choices: [...metas],
    instructions: false,
  })

  metas.forEach((m) => {
    m.checked = false
  })



  respostas.forEach((resposta) => {
    const meta = metas.find((m) => m.value == resposta)
    if (meta) {
      meta.checked = true
    }
  })

  console.log('Metas marcadas como concluídas!')
}

const metasRealizadas = async () => {
  const realizadas = metas.filter((meta) => meta.checked)

  if (realizadas.length == 0) {
    console.log('Não há metas realizadas!')
    return
  }

  await select({
    message: "Metas realizadas",
    choices: realizadas.map(meta => ({ name: meta.value, value: meta.value }))
  })
}

const metasAbertas = async () => {
  const abertas = metas.filter((meta) => {
    return !meta.checked // ou != true - lógica inversa.
  })

  if(abertas.length == 0) {
    console.log("Não há metas abertas! :)")
    return
  }

  await select ({
    message: "Metas abertas:  " + abertas.length,
    choices: [...abertas]
  })
}

const deletarMetas = async () => {
  const metasDesmarcadas = metas.map((meta) => {
    return {value: meta.value, checked: false}
  })
  const deletarItens = await checkbox({
    message: "Selecione os itens para deletar.",
    choices: [...metasDesmarcadas],
    instructions: false,
  })
  
  if(deletarItens.length == 0) {
    console.log("Nenhum item foi deletado!")
    return
  }

  deletarItens.forEach((item) => {
    metas = metas.filter((meta) => {
      return meta.value != item
    })
  })

  console.log("Metas deletadas com sucesso!")

}

const start = async () => {

  while (true) {

    const opcao = await select({
      message: "Menu >",
      choices: [
        {name: "cadastrar meta", value: "cadastrar"},
        {name: "Listar metas", value: "listar"},
        {name: "Metas realizadas", value: "realizadas"},
        {name: "Metas abertas", value: "abertas"},
        {name: "Deletar metas", value: "deletar"},
        {name: "Sair", value: "sair"}
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
      case "realizadas":
        await metasRealizadas()
        break
      case "abertas":
        await metasAbertas()
        break
      case "deletar":
          await deletarMetas()
          break
      case "sair":
        console.log("Até a próxima!")
        return
    }
  }
}

start()