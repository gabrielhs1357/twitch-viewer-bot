const puppeteer = require('puppeteer');
const { launchOptions, loginCookies } = require('../configuration/browserConfiguration.json');

var matureContentWarningSelector = '#root > div > div.Layout-sc-nxg1ff-0.gnrDvI > div.Layout-sc-nxg1ff-0.iNmjIQ > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.InjectLayout-sc-588ddc-0.iTtXFV.persistent-player > div > div.Layout-sc-nxg1ff-0.eVxqWI.video-player > div > div > div > div > div:nth-child(7) > div > div.Layout-sc-nxg1ff-0.imInLb.content-overlay-gate__allow-pointers > button';

function readBooleanConfig(value) {
  if (value == null || value.toLowerCase() == 'true') return true;
  else if (value.toLowerCase() == 'false') return false;
  throw new Error(`Invalid configuration variable: ${value}`);
};

const twitchViewer = {
  initialize: async (accountSetup) => {
    twitchViewer.browser = null;
    twitchViewer.page = null;
    twitchViewer.launchOptions = launchOptions;
    twitchViewer.loginCookies = loginCookies;
    twitchViewer.authToken = accountSetup.accountToken;
    twitchViewer.twitchUrl = 'https://www.twitch.tv';
    twitchViewer.channels = accountSetup.channels;

    twitchViewer.launchOptions.defaultViewport = null;
    twitchViewer.launchOptions.headless = readBooleanConfig(process.env.HEADLESS);

    if (process.env.HEADLESS?.toLowerCase() != 'false') launchOptions.args.push("--window-size=1920,1080");

    console.log(`Opening browser for ${accountSetup.accountName}...`.blue);

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
    const channels = twitchViewer.channels;

    var hasOnePage = true;

    for (const channel of channels) {
      const channelUrl = `${twitchViewer.twitchUrl}/${channel}`;

      console.log(`Loading ${channelUrl}`.blue);

      async function confirmMatureContentWarning() {
        const button = await twitchViewer.page.$(matureContentWarningSelector, { timeout: 5000 });
        if (button) {
          console.log(`Confirming mature content warning for ${channel}...`.blue);
          await button.click();
        }
      }

      if (!hasOnePage)
        twitchViewer.page = await twitchViewer.browser.newPage();
      else
        hasOnePage = false;

      await twitchViewer.page.goto(channelUrl, { waitUntil: 'networkidle2', timeout: 0 });

      await confirmMatureContentWarning();
    }
    console.log(`Watching all the ${channels.length} channel(s)!`.green);
  },
};

module.exports = twitchViewer;
