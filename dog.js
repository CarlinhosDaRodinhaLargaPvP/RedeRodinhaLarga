module.exports.run = async(bot, message, args) => {
    if (!args[1]){
    let piadas = [
        "https://random.dog/8b0f55b1-317d-49e4-b849-35df7c17ff2a.jpg",
        "https://random.dog/9f297526-70cc-432b-a00e-2198e9eccfe8.jpg",
        "https://random.dog/b69af17b-1812-4e95-adba-0e6d1b6d5064.jpg",
        "https://random.dog/d25f1923-617b-4176-8388-4a3e040892af.jpg",
        "https://random.dog/fd498aa8-ee18-4959-b8d3-8e8294133100.jpg",
        "https://random.dog/70cdbfcc-ad31-4a15-a306-03b95540f6c7.jpg",
        "https://random.dog/fbe92b0b-4b7e-445e-aadd-f38136b95681.jpg",
        "https://random.dog/12ca7be0-e734-49fa-b271-694b67ba6a7c.jpg",
        "https://random.dog/e654dc69-29a4-4eb6-ad2d-2c18e2c67eee.jpg",
        "https://random.dog/42a98d03-5ed7-4b3b-af89-7c4876cb14c3.jpg",
        "https://random.dog/6843-7121-9258.jpg",
        "https://random.dog/acac6445-5755-45be-bb48-941bda78b5d9.jpg",
        "https://random.dog/7a33c46e-3089-44c4-bad2-db02de71a229.jpg"
    ]
    var piada = Math.floor((Math.random() * piadas.length))
    message.reply("um cachorrinho foi enviado no seu privado. :dog:")
    message.member.send(piadas[piada]);
}
    if (args[1] == "enviar"){
        await message.author.createDM();
        message.author.send("Diga-me uma piada.")
        var pd = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 60, max: 1 });
        pd.on("collect", r=>{
            let pid = r.content.toLowerCase();
            let canal = message.guild.channels.get("459721847467016192");
            canal.send("O membro " + message.author.username + " acaba de enviar uma piada!\n **" + pid + "**");
        })
    }
}
module.exports.help = {
    name: "dog"
}