const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('ANKET')
    .setColor("RANDOM")
    .setDescription(`${mesaj} \n\n\ Evet İçin: ✔ Hayır İçin: ❌ `)

    message.channel.send(embed).then(msg => {

      msg.react('✔').then(r => {
        msg.react('❌')
      })
    })
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'anket',
  description: 'Anket Açar.',
  usage: 'anket'
};

