const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online! Setting up webserver, status...`);
  console.log(`Process Finished!`)
  console.log(`Fort-Bot v1.1.0`)
  bot.user.setActivity("!cmds", {type: "STREAMING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}cmds`){
    
    let command = new Discord.RichEmbed()
    .setDescription("Commands")
    .setColor("#4cd82f")
    .addField("Information Commands", '!botinfo, !serverstats')
    .addField("Useless Commands", '!tellmeajoke')
    .addField("Fortnite Tracking", '(Coming soon.)')

    return message.channel.send(command);
  }

  
  if(cmd === `${prefix}serverstats`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Statistics")
    .setColor("#4cd82f")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("Member Count", message.guild.memberCount)

    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}tellmeajoke`){
    return message.channel.send("You.")
  }

  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#4cd82f")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Bot Creation Time", bot.user.createdAt)
    .addField("Bot Version", 'v1.0.1')
    .addField("Troubleshooting", 'Contact Developer (Commander Microsoft#2837)')
    return message.channel.send(botembed);
  }


});

bot.login(botconfig.token);
