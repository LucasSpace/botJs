Vieirinha:

const Discord = require("discord.js");

exports.run = async (client, message, args) => {

 try {

 let name = ('Vieirinha');

 let avatar = {avatar: 'eu n consegui pegar a foto dele mas coloca o link da imagem q vc quiser, eu n uso essa foto e nome no meu bot'}

 let vieirinha = [

    'Sim',

    'Com Certeza',

    'Eu responderia mas não quero ferir seus sentimentos',

    'Não',

    'Do jeito que vejo, sim',

    'Não sei, só sei que tenho um amigo chamado goiaba',

    'Do jeito que vejo, não',

    'Talvez sim...',

    'Você pode acreditar nisso',

    'Hmmmm...🤔',

    'Acho que sim',

    'acho que não',

    'Não sei, só sei que moro em MamacoLandia',

    'Provavelmente sim',

    'Minha resposta não importa,o que importa e seguir seu coração😘',

    'Talvez sim',

    'Também queria saber...'

];

let arg = vieirinha[Math.floor(Math.random() * vieirinha.length)]

 message.channel.createWebhook(name, avatar).then(w => { 

 w.send(arg).then((

 ) => w.delete())

 });

 } catch (err) {

 message.reply('**Eu não tenho permissão para criar um Webhook neste servidor**')

 }

}

