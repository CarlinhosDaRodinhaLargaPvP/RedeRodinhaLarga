const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não possui permissões suficientes para executar este comando. :frowning:");
  if(!args[0]) return message.channel.send("Quantas mensagens devo apagar? Utilize o comando desta forma: `!limpar <número de mensagens>`.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**${args[0]} mensagens foram excluídas.**`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "limpar"
}