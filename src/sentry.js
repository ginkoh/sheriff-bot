/**
 * @exports sentry
 */
module.exports = () => {
    // Require the Sentry library.
    const Sentry = require("@sentry/node");
    // Init the Sentry app.
    Sentry.init({ dsn: process.env.SENTRY_DSN });
};