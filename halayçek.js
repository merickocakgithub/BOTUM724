const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"http://www.imgim.com/2030incih7923956.jpg",
          color: 0xD97634,
      description: "**Halay birde müziği ver arkadan ohhh.**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 0
};

exports.help = {
  name: 'halayçek',
  description: 'Halay çekersiniz.',
  usage: 'halayçek'
};
