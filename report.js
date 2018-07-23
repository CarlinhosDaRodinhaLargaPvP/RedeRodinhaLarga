const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
        await message.author.createDM();
        message.author.send(":white_small_square: **Diga-nos o nick do acusado.**");
        var first = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        first.on('collect', r=> {
            let player = r.content;
            message.author.send(":white_small_square: **Diga-nos o motivo deste report, se possível, inclua provas.** ");
            var first2 = message.author.dmChannel.createMessageCollector(b=>b.author.id == message.author.id,  { time: 1000 * 60, max: 1 });
            first2.on('collect', r2=> {
                let motivo = r2.content;
                const reportplayer = new Discord.RichEmbed()
                .setAuthor('👮‍ REPORT!')
                .addField('**Usuário reportado:**', player)
                .addField('**Autor:**', message.author.username)
                .addField('**Motivo do report:**', motivo)
                let canal = message.guild.channels.find("name", 'reports')
                if (!canal) return message.channel.send("**Canal de reports não foi encontrado.**");
                canal.send({ embed: reportplayer });
                message.author.send("Report arquivado, verifique-o acessando o chat **#reports**.")
            })
        })
}
module.exports.help = {
    name: "report"
}