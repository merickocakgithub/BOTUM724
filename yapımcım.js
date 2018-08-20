const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(' ```Beni yapan kişi : ! ÐǤÂ ✘ ʍεƦι̇c Ulaşmak isterseniz özelden yazabilirsiniz``` ');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcı', 'beniyapankişi', 'yapankişi', 'botyapımcı'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Botun yapımcısını gösterir.',
  usage: 'yapımcım'
};
