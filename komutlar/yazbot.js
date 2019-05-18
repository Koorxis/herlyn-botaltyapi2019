const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'yazbot63',
  description: '[Admin Komutu]',
  usage: 'yazbot36 [yazdırmak istediğiniz şey]'
};
