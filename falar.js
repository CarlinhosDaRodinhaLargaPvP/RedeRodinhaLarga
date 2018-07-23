const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não possui permissões suficientes para executar este comando. :frowning:");
      var args1 = message.content.split(" ").slice(1).join(" ");
      message.delete().catch();
      message.channel.send(args1);

}

module.exports.help = {
  name: "falar"
}