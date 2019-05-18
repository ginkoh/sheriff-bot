// Require the discord.js lib.
const Discord = require('discord.js');
// Create a new discord client.
const discordClient = new Discord.Client();

// Config the enviroment variables.
const env = require('dotenv').config();

// Hold the bearer discord bot token.
const token = process.env.TOKEN;

// Login module.
const login = require('./login');

// Sentry module.
const setupSentry = require('./sentry');

// Events modules.
const registerEvents = require('./events/index');

/**
 * @function startBot
 * 
 * @param {*} client 
 * @param {*} token 
 */
const startBot = (discordClient, token) =>
    new Promise((resolve) => {
        // Setup Sentry to notify errors.
        setupSentry();

        // Login with the bot credentials.
        login(discordClient, token);

        // Just resolves the promise.
        resolve();
    });

// Call the function to start the bot.
startBot(discordClient, token).then(() => {
    // Register all the bot events, like 'ready' event, 'message' event and so 
    // many others.
    registerEvents(discordClient, token);
}).catch((reason) => {
    console.log('Cannot login due to ', reason);
});

