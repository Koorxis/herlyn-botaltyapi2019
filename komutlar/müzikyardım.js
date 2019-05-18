const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`OlymposBot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`Olympos Bot - Müzik Komutları`, `:white_small_square: | **o!play**: Istediğiniz şarkıyı çalar.!\n:white_small_square: | **o!skip**: Mevcutta çalan şarkıyı geçer.!\n:white_small_square: | **o!stop**: Mevcutta çalan şarkıyı duraklatır.!\n:white_small_square: | **o!pause**: Mevcutta duraklatılmış şarkıyı devam ettirir.!\n:white_small_square: | **o!repeat**: Mevcutta çalan şarkıyı tekrarlar.!`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzikyardım', 'my'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'müzikyardım',
    description: 'müzikyardım',
    usage: 'müzikyardım'
  };