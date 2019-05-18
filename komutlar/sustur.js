const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  ///o!sustur @üye 1s/m/h/d | 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Doğru Kullanım: o!sustur [@oyuncu] [süre] Bilgi:\no!sustur @üye 1s/m/h/d | 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Hata : Geçici olarak susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi geçici olarak susturmaya yetmiyor!");
let muterole = message.guild.roles.find(r => r.name === "Susturuldu!");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Susturuldu!",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Doğru Kullanım: o!sustur [@oyuncu] [süre]");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> sohbet kapatıldı! ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Kişinin susturulma süresi dolduğu için mutesi kaldırıldı!`);
  }, ms(mutetime));



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sustur', 'gsustur', 'mute'],
  permLevel: 2
};

exports.help = {
  name: 'sürelimute',
  description: 'Sureli Susturur.',
  usage: 'sustur [Kullanıcı] [Süre]'
};


//Hodrige Society ψ Bot