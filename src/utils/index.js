/**
 * Check if the message starts with the bot prefix.
 * If truth, then it means the user called the bot for a command.
 * 
 * @function calledSheriff
 * 
 * @param {String} messageContent - The content of the message.
 */
const calledSheriff = (messageContent) =>
    messageContent.startsWith(process.env.BOT_PREFIX);

/**
 * @function splitMessage
 * 
 * @param {string} messageContent - The message text content.
 */
const splitMessage = (messageContent) => {
    // Split the message in parts.
    const message = messageContent.trim().split(' ');

    // The bot prefix.
    const prefix = message[0];

    // The command itself.
    const command = message[1];

    // The options to the command.
    const commandArgs = message.slice(2, message.length);

    return {
        command,
        commandArgs
    };
};


// Exports all the util functions.
module.exports = {
    /**
     * @exports calledSheriff
     */
    calledSheriff,
    /**
     * @exports splitMessage
     */
    splitMessage,
};