// Setup all the events.
module.exports = (discordClient) => [
    /**
     * @requires module: ready
     */
    require('./ready'),
    /**
     * @requires module: messages
     */
    require('./messages'),
].forEach((eventObj) => 
    Object.keys(eventObj).forEach((value) => {
        const eventFunction = eventObj[value];
        eventFunction(discordClient);
    })
);