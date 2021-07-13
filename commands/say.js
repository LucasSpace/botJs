const Discord = require("discord.js");

module.exports = {

  name: "say",

  

  run: async(client, message, agrs) => {

    let msg = agrs.join(" ");

    

    if (!msg) return message.channel.send(`:x: | ${message.aurhor} Voce precisa escrever algo para eu falar`);

    

    message.channel.send(`*Mensagem por:${message.author}*

    ${msg}`)

  }

}
