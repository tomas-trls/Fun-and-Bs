import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import dm from 'dm.js'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

client.on('ready', () => {
  console.log('Bee, Bee')

  const guildID = '848277580284952626'
  const guild = client.guilds.cache.get(guildID)
  let commands

  if (guild){
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }

  commands?.create({
    name: 'amongsus',
    description: "Lancer une game d'Among Legends"
  })

  commands?.create({
    name:'addition',
    description: 'Ajouter 2 nombres.',
    options: [
      {
        name: "num1",
        description: "Le premier nombre",
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
      },
      {
        name:"num2",
        description: "Le second nombre",
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
      }
    ]
  })
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()){
    return
  }

  const { commandName, options } = interaction
  if (commandName === "amongsus") {
    interaction.reply({
      content: "Lancement d'une game de Among Legends..."
    })
  } else if (commandName === 'addition') {
    const num1 = options.getNumber('num1') || 0
    const num2 = options.getNumber('num2') || 0

    await interaction.deferReply({
      ephemeral: true
    })

    await new Promise(resolve => setTimeout(resolve,5000))

    await interaction.editReply({
      content: `La somme est ${num1 + num2}`
    })
  }
})

client.on('messageCreate', (message) => {
  if (message.content.includes("10958")) {
    message.reply({
      content: 'Attention Mehdi est derrière toi! FILS DE PUTE LA LIGUE DES OMBRES TE RATTRAPE...',
    })
  }
})


client.on('messageCreate', (message) => {
  if (message.content === "Julien!") {
    message.reply({
      content: ' 🎵Julien aime les gosses!🎵',
    })
  }
})


client.login(process.env.TOKEN)
