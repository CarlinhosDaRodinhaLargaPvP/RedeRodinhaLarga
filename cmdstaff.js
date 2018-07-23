const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Permissões insuficientes."); 
  const msg = new Discord.RichEmbed()
        .setTitle('🤖 Comandos - EQUIPE')
        .addField("!banir", 'Banir membros.')
        .addField("!falar", 'Fazer o bot falar.')
        .addField("!kickar", 'Kickar membros.')
        .addField("!votar", 'Iniciar uma votação.')
        .addField("!limpar", 'Excluir mensanges de forma prática.')
        .setColor('#dcf442');
        message.reply("os comandos da equipe foram enviados no seu privado.")
        message.member.send({ embed : msg });
  }
  module.exports.help = {
    name: "cmdstaff"
  }