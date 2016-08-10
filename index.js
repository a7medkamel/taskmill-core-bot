var Promise       = require('bluebird')
  , SlackBotProxy = require('taskmill-api-slackbot').BotProxy
  ;

process.on('uncaughtException', function (err) {
  console.error(new Date().toUTCString(), 'uncaughtException', err.message);
  console.error(err.stack);
});

function main() {
  return Promise
          .try(() => {
            return new SlackBotProxy();
          })
          .tap((proxy) => {
            return proxy.listen();
          });
}

if (require.main === module) {
  main();
}

module.exports = {
    main  : main
};