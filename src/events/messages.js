const Messages = require('../modules/messages');


module.exports = {
    onMessage: (discordClient) =>
        discordClient.on('message', (message) => {
            if (!Messages.messageIsFromClient(message, discordClient)) {
                message.reply(message);
            }
        })
};

