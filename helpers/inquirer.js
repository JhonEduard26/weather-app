const inquirer = require('inquirer')
require('colors')

const questions = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
      {
        value: 1,
        name: `${'1.'.blue} Buscar ciudad`,
      },
      {
        value: 2,
        name: `${'2.'.blue} Historial`,
      },
      {
        value: 0,
        name: `${'0.'.blue} Salir`,
      },
    ],
  },
]

const inquirerMenu = async () => {
  console.clear()
  console.log('======================='.blue)
  console.log(' Selecione una opción ')
  console.log('=======================\n'.blue)

  const { opcion } = await inquirer.prompt(questions)

  return opcion
}

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.blue} para continuar`,
    },
  ]
  console.log('\n')
  await inquirer.prompt(question)
}

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.trim().length === 0) {
          return 'Por favor ingrese un valor'
        }

        return true
      },
    },
  ]

  const { desc } = await inquirer.prompt(question)
  return desc
}

const listTasksForDelete = async (tasks = []) => {
  const choices = tasks.map(({ id, desc }, i) => {
    const idx = `${i + 1}. `

    return {
      value: id,
      name: `${idx}`.blue + `${desc}`,
    }
  })

  if (tasks.length !== 0) {
    choices.unshift({
      value: '0',
      name: '0. '.blue + 'Cancelar',
    })
  } else {
    return null
  }

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'delete',
      choices,
    },
  ]

  const { id } = await inquirer.prompt(questions)

  return id
}

const confirm = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ]

  const { ok } = await inquirer.prompt(question)
  return ok
}

const showTasksCheckList = async (tasks = []) => {
  const choices = tasks.map(({ id, desc, completedIn }, i) => {
    const idx = `${i + 1}. `

    return {
      value: id,
      name: `${idx}`.blue + `${desc}`,
      checked: completedIn ? true : false,
    }
  })

  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Seleccione',
      choices,
    },
  ]

  const { ids } = await inquirer.prompt(question)

  return ids
}

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  listTasksForDelete,
  confirm,
  showTasksCheckList,
}
