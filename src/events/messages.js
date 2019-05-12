// Modules.
const Messages = require('../modules/messages');

/**
 * @function onMessage
 * 
 * @param {*} discordClient 
 */
const onMessage = (discordClient) =>
    discordClient.on('message', (message) => {
        if (!Messages.messageIsFromClient(message, discordClient)) {
            message.reply(message.content);
        }
    });

// Exports all the message events.
module.exports = {
    /**
     * @exports onMessage
     */
    onMessage
};

