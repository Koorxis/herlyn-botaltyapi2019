const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{


   let logkanali = message.mentions.channels.first();
   if (!logkanali) message.channel.send('Bir Log Kanalı Belirlemelisin')

   db.set(`davetk_${message.guild.id}`, message.mentions.channels.first().id).then(i => {

    message.channel.send(`:white_check_mark: Davet kanalı Başarıyla <#${i}> olarak ayarlandı.`)    
   })
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['davet-kanal-ayarla'],
 permLevel: 0
};

exports.help = {
 name: 'davet-kanalı-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};