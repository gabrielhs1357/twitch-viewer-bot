require('dotenv/config');
require('./middleware/datetimeMiddleware')();
require('colors');

const twitchViewer = require('../src/bot/twitch-viewer');

const accountsSetup = JSON.parse(process.env.ACCOUNTS_SETUP);

(async () => {
  for (const accountSetup of accountsSetup) {
    await twitchViewer.initialize(accountSetup);

    if (await twitchViewer.isLogged())
      await twitchViewer.openChannels();
  }
})();
