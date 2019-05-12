/**
 * Reply to a message in the same channel as the sender.
 * 
 * @function replyMessage
 * 
 * @param {*} message 
 * @param {*} options 
 */
const replyMessage = (message, options = undefined) =>
    message.reply(message, options);

/**
 * Fetch, iterates over, and deletes all the messages from a given channel.
 * 
 * @function deleteAllMessages
 * 
 * @param {*} channel
 */
const deleteAllMessages = async (channel, limit = 100) => {
    if (limit <= 100) {
        try {
            // Fetch all the messages.
            const messages = await channel.fetchMessages({ limit });
            // Delete every message.
            messages.forEach((message) => message.delete());
        } catch (err) {
            // Send the error message to the channel.
            channel.sendMessage('Cannot fetch messages due to an error.');
            // Throw a new error.
            throw new Error(err);
        }
    } else {
        // Set the custom error message.
        const errorMessage = "Cannot delete more than 100 messages.";
        // Send the error message to the channel.
        channel.sendMessage(errorMessage);
        // Throw a new error.
        throw new Error(errorMessage);
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
            // Send a message to confirm that the previous message was deleted.
            deletedMessage.channel.sendMessage(`Deleted message from ${deletedMessage.author.username}`);
    }).catch((err) => {
        // Send the error message to the channel.
        message.channel.sendMessage('Error: Cannot delete message due to error');
        // Throw a new error.
        throw new Error(err);
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
     * @exports deleteAllMessages
     */
    deleteAllMessages,
    /**
     * @exports deleteMessageFromSender
     */
    deleteMessageFromSender,
    /**
     * @exports messageIsFromClient
     */
    messageIsFromClient,
    /**
     * @exports replyMessage
     */
    replyMessage,
};