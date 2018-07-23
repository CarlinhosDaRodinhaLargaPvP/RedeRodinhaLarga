const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
    if (!args[0]){
        const msg = new Discord.RichEmbed()
        .setTitle('Comando: !ratecrush')
        .setDescription(`**A sintaxe deste comando é:** !crush <nome>.`)
        .setColor('#dcf442');
        message.channel.send({ embed : msg });
        return;
    }
    let crush = message.content.split(" ").slice(1).join(" ");
    var embed = new Discord.RichEmbed()
        .setColor('#e22cf7')
        .setDescription(`:open_mouth:**|** A sua(seu) **${crush}** é:`)
        .setFooter('By: mrtaazer')

        message.channel.send({ embed : embed });

    let piadas = [
        "**1/10!** O amor é cego, né?",
        "**2/10!** Tá na hora de procurar um crush melhor, não acha?",
        "**3/10!** O que vale é a intenção.",
        "**4/10!** Talvez ajam opções melhores pela frente...",
        "**5/10!** É a famosa em cima do muro! Ela(ele) é um talvez...",
        "**6/10!** Sua(seu) crush parece ser gente fina!",
        "**7/10!** Boa escolha! Os melhores perfumes se encontram nos menores frascos.",
        "**8/10!** Sua crush é muito bonita!",
        "**9/10!** MUITO BEM! Ela(ele) é linda(o), agora é só ir pra cima!",
        "**10/10!** Esse(a) é 10/10! QUE GATO(A)!"
        
    ]
    var piada = Math.floor((Math.random() * piadas.length))
    message.channel.send(piadas[piada]);

}
module.exports.help = {
  name: "crush"
}