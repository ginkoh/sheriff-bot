/**
 * Fetch, iterates over, and deletes all the messages from a given channel.
 * 
 * @function deleteAllMessages
 * 
 * @param {*} channel
 */
const deleteAllMessages = async (channel, limit = 100) => {
    try {
        if (limit <= 100) {
            // Fetch all the messages.
            const messages = await channel.fetchMessages({ limit });
            // Delete every message.
            messages.forEach((message) => message.delete());
        } else {
            channel.sendMessage('Cannot delete more than 100 messages.');
        }
    } catch (err) {
        channel.sendMessage('Cannot fetch users due to an error.');
    }
};

/**
 * Deletes the message from the sender of the message.
 * 
 * @function deleteMessageFromSender
 * 
 * @param {*} message - The message from the sender.
 */
const deleteMessageFromSender = (message, shouldSendConfirmMessage) => {
    return message.delete().then((deletedMessage) => {
        if (shouldSendConfirmMessage)
            deletedMessage.channel.sendMessage(`Deleted message from ${deletedMessage.author.username}`);
    }).catch((e) => {
        message.channel.sendMessage('Error: Cannot delete message due to error');
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