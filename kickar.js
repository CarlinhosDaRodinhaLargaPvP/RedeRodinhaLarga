const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
  message.delete().catch(o_O=>{});
  if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return null;
  if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return message.reply("Eu não possuo a permissão para `kickar membros`, adicione-a para que eu possa executar este comando. :weary:");
  if(!args[0]){
      message.reply("**a sintaxe deste comando é:** !kickar @usuário [motivo do banimento].");
      return;
  }
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply ("mencione algum usuário para que o banimento possa ser efetuado.");
  if (!message.guild.member(user).kickable) return message.reply("o meu cargo é menor ou igual ao do usuário citado na mensagem anterior, portanto não poderei baní-lo!");
  if (message.author.id === user.id) return message.reply("eu não posso kickar o autor desta mensagem. :frowning:")
  message.guild.member(user).kick();
  message.reply("kick aplicado com **sucesso!** Confira o chat **#punições** para ver o registro desta punição!.");
  let modlog = bot.channels.find("name", "punições");
  if (!modlog) return message.reply("Crie um canal chamado de `punições`, não altere nada do nome.");
  let role = message.guild.roles.find("name", "GhostBOT")
  var embed = new Discord.RichEmbed()
  .setColor(role.color)
  .setAuthor('👮‍ KICK!')
  .setDescription(`**Staffer que puniu:** ${message.author.username}
**Usuário kickado:** ${user.username}
**Motivo do kick:** ${reason}`)

modlog.send(embed)
}
module.exports.help = {
  name: "kickar"
};