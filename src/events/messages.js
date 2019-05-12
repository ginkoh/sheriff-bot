// Modules.
const Messages = require('../modules/messages');
const Utils = require('../utils/index');

/**
 * @function onMessage
 * 
 * @param {*} discordClient 
 */
const onMessage = (discordClient) =>
    discordClient.on('message', (message) => {
        if (Messages.messageIsFromClient(message) || !Utils.calledSheriff(message.content))
            return;
        else {
            switch (Utils.splitMessage(message.content).command) {
                case "deleteAll":
                    Messages.deleteAllMessages(message.channel, 99).then((messagesLength) => {
                        message.channel.send(messagesLength + ' messages deleted');
                    });
                    break;
                case "deleteWithConfirm":
                    Messages.deleteMessageFromSender(message, true);
                    break;
                case "delete":
                    Messages.deleteMessageFromSender(message, false);
            }
        }
    });

// Exports all the message events.
module.exports = {
    /**
     * @exports onMessage
     */
    onMessage
};

