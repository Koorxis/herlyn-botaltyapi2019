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
29
30
31
32
33
34
35
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let discorol = message.mentions.roles.first()
  

  if (!discorol) {
    return message.channel.send(` Disco Rol Olarak Ayarlamak İstediğin Rolü Etiketlemelisin.`)
    }
    
  
  
  db.set(`discorol_${message.guild.id}`, discorol.name)
  
    message.channel.send(`Disco Rolü \`${discorol.name}\` Olarak Ayarlandı.`)
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['disco-rol'],
  kategori: 'ayarlar',
    permLevel: 0
}

exports.help = {
    name: 'discorolu',
    description: 'Disco Rolünü Ayarlar.',
    usage: 'discorolu <@rol>'
}