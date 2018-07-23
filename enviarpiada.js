const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
        await message.author.createDM();
        message.author.send("**Qual a sua piada?**");
        let tazer3 = message.author.dmChannel.createMessageCollector(c=>c.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer3.on('collect', r3=> {
            let piada = r3.content;
            const reportbug = new Discord.RichEmbed()
            .setAuthor('🤣 PIADA!')
            .addField('**Quem enviou a piada:**', message.author.username)
            .addField('**Piada:**', piada)
            let canal = message.guild.channels.find("name", 'piadas')
            canal.send({ embed: reportbug });
            message.author.send("**Sua piada foi enviada para uma lista de aprovação!**")
        })
}
module.exports.help = {
    name: "enviarpiada"
}