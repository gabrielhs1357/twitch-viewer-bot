<div align="center">
    <h1>Twich Viewer Bot</h1>
    <img src="src\image\twitch-icon.png" width="150"/>
</div>

## Table of contents

- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [License](#license)
- [Author](#author)

## Description

This is a bot that watches live streams on Twitch! This is very useful if you want to watch some live streams and earn points for spending on their stores.

## Technologies

- [Node.js](https://nodejs.org)
- [Puppeteer](https://github.com/puppeteer/puppeteer)

## How to use

1. Clone this project.

3. Run `yarn` in order to install all the dependencies.

3. Create a copy of `.env.sample` file and rename it to `.env`.

4. Set up your `.env` file. Here's a brief exaplanation of each variable:

    The auth token will allow you to open Twitch and already be signed in. You can find your auth token on the cookies of your browser. Go to `http://twitch.tv`, sign in using your Twitch account and find your auth token at your `browser developer tools -> cookies -> auth-token`.

    ```shell    
    AUTH_TOKEN=your_auth_token
    ```

    Put all the channels that you want the bot to be watching, like the example below.

    ```shell    
    CHANNELS=channel_1,channel_2,channel_3
    ```

    Puppeteer launches Chromium in headless mode by default. You can set this option using the variable below. This is an **optional** variable.

    ```shell    
    HEADLESS=true_or_false
    ```

5. Run the project by typing `yarn start`.

## License

MIT License

Copyright (c) 2021 Gabriel Silva

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author

[linktr.ee/gabrielhs1357](https://linktr.ee/gabrielhs1357)
