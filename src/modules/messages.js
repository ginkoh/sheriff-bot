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
 * 
 * @returns {Number}
 */
const deleteAllMessages = async (channel, limit = 100) => {
    if (limit <= 100) {
        try {
            // Fetch all the messages.
            const messages = await channel.fetchMessages({ limit });

            // Delete every message.
            messages.deleteAll();

            // Return the ammount of messages deleted.
            return messages.size;
        } catch (err) {
            // Send the error message to the channel.
            channel.send('Cannot fetch messages due to an error.');
            // Throw a new error.
            throw new Error(err);
        }
    } else {
        // Set the custom error message.
        const errorMessage = "Cannot delete more than 100 messages.";
        // Send the error message to the channel.
        channel.send(errorMessage);
    }
};

/**
 * Deletes the message from the sender of the message.
 * 
 * @function deleteMessageFromSender
 * 
 * @param {*} message - The message from the sender.
 * 
 * @returns {Promise<(Message|Array<Message>)>}
 */
const deleteMessageFromSender = (message, shouldSendConfirmMessage) =>
    message.delete().then((deletedMessage) => {
        if (shouldSendConfirmMessage)
            // Send a message to confirm that the previous message was deleted.
            return deletedMessage.channel.send(
                `Deleted message from ${deletedMessage.author.username}`
            );
    }).catch((err) => {
        // Send the error message to the channel.
        message.channel.send('Error: Cannot delete message due to error');
        // Throw a new error.
        throw new Error(err);
    });

/**
 * Checks if the message is from the client, which avoid the bot
 * replying himself (this behavior can cause a loop).
 * 
 * @function messageIsFromClient
 * 
 * @param {*} message - The message itself.
 * 
 * @returns {Boolean}
 */
const messageIsFromClient = (message) => message.author.bot;

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