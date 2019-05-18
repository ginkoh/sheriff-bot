// The array of events to be executed.
const eventsArr = [
    /**
    * @requires module: ready
    */
    require('./ready'),
    /**
     * @requires module: messages
     */
    require('./messages'),
];

/**
 * Iterate over all the events and execute them, passing
 * the discordClient as an argument.
 * 
 * @function executeEvents
 * 
 * @param {Object[]} eventsArr - The array of "socket" like events.
 * 
 * @returns {undefined}
 */
const executeEvents = (eventsArr, discordClient) =>
    eventsArr.forEach((eventObj) =>
        Object.keys(eventObj).forEach((value) =>
            eventObj[value](discordClient)
        )
    );

/**
 * @exports registerEvents
 * 
 * @param {*} discordClient - The discord bot client instance.
 */
module.exports = (discordClient) =>
    executeEvents(eventsArr, discordClient);