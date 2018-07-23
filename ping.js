const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
  const msg = new Discord.RichEmbed()
        .addField("🏓 PONG!", '**Sua internet parece estar estável.**')
        message.channel.send({ embed : msg });

    const link = new Discord.RichEmbed()
          .addField("Para mais informações sobre seu ping, acesse:", 'www.testeseuping.com.br/')
    message.member.send({ embed : link })
  }
  module.exports.help = {
    name: "ping"
  }