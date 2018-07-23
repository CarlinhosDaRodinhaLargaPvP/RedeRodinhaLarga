const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return null;
    if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return message.reply("Eu não possuo a permissão para `banir membros`, adicione-a para que eu possa executar este comando. :weary:");
    if(!args[0]){
        message.reply("**a sintaxe deste comando é:** !banir @usuário [motivo do banimento].");
        return;
    }
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    if (message.mentions.users.size < 1) return message.reply ("mencione algum usuário para que o banimento possa ser efetuado.");
    if (!message.guild.member(user).bannable) return message.reply("o meu cargo é menor ou igual ao do usuário citado na mensagem anterior, portanto não poderei baní-lo!");
    if (message.author.id === user.id) return message.reply("eu não posso banir o autor desta mensagem. :frowning:")
    message.guild.member(user).ban();
    message.reply("banimento aplicado com **sucesso!** Confira o chat **#punições** para ver o registro desta punição!.").then(a=>a.delete(1500));
    let modlog = bot.channels.find("name", "punições");
    if (!modlog) return message.reply(".");
    let role = message.guild.roles.find("name", "GhostBOT")
    var embed = new Discord.RichEmbed()
          .setColor(role.color)
          .setAuthor(`:ban: BANIMENTO!`)
          .setDescription(`**Staffer que puniu:** ${message.author.username}
**Usuário banido:** ${user.username}
**Motivo do banimento:** ${reason}`)
  
    modlog.send(embed)
  }
  module.exports.help = {
    name: "banir"
  };