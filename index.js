
/**
 * General shit
 */
console.log('starting nerdbot');

const Discord = require("discord.js");
const client = new Discord.Client(); 

const config = require("./config.json")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

/**
 * Members joining
 */
client.on("guildMemberAdd", member =>{
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user}`);
});


/**
 * Commands
 */
const prefix = "~";

client.on('message', msg => {
if(!msg.content.startsWith(config.prefix)) return;

let command = msg.content.split(" ")[0];
command = command.slice(config.prefix.length);


let args = msg.content.split(" ").slice(1);

if(command === 'say'){
    msg.channel.sendMessage(args.join(" "));
}

if (command === 'ping'){
    msg.channel.sendMessage('Pong!');  
    }

  if(command === 'help'){
      msg.channel.sendMessage(' ``` **Current commands:** \n ~help : displays this message \n ~nerdbotgtfo : shuts nerdbot down, (keyd to rapid currently) \n' 
      + ' ~say: returns your message ``` ');
  }
  if(command === 'nerdbotgtfo'){
      msg.channel.sendMessage('WELL BYE THEN');
  }
})

/**
 * Login shit
 */
client.login(config.token);