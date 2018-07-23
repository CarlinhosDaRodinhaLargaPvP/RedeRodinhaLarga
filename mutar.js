const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async (bot, message, args) =>{
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
    if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Eu não possuo a permissão `Administrador`, adicione-a ou descarte este comando.");

    await message.delete().catch(O_o=>{});
    let player = message.mentions.members.first() //|| message.guild.members.get(args[0]);
    if (!player) return message.reply("Diga-me qual usuário deve ser mutado.");
    if (player.id == message.author.id) return message.channel.send("Você não pode se mutar. :thinking:");
    let role = message.guild.roles.find('name', "Mutado");
    if (!role){
        message.channel.send("O grupo **Mutado** foi criado, agora a punição pode ser efetuada! :wink:").then(a => a.delete(1600));
        try {
            role = await message.guild.createRole({
                name: "Mutado",
                color: "#000000",
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) =>{
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                });
            });
        } catch (a) {
            console.error(a.stack);
        }
    }
    let tempo = message.content.split(" ").slice(2).join(" ");
    if (!tempo) return message.reply("Especifique por quanto tempo o mute durará.");
    await(player.addRole(role.id));
    var embed = new Discord.RichEmbed()
        .setColor(role.color)
        .setDescription(`**Staffer que puniu:** ${message.author.username}
**Usuário mutado:** ${player.user.username}
**Tempo:** ${ms(ms(tempo), { long:true })}`)
    let modlog = message.guild.channels.find("name", "punições");
    if (!modlog) {
        try {
            await message.guild.CreateChannel("punições", {type: 'text'});
            message.channel.send("Canal `punições` foi adicionado! :relaxed:");
        } catch (e) {
            console.error(e)
            message.channel.send("Crie um canal de texto com o nome de **punições**.");
        }
        return;
    }
    await modlog.send({ embed : embed });
    setTimeout(() =>{
        player.removeRole(role.id);
    }, ms(tempo));
}

exports.help = {
    name: "mutar"
}
