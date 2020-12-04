require('dotenv').config();
const path = require('path');
const { prefix } = require('./config.json');
const Commando = require('discord.js-commando');

const client = new Commando.CommandoClient({
  owner: '458989281126645771',
  commandPrefix: prefix
});

client.once('ready', () => {
  console.log(`${client.user.username} has logged in`);
  client.registry
    .registerGroups([
      'info', 'commands providing informations'
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'));
});

client.on('message', (message) => {
  if(message.mentions.users.first().username === 'Vanilla') {
    message.reply('Il prefisso per i comandi è `js`. Prova `jshelp` 😉');
  }
})

client.on('error', console.error);

client.login(process.env.ITALIAJS_BOT_TOKEN);
