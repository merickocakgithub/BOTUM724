const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://giphy.com/gifs/dance-twerk-cCWeA4TcQCrhC",
          color: 0xD97634,
		  description: "**Twerk Bebeğim!**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['t'],
  permLevel: 0
};

exports.help = {
  name: 'twerk',
  description: 'Twerk Yapan Kişi Gösterir',
  usage: 'twerk'
};
