const { inquirerMenu, pause } = require('./helpers/inquirer')

const main = async () => {
  let opt = 0

  do {
    opt = await inquirerMenu()

    switch (opt) {
      case 1:
        //Buscar ciudad
        break
      case 2:
        //Ver historial
        break
    }

    await pause()
  } while (opt !== 0)
}

main()
