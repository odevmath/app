const { select, input, checkbox } = require('@inquirer/prompts')
const fs = require("fs").promises

let mensagem = "Bem-vindo ao App de Metas. Use as setas do teclado para navegar, use Enter para entrar nas opções (enter novamente para voltar ao menu principal), espaço para marcar/desmarcar opções e sair para finalizar o programa";

let metas

const carregarMetas = async () => {
  try {
    const dados = await fs.readFile("metas.json", "utf-8")
    metas = JSON.parse(dados)
  }
  catch (erro) {
    metas = []
  }
}

const salvarMetas = async () => {
  await fs.writeFile("metas.json", JSON.stringify(metas, null, 2))
}

const cadastrarMeta = async () => {
  const meta = await input({ message: "Informe a meta: " })

  if (meta.length == 0) {
    mensagem = "A meta não dever ser vazia."
    return
  }

  metas.push(
    { value: meta, checked: false }
  )

  mensagem = "Meta cadastrada com sucesso! :)"

}

const listarMetas = async () => {
  if (metas.length == 0) {
    mensagem = "Não há metas registradas"
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

  mensagem = 'Metas marcadas como concluídas!'
}

const metasRealizadas = async () => {
  if (metas.length == 0) {
    mensagem = "Não há metas!"
    return

  }
  const realizadas = metas.filter((meta) => meta.checked)

  if (realizadas.length == 0) {
    mensagem = "Não há metas realizadas!"
    return
  }

  await select({
    message: "Metas realizadas",
    choices: realizadas.map(meta => ({ name: meta.value, value: meta.value }))
  })
}

const metasAbertas = async () => {
  if (metas.length == 0) {
    mensagem = "Não há metas registradas"
    return
  }

  const abertas = metas.filter((meta) => {
    return !meta.checked // ou != true - lógica inversa.
  })

  if (abertas.length == 0) {
    mensagem = "Não há metas abertas! :)"
    return
  }

  await select({
    message: "Metas abertas:  " + abertas.length,
    choices: [...abertas]
  })
}

const deletarMetas = async () => {
  if (metas.length == 0) {
    mensagem = "Não há metas para serem deletadas"
    return
  }
  const metasDesmarcadas = metas.map((meta) => {
    return { value: meta.value, checked: false }
  })
  const deletarItens = await checkbox({
    message: "Selecione os itens para deletar.",
    choices: [...metasDesmarcadas],
    instructions: false,
  })

  if (deletarItens.length == 0) {
    mensagem = "Nenhum item foi deletado!"
    return
  }

  deletarItens.forEach((item) => {
    metas = metas.filter((meta) => {
      return meta.value != item
    })
  })

  mensagem = "Metas deletadas com sucesso!"

}

const mostrarMensagem = () => {
  console.clear();

  if (mensagem != "") {
    console.log(mensagem)
    console.log("")
    mensagem = ""
  }
}

const start = async () => {
  await carregarMetas()

  while (true) {
    mostrarMensagem()
    await salvarMetas()

    const opcao = await select({
      message: "Menu >",
      choices: [
        { name: "Cadastrar metas", value: "cadastrar" },
        { name: "Listar metas", value: "listar" },
        { name: "Vizualizar metas realizadas", value: "realizadas" },
        { name: "Metas abertas", value: "abertas" },
        { name: "Deletar metas", value: "deletar" },
        { name: "Sair", value: "sair" }
      ],

    })

    switch (opcao) {
      case "cadastrar":
        await cadastrarMeta()
        await salvarMetas()
        break
      case "listar":
        await listarMetas()
        await salvarMetas()
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