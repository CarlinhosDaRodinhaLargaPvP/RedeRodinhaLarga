const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
  const msg = new Discord.RichEmbed()
        .setTitle('🤖 Comandos - MEMBROS')
        .addField("!report", 'Reportar membros.')
        .addField("!dog", 'Enviar imagens de cachorro no seu privado.')
        .addField("!piada", 'Ler piadas.')
        .addField("!cantada", 'Ler cantadas.')
        .addField("!enviarpiada", 'Enviar piadas.')
        .addField("!enviarcantada", 'Enviar cantadas.')
        .addField("!equipe", 'Ver a staff-list.')
        .setColor('#dcf442');
        message.reply("os comandos de membros foram enviados no seu privado.")
        message.member.send({ embed : msg });
  }
  module.exports.help = {
    name: "cmd"
  }
