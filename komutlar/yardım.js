const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Ön Komutlar**\n\n\n' + '``o!anakomutlar`` = Anakomutları Gösterir.\n``o!afk sebep`` = AFK Olarak Kaydedilirsiniz.\n``o!müzikyardım`` = Müzik Komutları Yardım Kanalını Açar. \n``o!sunucuresmi`` = Sunucunun Resmini Gösterir.',
              '**Eğlence**\n\n\n' + '``-``  o!aşk @kullanıcı Seçilen Kişi Ile Aşk Seviyenizi Ölçer\n``-`` o!radyo = Radyo Dinlersiniz.\n``-``  o!tkm Taş Kağıt Makas Oynarsınız. \n ``-``  o!avatar @kullanıcı = Seçilen Kişinin Avatarını Gösterir. \n``-``  o!avatarım Avatarınızı Gösterir. \n``-``  o!nahçek @kullanıcı = Seçilen Kullanıcıya Nah Çekersiniz \n``-``  o!oylama Sebep = Oylama Yaparsınız. \n ``-`` o!espri = Bot Espiri Yapar.\n ``-`` o!afk sebep = AFK Olarak Belirtilirsiniz. \n ``-`` o!kaçcm = Malın Boyunu Söyler!\n ``-`` o!geldim = AFK Komutunu Bozar.',
              '**Yetkili**\n\n\n' + '``-``  o!ban @kullanıcı sebep = Seçilen Kişiyi Sunucudan Yasaklar.\n``-`` o!herkese-rol-ver = Seçilen Rolü Herkese Verir!\n``-`` o!herkesten-rol-al = Seçilen Rolü Herkesten Alır.!\n``-``  o!kick @kullanıcı Sebep = Seçilen Kişiyi Sunucudan Atar.\n ``-``  o!uyar @kullanıcı Sebep = Seçilen Kişiyi Uyarır. \n``-`` o!linkengelle aç/kapat Hertürlü Reklam veya Linkleri Engeller.\n``-``  o!unban ID Sebep = Yazılan ID Sahibinin Yasağını Kaldırır. \n ``-`` o!discorolu @rol = Disco Başlatmak Için Rol Seçersiniz. \n``-`` o!slowmode = Komutu kullanan kanala yavaş mod özelliği ayarlar.\n ``-`` o!disco = Disko Başlatır.\n ``-`` o!suncutanıt = Sunucunuzu Destek Sunucusunda Paylaşır.\n``-``  o!sustur @kullanıcı süre = Seçilen Kullanıcıya Süreli Mute Atar. \n ``-`` o!unmute @kullanıcı Sebep = Seçilen Kişinin Susturmasını Kaldırır. \n``-``  o!sil/temizle Miktar = Seçile Miktarda Mesaj Siler.\n``-`` o!küfürengel aç/kapat = Küfür Korumasını Açarsınız.',
              '**Bilgi**\n\n\n' + '``-`` o!sunucu = Sunucu Bilgisini Gösterir. \n``-`` o!kullanıcıbilgim = Kullanıcı Bilginizi Gösterir. \n``-``  o!yapimcim = Yapımcımı Gösterir. \n``-``  o!ping = Botun Pingini Gösterir.',			  
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["y", 'halp', 'yrdm', 'yardim', 'help'],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};