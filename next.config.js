const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

// dotenvLoad will look for .env file and load all the variable in
dotenvLoad()

// nextEnv will load the plugIn 
const withNextEnv = nextEnv()
/**
 * it will look like this
 * {
 *  env:{
 *    HELP_APP_URL:https://google.com
 *  }
 * }
 * 
 */
module.exports = withNextEnv()