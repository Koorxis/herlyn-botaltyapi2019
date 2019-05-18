const Discord = require('discord.js');
exports.run = function(client, message, args) {
    if (message.author.id === "531118052419567668") {
    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send(':x: **DM Atacağın Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    if (!dm) return message.channel.send(':x: **DM Atcağım Yazıyı Unuttun!**');
    message.delete();
    const dmat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Sana Özel Bir Mesaj Geldi!')
    .addField('DM Atan :', `➽ <@${message.author.id}>`)
    .addField('DM İse :', `➽ ${dm}`)
    .setFooter('Direk Mesaj | Olympos ♅')
    dmkisi.sendEmbed(dmat);
    const dmtamam = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('İşlem Tamamlandı :white_check_mark:')
    .setFooter('Direk Mesaj | Olympos ♅')
    message.channel.sendEmbed(dmtamam);
    } else {
        message.channel.send(':x: **Bu Komutu Sadece Yapımcım Kullanabilir!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dmat',
  description: 'Özel komut.',
  usage: ''
};