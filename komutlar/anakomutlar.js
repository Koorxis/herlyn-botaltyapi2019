const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("")
  .setTitle("**Avatar The Last Airbender**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Ana Komutlar**", ` **&müzikyardım** = Müzik Komutlarını Gösterir.\n**&us aç/kapat** = Kullanılan Kanalda Bot Yazılarını Yaklaşık 7.5 Saniye Sonra Otomatik Siler.\n**&reklamtaraması** = Oynuyor Yerinde Reklam Yapanları Bulur.\n**&yardım** = Bot komutlarını atar. \n**o!bilgi** = Bot kendisi hakkında bilgi verir.`)
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ana', 'ak', '3'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: 'Ana komutları gösterir.',
  usage: 'anakomutlar'
};
