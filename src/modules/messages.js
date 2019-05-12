/**
 * Fetch, iterates over, and deletes all the messages from a given channel.
 * 
 * @function deleteAllMessages
 * 
 * @param {*} channel
 */
const deleteAllMessages = async (channel, limit = 100) => {
    // Fetch all the messages.
    const messages = await channel.fetchMessages({ limit });

    // Delete every message.
    messages.forEach((message) => message.delete())
};

/**
 * Deletes the message from the sender of the message.
 * 
 * @function deleteMessageFromSender
 * 
 * @param {*} message - The message from the sender.
 */
const deleteMessageFromSender = (message) => {
    return message.delete().then((deletedMessage) => {
        console.log(`Deleted message from ${deletedMessage.author.username}`);
    }).catch((e) => {
        console.log('Error: Cannot delete message due to reasons.', e)
    });
};

/**
 * Checks if the message is from the client, which avoid the bot
 * replying himself (this behavior can cause a loop).
 * 
 * @function messageIsFromClient
 * 
 * @param {*} author - The author of the message.
 * @param {*} client - The discord bot client instance.
 * 
 * @returns {Boolean}
 */
const messageIsFromClient = (message, client) =>
    message.author.username === client.user.username;

// Exports all the "messages" related functions.
module.exports = {
    /**
     * @exports deleteMessageFromSender
     */
    deleteMessageFromSender,
    /**
     * @exports messageIsFromClient
     */
    messageIsFromClient,
    /**
     * @exports deleteAllMessages
     */
    deleteAllMessages
};