console.log("Ativando..")
const Discord = require('discord.js');
const bot = new Discord.Client();
const cors = require('chalk');
var prefix = ("!")
const fs = require('fs')


bot.on('ready', () =>{
  console.log(`Estou ativado! <${bot.user.username}>`);
  bot.user.setActivity("twitter: @RedeGhost", {type: "PLAYING"});
});
bot.commands = new Discord.Collection();
fs.readdir("./comandos", (err, files) => {
  if(err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log (cors.bgRed("@Nenhum comando foi carregado"));
    return;
  }
  console.log(cors.bgRed(`@Carregados ${jsfiles.length} comando(s)!`));
  jsfiles.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    bot.commands.set(props.help.name, props)
  });
});

bot.on("message", async(message) =>{
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let args = message.content.split(" ").slice(1).join(" ");
  let command = message.content.split(" ")[0];
  if(!command.startsWith(prefix)) return;

let cmd = bot.commands.get(command.slice(prefix.length));
if(cmd)
cmd.run(bot, message, args);
});


bot.on('guildMemberAdd', member =>{
  let channel = member.guild.channels.find('name', 'entrada');
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('#2fd12c')
      .setThumbnail(memberavatar)
      .addField('🎊 RedeGhost!', `${member} entrou para se divertir!
                         **Seja bem-vindo!**`)
      .setTimestamp()

      channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "entrou!" + `${member.guild.name}`)

});

bot.on('guildMemberAdd', member =>{
  let embed = new Discord.RichEmbed()
  .setColor('#2fd12c')
  .setDescription(`Olá. Seja **bem-vindo(a)** ao Discord da RedeGhost! :tada: 

:small_blue_diamond: Antes de interagir, leia o canal de **regras**.
:small_blue_diamond: **Twitter:** @ServidoresGhost.
:small_blue_diamond: **IP:** ghostsurvival.com e ghostminigames.com!`)
  .setTimestamp()

  member.sendEmbed(embed);
});

bot.login("NDY3MDY1NTE1MzI4Nzk4NzIw.DilNnw.CCWPLfoXxnMUiIOzuBN8l4_myUU");
