require('dotenv/config');
require('./middleware/datetimeMiddleware')();
require('colors');
const twitchViewer = require('../src/bot/twitch-viewer');

(async () => {
  await twitchViewer.initialize();

  if (await twitchViewer.isLogged())
    await twitchViewer.openChannels();
})();
