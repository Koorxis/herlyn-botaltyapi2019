const Discord = require('discord.js');

exports.run = (client, message, args) => {
      let users = client.users;
      let searchTerm = args[0];
      if(!searchTerm) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Kullanıcı ara;').setDescription(message.author.tag + ', kullanım: >avatar <mesaj>.').setFooter('YoungCrew', client.user.avatarURL).setTimestamp());
      let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
      message.channel.send(`Bulunan Arama sonuçları;\n:arrow_right:` + matches.map(u => u.tag).join(',\n:arrow_right: '));
        };
        exports.conf = {
          enabled: true,
          guildOnly: false,
          aliases: ['kullanıcı-bul', 'üye-ara'],
          permLevel: "0"
        };

        exports.help = {
          name: "kullanıcıara",
          description: "yazdığınız kullanıcıyı arar",
          usage: "kullanıcıara"
        };