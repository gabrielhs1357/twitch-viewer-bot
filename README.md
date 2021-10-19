<p align="center">
   <img src=".github/logo.png" width="200"/>
</p>

# Twitch Viewer Bot

[![Author](https://img.shields.io/badge/author-Gabriel%20Silva-6441A5?style=flat-square)](https://github.com/gabrielhs1357)
[![License](https://img.shields.io/github/license/gabrielhs1357/twitch-viewer-bot?color=6441A5&style=flat-square)](https://github.com/gabrielhs1357/twitch-viewer-bot/blob/main/LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/gabrielhs1357/twitch-viewer-bot?color=6441A5&style=flat-square)](https://github.com/gabrielhs1357/twitch-viewer-bot/commits/main)

> Keep watching your favorite streamers 24/7!

<p align="center"><img src=".github/gif.gif?raw=true" width="1000"/></p>

---

## :pushpin: Table of Contents

* [Features](#rocket-features)
* [Technologies](#computer-technologies)
* [Getting Started](#construction_worker-getting-started)
* [License](#closed_book-license)

## :rocket: Features

* 💜 Watch your favorite streamers 24/7.
* 👤 Stay logged while watching.
* 💰 Earn points on Stream Elements stores of your streamers.

## :computer: Technologies

- [Node.js](https://nodejs.org/en) and [Puppeteer](https://github.com/puppeteer/puppeteer).

## :construction_worker: Getting Started

**First of all, make sure that you have installed [Node.js](https://nodejs.org/en/download/) and [YARN](https://classic.yarnpkg.com/en/docs/install#windows-stable), so you can go ahead with the following steps:**

1. Clone the project:

   ```
   git clone https://github.com/gabrielhs1357/twitch-viewer-bot.git
   ```
   
2. Install the dependencies:

   ```
   yarn
   ```
   
3. Create a copy of `.env.sample` file and rename it to `.env`.

4. Set up your `.env` file. Here's a brief explanation of each variable and an example:

- AUTH_TOKEN: this will allow you to open Twitch and already be signed in. You can find your auth token on the cookies of your browser. Go to `http://twitch.tv`, sign in using your Twitch account and find your auth token at your `browser developer tools -> cookies -> auth-token`.
- CHANNELS: put all the channels that you want the bot to be watching separated by commas.
- HEADLESS: Puppeteer launches Chromium in headless mode (true) by default, but you can set this behavior using this variable. Remember this is an **optional** variable and the default value is **true**.
    
    ```shell    
    AUTH_TOKEN=your_auth_token
    CHANNELS=channel_1,channel_2,channel_3
    HEADLESS=true_or_false
    ```

5. Start the application in development environment:

    ```shell    
    yarn dev
    ```
    
## :closed_book: License

This project is under the [MIT license](https://github.com/gabrielhs1357/twitch-viewer-bot/blob/master/LICENSE).

---

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Made with 💜 by <a href='https://github.com/gabrielhs1357'>Gabriel Silva</a>.</p>
