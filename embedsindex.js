//Hey! This is a basic code for a working discord bot using Discord.js

const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js");


//When the bot is online
client.on("ready", async () => {
  console.log(`Online!}`);

  //activity status------------------------------------------------
  client.user
    .setActivity(`Netflix`, { type: "WATCHING" })
    .catch(error => console.log(error));
});

//commands
client.on("message", message => {
  if(message.content === 'cmd1'){
    message.channel.send('cmd1 works!!!');
  } else if (message.content === 'cmd2') {
    message.channel.send('cmd2 works!!!');
  } else if (message.content === 'embed') {
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Enter your title here!")
    .setDescription("Enter your description here!")
    .setFooter("Enter your footer here!")
    .setTimestamp()
    
    message.channel.send(embed)
  }
}


//Bot Login
//Enter your bot's token in 'YOUR BOT TOKEN'
client.login('YOUR BOT TOKEN')
