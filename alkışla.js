const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Alkışlamak istediğin kullanıcıyı yazmadın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(3447003)
    .setDescription(`${mesaj} Kullanıcısını alkışladın! `)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'alkışla',
  description: 'İstediğiniz bir kullancıyı alkışlarsınız.',
  usage: 'alkışla'
};
