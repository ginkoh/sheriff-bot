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




// Exports all the util functions.
module.exports = {
    /**
     * @exports calledSheriff
     */
    calledSheriff,
};