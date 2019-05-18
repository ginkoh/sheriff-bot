/**
 * Check if the message starts with the bot prefix.
 * If truth, then it means the user called the bot for a command.
 * 
 * @function calledSheriff
 * 
 * @param {String} messageContent - The content of the message.
 * 
 * @returns {Boolean}
 */
const calledSheriff = (messageContent) => {
    // Create a new regex expression with the bot prefix regex. This makes sure
    // the bot will give a response even if the user type the bot's name in a
    // wrong way.
    const botPrefix = new RegExp(process.env.BOT_PREFIX);

    // Get the first part of the message
    const message = messageContent.split(' ')[0];

    // Test the regex returning a boolean.
    return botPrefix.test(message);
};

/**
 * @function splitMessage
 * 
 * @param {string} messageContent - The message text content.
 * 
 * @returns {Object}
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