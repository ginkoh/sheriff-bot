// Require the discord.js lib.
const Discord = require('discord.js');

// Create a new discord client.
const discordClient = new Discord.Client();

// Setup Sentry to notify errors.
const Sentry = require("@sentry/node");
Sentry.init({ dsn: "https://fab5553e98174c03823b8c6cd33c0ec3@sentry.io/1457444" })

// Config the enviroment variables.
require('dotenv').config();

// Hold the entire env process variables.
const env = process.env;
// Hold the bearer discord bot token.
const token = env.TOKEN;

// Bot files.
const Messages = require('./messages');

// Checks if the bot started.
discordClient.on('ready', () => {
    console.log(`Logged in as ${discordClient.user.tag}`);
});

/**
 * Bot events.
 */

// On message event.
discordClient.on('message', (message) => {
    if (!Messages.messageIsFromClient(message, discordClient)) {
        console.log(message);
        message.reply(message);
    }
});

// Start the bot.
discordClient.login(token);