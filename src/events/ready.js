
module.exports = {
    onReady: (discordClient) =>
        discordClient.on('ready', () => {
            console.log(`Logged in as ${discordClient.user.tag}`);
        })
};