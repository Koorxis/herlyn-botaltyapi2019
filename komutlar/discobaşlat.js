1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
  

  if (!msg.member.hasPermission ("ADMINISTRATOR")) return msg.reply(`Bu Komutu Kullanmak İçin **Yönetici** İznine Sahip Olmalısın!`);
  
  let discoR = await db.fetch(`discorol_${msg.guild.id}`);
   setInterval(() => {
  msg.guild.roles.find('name', discoR).setColor("RANDOM");
   }, 4000);
msg.channel.send(`**Olympos ♅** Disco Başlatıldı!`)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['disko'],
  kategori: 'ayarlar',
    permLevel: 3
}

exports.help = {
    name: 'disco',
    description: 'Disco',
    usage: 'disco'
}