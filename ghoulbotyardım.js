const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()

  .setTitle("Bot Komutları")
  .setAuthor("Ghoul Bot | Yapımcı Meriç", "")
  .setColor("RANDOM")
  .setDescription('-davet • Botun davet linkini atar.\nYeni Kodlar Gelicek\n \n-ping • Botun pingini gösterir.\n-sunucubilgi • Bu komutu hangi sunucuda kullanıysanız oranın bilgisini verir.\n-tavsiye • Botun sahibine verdiğiniz tavsiyeyi gönderir.\n')
  .setFooter("")
  .setThumbnail("")
  .setTimestamp()

  .addField("Moderasyon Komutları", "-ban • Belirttiğiniz kişiyi sunucudan banlar.\n-kick • Belirttiğiniz kişiyi sunucudan atar. \n-unban • Belirttiğin kişinin sunucudaki yasağını kaldırır.\n-oylama • Oylama Açarsınız.\n-kilit = Odayı belirttiğiniz süre kadar kilitler.")
  .addField("Eğlence Komutları", "-banned = Dene ve Gör. \n-söv • Etiketlediğiniz kişiye Feci Şekilde Söver.\n-yaz • Bota istediğiniz şeyi yazdırır. \n-8ball • Dene Ve Gör.\n-ağla • Ağlarsınız.\n-pcaç • Bilgisayarı Açar. \n-çayiç • Çay İçersiniz.\n-banned • Dene Ve Gör. \n-zekam = Zekanızı gösterir. \n-şans = Şansınızı gösterir. \n-halayçek = Halay çekersiniz biraz geç atabilir resmi. \n-herkesebendençay = Herkese çay alırsınız. \n-çayaşekerat = Çaya şeker atarsınız \n-emojiyazı = Harfle veya yazıyla emoji yazdırırsınız. \n-woodie = Woodie hakkında bilgi verir. \n-twerk = Twerk yaparsınız. \n-yazıtura = Yazıtura oynarsınız. \n-yumruh-at = Yumruk atarsınız. \n-koş = Koşarsınız. \n-öldür = İstediğiniz kişiyi öldürürsünüz. \n-bayrak = Türk bayrağı gösterir. \n-balıktut = Balık tutarsınız sazan gibi \nbeşiktaş = Beşiktaş resmi atar. \ngalatasaray = Galatasaray resmi atar. \nfenerbahçe = Fenerbahçe resmi atar. \n-sunucuemojileri = O sunucunun emojilerini gösterir. -kaccm = Profil fotoğrafının kaç cm oldığunu gösterir. Devamı: https://hastebin.com/fajopinuja.bash", true)
  .addBlankField(true)
  .addField(" Kullanıcı Komutları", "• Yeni Kodlar Gelicek \n-kullanıcıbilgim • Bu komutu kullanan her kimse hakkında bilgi verir. \n-döviz = Doların satışı ve euronun satışını ve alışını gösterir. \n-ters-yaz = Bota ters yazı yazdırırsınız.", true)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bot ile ilgili komut listesini verir.',
  usage: 'yardım'
};
