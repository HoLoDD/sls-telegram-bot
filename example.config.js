/**
 * "dev" and "prod" environment configurations
 */
module.exports.configuration = {
    /**
     * Config loaded while testing (polling mode)
     */
    dev: {
        token: 'TOKEN', // get your token from @BotFather
    },
    /**
     * Config loaded in AWS Lambda (webhook mode)
     */
    prod: {
        token: 'TOKEN', // get your token from @BotFather
        /**
         * Paste the url you get with "npm run deploy"
         * then run "npm run setHook".
         */
        endpoint: 'URL',
    },
};
