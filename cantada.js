module.exports.run = async(bot, message, args) => {
    if (!args[0]){
    let cantadas = [
        "Havia dois ursos, o Beijaeu e o Mebeija. O beijaeu morreu, qual deles ficou vivo?",
        "Você não é um pescoço, mas mexeu com a minha cabeça!",
        "Não sou traficante, mas eu quero a sua boca.",
        "Se preto fosse paixão e branco fosse carinho, o que eu sinto por você seria xadrezinho.",
        "Gata, você não é o sol, mas é a maior estrela da galáxia.",
        "Ei, sexo mata! Quer morrer feliz?",
        "Estou realizando uma campanha de doação de órgãos! Você não quer doar o seu coração pra mim, não?",
        "Ei, você gosta de achocolatado?! Porque eu posso ser Toddynho seu.",
        "Moça, eu perdi o número do meu telefone… Você pode me emprestar o seu?",
        "Mina, você tem um mapa? Porque eu me perdi no brilho dos seus olhos.",
        "Gata, eu não sou demônio, mas deixa eu te possuir?",
        "Credo, que roupa feia! Não é melhor tirar ela?",
        "Mina, vou te mostrar nossa matemática: Soma nós dois, subitrai os problemas e nos multiplica."


    ]
    var cantada = Math.floor((Math.random() * cantadas.length))
    message.channel.send(cantadas[cantada]);
}
    if (args[1] == "enviar"){
        await message.author.createDM();
        message.author.send("Diga-me uma cantada.")
        var pd = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 60, max: 1 });
        pd.on("collect", r=>{
            let pid = r.content.toLowerCase();
            let canal = message.guild.channels.get("459721847467016192");
            canal.send("O membro " + message.author.username + " acaba de enviar uma cantada!\n **" + pid + "**");
        })
    }
}
module.exports.help = {
    name: "cantada"
}