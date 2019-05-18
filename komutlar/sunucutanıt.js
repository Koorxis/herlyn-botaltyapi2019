const Discord = require('discord.js')
const fs = require('fs');
const ms = require("ms")
const db = require('quick.db')
exports.run = async (client, message, args) => {
  	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`hs!sunucutanıt` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu Komutu kullanmanız için `Sunucu_Yönet` Yetkisine sahip olmalısınız.")
    let kullanildii = JSON.parse(fs.readFileSync('./sunucutanıt.json', 'utf8'));
  if (!kullanildii[message.guild.id]) kullanildii[message.guild.id] = {
    gunlukkullanim: 0
  }
  if (kullanildii[message.guild.id].gunlukkullanim == 0)
  {
        const embed = new Discord.RichEmbed()
  .setTitle('BAŞARILI')
  .addField('Sunucu burada tanıtıldı->https://discord.gg/VEdj5Kf')
  .addField('12 saat Sonra sunucunuzu Tekrardan Tanıtabilirsiniz.')
  .addField('Sunucunu tanıtabilmek için beni ekle! https://discordapp.com/oauth2/authorize?client_id=554616073283174400&scope=bot&permissions=805314622')
  .setColor('GREEN')
 message.channel.sendEmbed(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.RichEmbed()
            .addField(` Sunucu Sahibi`, message.author.tag, true)
            .addField(` Sunucu İsmi`, message.guild.name, true)
      .addField(` Sunucudakı Üye Sayısı`, message.guild.members.size, true)
      .addField(` Sunucu Davet Linki`, invite.url, true)
            .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL)
       client.channels.get('558292959540412427').send(embed)
            });
  kullanildii[message.guild.id].gunlukkullanim = 1
    
  fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  return
  }
  setTimeout(async() => {
    kullanildii[message.guild.id].gunlukkullanim = 0
    fs.writeFile('./sunucutanıt.json', JSON.stringify(kullanildii), (err) => {
      if (err) console.error(err)
    })
  }, ms('12h'));
  
  if (kullanildii[message.guild.id].gunlukkullanim == 1)
  {
  message.channel.send({embed: {
      description: '**Sunucutanıt Başarısız oldu**\n\nBu komut zaten kullanılmış!\n\nSunucunu 12 saate 1 defa tanıtabilirsin!\n\n[Hodrige Society ψ](https://discord.gg/VEdj5Kf) \n[Beni Sunucuna Ekleyebilmek İçin Tıklaman Yeterli!](https://discordapp.com/oauth2/authorize?client_id=554616073283174400&scope=bot&permissions=805314622)'
            }});
  }
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['214324sunucutanıt'],
    permLevel: 2,
}

exports.help = {
    name: '2434sunucunutanıt',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: '214231sunucutanıt'
}