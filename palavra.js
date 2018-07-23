module.exports.run = async(bot, message, args) => {
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
    if (!args[1]){
    let piadas = [
        "**A palavra é: BATATA!**",
        "**A palavra é: AZUL!**",
        "**A palavra é: CORDA!**",
        "**A palavra é: CACHORRO!**",
        "**A palavra é: NAVIO!**",
        "**A palavra é: AZEITONA!**",
        "**A palavra é: FRANÇA!**",
        "**A palavra é: CARRO!**",
        "**A palavra é: QUADRADO!**",
        "**A palavra é: TELEFONE!**",
        "**A palavra é: CANDELABRO**",
        "**A palavra é: TRANSPORTADOR!**",
        "**A palavra é: MELÃO!**",
        "**A palavra é: ARCO!**",
        "**A palavra é: REJEITAR!**",
        "**A palavra é: MEMBRO!**",
        "**A palavra é: GUILDA!**",
        "**A palavra é: MENSAGEM!**",
        "**A palavra é: PIADA!**",
        "**A palavra é: GASTAR!**",
        "**A palavra é: EMPRESA!**",
        "**A palavra é: CAMPEÃO!**",
    ]
    var piada = Math.floor((Math.random() * piadas.length))
    message.channel.send(piadas[piada]);
}
    if (args[1] == "enviar"){
        await message.author.createDM();
        message.author.send("Diga-me uma palavra.")
        var pd = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 60, max: 1 });
        pd.on("collect", r=>{
            let pid = r.content.toLowerCase();
            let canal = message.guild.channels.get("459721847467016192");
            canal.send("O membro " + message.author.username + "acaba de escolher uma palavra aleatória!\n **" + pid + "**");
            message.reply("Uma palavra aleatória foi enviada para o seu privado!")
        message.member.send({ embed : msg });
        })
    }
}
module.exports.help = {
    name: "palavra"
}