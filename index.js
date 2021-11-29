const Discord = require('discord.js');
const client = new Discord.Client({
restTimeOffset: 0
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`Connected in ${client.guilds.cache.size} Server`);
  console.log(`Uses it ${client.users.cache.size} 
Server`);
});


client.on('message', function(message) {
let args = message.content.split(" ").slice('').join(" ");
if(message.author.bot)return;
const sugch = message.channel.id === 'CHANNEL_ID' // Channel ID
if (!sugch) return false;
if(message.content.startsWith('')){
  message.delete()
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag,message.author.avatarURL())
.setColor("#36393F") // EMBED COLOR
.setDescription(`>>> **${args}**`)
message.channel.send(embed).then(msg => {
  msg.react('✅').then( r => { // APPROVE EMOJI, IF YOU WISH TO ADD A CUSTOM EMOJI MAKE SURE TO ONLY USE THE EMOJI ID!!!
    msg.react('❌') // DENY EMOJI, IF YOU WISH TO ADD A CUSTOM EMOJI MAKE SURE TO ONLY USE THE EMOJI ID!!!
  })
})
}
});
client.login("BOT_TOKEN"); // LOGIN TO THE BOT
