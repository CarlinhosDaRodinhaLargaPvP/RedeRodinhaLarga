const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
    const msg = new Discord.RichEmbed()
        .setTitle('🎓 EQUIPE')
        .addField("Discord Developers", ':white_small_square: @oFirstGz')
        .addField("Diretores", ' @Mathvx\n:white_small_square: @oFirstGz')
        .addField("Gerentes", ':white_small_square: @zBielG0D_\n:white_small_square: @DevStrafe')
        .addField("Administradores", '*')
        .addField("Moderadores", ':white_small_square: @Play_Famosinho')
        .addField("Ajudantes", '*')
        .addField("Construtores", ':white_small_square: @Polar3D2Y\n:white_small_square: @zZEmperorzZ')
        .setColor('#dcf442');
        message.reply("a lista de membros da equipe foi enviada para o seu privado.")
        message.member.send({ embed : msg });
  }
  module.exports.help = {
    name: "equipe"
  }