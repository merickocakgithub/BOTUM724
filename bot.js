const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
  }

  client.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + "sigara") {
    msg.channel.send(':smoking: :cloud::cloud::cloud:')
    .then(nmsg => nmsg.edit(':smoking: :cloud::cloud::cloud:'))
    .then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
    .then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
    .then(nmsg => nmsg.edit(':smoking: :cloud:'))
    .then(nmsg => nmsg.edit(':smoking: :cloud:'))
    .then(nmsg => nmsg.edit('**Sigaram bitti** | **Sigara İçmeyiniz.** :no_smoking: **Sigara Sağlığa Zararlıdır Bot Sigara İçmenizi Önermez!!!**'));
    }
    });

    client.on ('message', message => {
      if (message.content === prefix + "sunucuemojileri") {
        const emojiList = message.guild.emojis.map(e=>e.toString()).join(" **|** ");
        message.channel.send(emojiList);
      }
      })


      client.on('message', message => {
        if (message.content.toLowerCase() === prefix + "zekam") {
            var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın kardeşim"];
            var sonuc = sans[Math.floor((Math.random() * sans.length))];
            const embed = new Discord.RichEmbed()
            .addField(`***___Zekan___***`, `${sonuc}`)
            return message.channel.sendEmbed(embed);
        }
        });

        client.on('message', message => {
          if (message.content.toLowerCase() === prefix + "şans") {
              var sans = ["💎|💳|⌛ - Malesef Kaybettin", "⌛|⌛|💎 - Tüh Be Tekrar Dene", "💳|💎|💳 - Hadi Be Az Kaldı", "💎|💎|💎 - Helal Sana Hepsini Tutturdun", "💎|⌛|⌛ - Az Kaldı Merak Etme", "💳|💳|💳 - Profesyonelsin Dostum", "💎|💳|⌛ - Birdaki Sefere", "⌛|⌛|⌛ - Bu İşte Ustasın Dostum"];
               var sonuc = sans[Math.floor((Math.random() * sans.length))];
            const embed = new Discord.RichEmbed()
            .addField(`***___Şans___***`, `${sonuc}`)
            return message.channel.sendEmbed(embed);
        }
        });

        client.on('message', msg => {
  if (msg.content.toLowerCase() === 'beşiktaş')
    if (msg.author.type !== "group") {
      const beşiktaş = new Discord.RichEmbed()
      .setImage("https://goo.gl/KRfm45")
      .setColor(0x000000);
      return msg.channel.sendEmbed(beşiktaş);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'fenerbahçe')
    if (msg.author.type !== "group") {
      const fenerbahçe = new Discord.RichEmbed()
      .setImage("https://goo.gl/uX2Sqa")
      .setColor(0xf2fc36);
      return msg.channel.sendEmbed(fenerbahçe);
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'galatasaray')
    if (msg.author.type !== "group") {
      const galatasaray = new Discord.RichEmbed()
      .setImage("https://goo.gl/7TLZ8H")
      .setColor(0xff3338);
      return msg.channel.sendEmbed(galatasaray);
  }
});

client.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'döviz') {
var request = require('request');
request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var info = JSON.parse(body);
request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var euro = JSON.parse(body);
      message.channel.send(`Dolar satış: ${info.selling} \nDolar alış: ${info.buying} \n\nEuro satış: ${euro.selling}TL \nEuro alış: ${euro.buying}TL`)    }
})
    }
})
    }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
        setTimeout(() => {
    }, 1000);
    msg.react('🇦')
    msg.react('🇸')
            setTimeout(() => {
    }, 1500);
    msg.reply(' :regional_indicator_a: :regional_indicator_l: :regional_indicator_e: :regional_indicator_y: :regional_indicator_k: :regional_indicator_u: :regional_indicator_m: :regional_indicator_s: :regional_indicator_e: :regional_indicator_l: :regional_indicator_a: :regional_indicator_m:');
  }
});

client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
   if (command === "mcskin") {
                       var embed = new Discord.RichEmbed()
                      .setTitle(`**${args}** adlı kullanıcının skini:`)
                      .setImage(`https://minotar.net/armor/body/${args}/300.png`)
                      .setFooter(`${message.author.tag} Tarafından İstendi!!!.`, message.author.avatarURL)
                      .setColor('RANDOM');
                  return message.channel.send(embed)
   }
});

client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
   if (command === "mcavatar") {
                  const embed = new Discord.RichEmbed()
                      .setTitle(`**${args}** adlı kullanıcının avatarı:`)
                      .setImage(`https://cravatar.eu/avatar/${args}/100.png`)
                      .setFooter(`${message.author.tag} Tarafından İstendi!!!`, message.author.avatarURL)
                      .setColor('RANDOM');
                  message.channel.send(embed)
   }
});


client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "ters-yaz") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
        // Start with the character '!'
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send('Ters yazılacak yazıyı yazmalısın.');
        }

        const hastebin = require('hastebin-gen');
        const Discord = require('discord.js')
        exports.run = (client, message, args, tools) => {
          hastebin(args.join(' '), "js").then(r => {
              var hastLink = r
              const hastEmb = new Discord.RichEmbed()
              .setColor(0xFFF000)
        
              .setURL(hastLink)
              .addField('Link: ', `${hastLink}`)
               message.channel.send({embed: hastEmb})
          }).catch(console.error);  
        }
        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
        )
    }
});

client.on('message', message => {
  if (message.content === prefix + "kurabiye") {
      message.channel.sendMessage(`Kurabiye Severmisin? <@${message.author.id}>`)
      message.react("🍪")
  }
});

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "nsfw") {
if(message.channel.nsfw || message.channel.type === 'dm'){
 let embed = new Discord.RichEmbed()
 .setTitle('Sanırım Sapık Birisi Var Aramızda')
 .setColor(0x00AE86)
 .setImage(("https://cdn.boobbot.us/4k/4k"+ Math.floor(Math.random() * 1460)+".jpg"))
 message.channel.send(embed)
}
else{
     message.channel.send({embed: {
color: Math.floor(Math.random() * (0xFFFFAD + 2)),
description: ('Bu kanal NSFW kanalı değil.')
}})
}
}
});

client.on("message", message => {
  const dmchannel = client.channels.find("name", "botlog");
  if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
      dmchannel.sendMessage("", {embed: {
              color: 3447003,
              title: `Yazan Kullanıcı: ${message.author.tag}`,
              description: `${message.content}`
            }})
  }
  if (message.channel.bot) return;
});

client.on('message', message => {
  if (message.content.toLowerCase() === prefix + "espri") {
      var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa.", "Canım sıkkın kanka sonra gel"];
      var sonuc = sans[Math.floor((Math.random() * sans.length))];
      const embed = new Discord.RichEmbed()
      .addField(`***___Espri___***`, `${sonuc}`)
      return message.channel.sendEmbed(embed);
  }
  });

  client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "estetik-yaz") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[/]^_`ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}~';
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send('Estetik Yazılacak Yazıyı Yazmalısın!!!');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .join('')
        )
    }
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye'); 
  member.addRole(joinRole); 

  const channel = member.guild.channels.find('name', 'mod-log');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  channel.sendEmbed(embed); 
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'mod-log');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı')
  .setTimestamp()
  channel.sendEmbed(embed); 
});
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


client.login (process.env.BOT_TOKEN);
