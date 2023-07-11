# Funny Telegram Bot

## Required
* You'll need a Telegram user account before you can create a Telegram bot. Head over to [Telegram](https://telegram.org/) and create an account if you don't already have one.

## Register a Telegram bot
Signed in to Telegram, search for `BotFather` (a bot for managing all other Telegram bots) and start a new chat with it. Follow the steps below to register a new bot with the BotFather:
* Type `/start` and press send.
* Type `/newbot` and press send.
* Choose a name for your bot.
* Choose a username for your bot that ends in `bot` (e.g: `yourusernamebot`).
* Type your bot name and bot username (bot username require suffix `bot`, e.g: `yourusernamebot`).

The BotFather will respond with a message containing an access token for your newly created bot. This access token will allow our application to access the Telegram API and tell our bot what to do when receiving different messages from users.

## Set environment variables
* Create a `.env` file in the root of the project. You can clone the `.env.example` file and rename it to `.env`.
* Set the `BOT_TOKEN` variable to the access token you received from the BotFather.

## Install dependencies
Install dependencies with yarn:
```command
yarn install
```

If you don't have yarn installed, you can install it with npm:
```command
npm install -g yarn
```

## Start ngrok tunnel
Start ngrok tunnel on port 9090 (default port for this project, you can change it in `server.js`):
```command
ngrok http 9090
```

If you want a custom subdomain of ngrok, you can use `--domain` option:
```command
ngrok http --domain=yourdomain 9090
```

If you haven't installed ngrok, you can download it [here](https://ngrok.com/download) or install it with some package manager like [Homebrew](https://brew.sh/):
```command
brew install ngrok
```
or [Chocolatey](https://chocolatey.org/):
```command
choco install ngrok
```
or if you are using Linux:
```command
sudo snap install ngrok
```

## Set webhook
Don't forget to set webhook for your bot. You can do it easily with `setWebhook` via an url:
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<YOUR_NGROK_URL>
```

## Start bot
So, you can start the bot with yarn:
```command
yarn start
```

## Advanced: Set commands for your bot
You can set commands for your bot on `BotFather`:
```
/setcommands
```

And then, choose your bot and set commands.

Then, you can set commands like this:
```
command1 - Description for command1
command2 - Description for command2
```