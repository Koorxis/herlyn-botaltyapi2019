module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş Geldin^^ **' + username + '**!');
    member.guild.defaultChannel.send('Hoş Geldin^^ '+username+'');
};
