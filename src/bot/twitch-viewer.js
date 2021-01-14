const puppeteer = require('puppeteer');
const { launchOptions, loginCookies } = require('../configuration/browserConfiguration.json');

function readBooleanConfig(value) {
  if (value.toLowerCase() == 'false') return false;
  return true;
};

const twitchViewer = {
  browser: null,
  page: null,
  launchOptions: launchOptions,
  loginCookies: loginCookies,
  authToken: process.env.AUTH_TOKEN,
  twitchUrl: 'https://www.twitch.tv',
  channels: process.env.CHANNELS,

  initialize: async () => {
    var width = parseInt(process.env.WIDTH) || 1920;
    var height = parseInt(process.env.HEIGHT) || 1080;
    var headless = process.env.HEADLESS || true;

    twitchViewer.launchOptions.defaultViewport = { width, height };
    twitchViewer.launchOptions.headless = typeof headless == "boolean" ? headless : readBooleanConfig(headless);

    console.log('Opening browser...'.blue);

    twitchViewer.browser = await puppeteer.launch(twitchViewer.launchOptions);

    twitchViewer.page = (await twitchViewer.browser.pages())[0];

    console.log('Setting cookies...'.blue);

    twitchViewer.loginCookies.value = twitchViewer.authToken;

    await twitchViewer.page.setCookie(twitchViewer.loginCookies);
  },

  isLogged: async () => {
    console.log('Verifying login...'.blue);

    await twitchViewer.page.goto(`${twitchViewer.twitchUrl}/login`, {
      waitUntil: 'networkidle2',
      timeout: 0
    });

    const url = twitchViewer.page.url();

    if (url.split('/').last != 'login')
      return true;

    console.log('Login failed'.red);

    return false;
  },

  openChannels: async () => {
    const channels = twitchViewer.channels.split(',');

    var hasOnePage = true;

    for (const channel of channels) {
      const channelUrl = `${twitchViewer.twitchUrl}/${channel}`;

      console.log(`Loading ${channelUrl}`.blue);

      if (hasOnePage) {
        await twitchViewer.page.goto(channelUrl, { waitUntil: 'networkidle2', timeout: 0 });
        hasOnePage = false;
      }

      else {
        const page = await twitchViewer.browser.newPage();
        await page.goto(channelUrl, { waitUntil: 'networkidle2', timeout: 0 });
      }
    }
    console.log(`Watching all the ${channels.length} channels!`.green);
  },
};

module.exports = twitchViewer;
