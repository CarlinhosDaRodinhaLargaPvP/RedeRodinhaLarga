const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
        await message.author.createDM();
        message.author.send("**Qual a sua cantada?**");
        let tazer3 = message.author.dmChannel.createMessageCollector(c=>c.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer3.on('collect', r3=> {
            let cantada = r3.content;
            const reportbug = new Discord.RichEmbed()
            .setAuthor(':laughing: CANTADA!')
            .addField('**Quem enviou a cantada:**', message.author.username)
            .addField('**Cantada:**', cantada)
            let canal = message.guild.channels.find("name", 'cantada')
            canal.send({ embed: reportbug });
            message.author.send("**Sua cantada foi enviada para uma lista de aprovação!**")
        })
}
module.exports.help = {
    name: "enviarcantada"
}