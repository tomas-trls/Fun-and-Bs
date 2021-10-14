import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()


const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

client.on('ready', () => {
  console.log('Bee, Bee')
})

client.on('messageCreate',(message) => {
  if(message.content === "Julien"){
    message.reply({
      content: 'aime les gosses!',
    })
  }
})

client.login(process.env.TOKEN)
