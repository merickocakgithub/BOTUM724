const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://cdn.discordapp.com/attachments/480054659357343744/480055666539495435/dgalook.jpg",
          color: 0xD97634,
      description: "**Logomuz:**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pp'],
  permLevel: 0
};

exports.help = {
  name: 'logo',
  description: 'Logomuzu gösterir.',
  usage: 'logo'
};
