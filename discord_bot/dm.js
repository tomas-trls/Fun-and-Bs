const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "dm",
  /**
  * @param {Client} client
  * @param {Message} message
  * @param {String[]} args
  */

  run: async (client,message, args) => {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) return;

    const user =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0])?.user;

    const str = args.slice(1).join(" ");
    if(message.content.include('-a')){
      const str = args.join(" ").replace('-a','');
      user.send(str.replace("a",""));
    }else{
      user.send(`${message.author.tag}: ${str}`);
    }
  },
}
