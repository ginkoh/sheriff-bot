/**
 * @function onReady
 * 
 * @param {*} discordClient
 */
const onReady = (discordClient) =>
    discordClient.on('ready', () => {
        console.log(`Logged in as ${discordClient.user.tag}`);
    });

module.exports = {
    /**
     * @exports onReady
     */
    onReady
        
};