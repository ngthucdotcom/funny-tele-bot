require('dotenv').config();
const express = require("express");
const app = express();
const { Telegraf } = require('telegraf');

// Telegram Bot configuration
const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(BOT_TOKEN);

// Launch the bot
bot.on("message", async (ctx) => {
    if (ctx.update.message.is_bot) {
        ctx.reply("Bạn là bot");
        return;
    }
    const { username } = ctx.botInfo; // support: id, first_name, username, etc.
    const regex = new RegExp(`@${username}`, "g");
    const message = ctx.update.message.text.replace(regex, "");
    switch (message) {
        case "/start":
            ctx.reply("Xin chào");
            break;
        case "/hello":
            ctx.reply("Xin chào");
            break;
        case "/help":
            ctx.reply(helpText);
            break;
        case "/my_id":
            console.log(ctx.update.message);
            ctx.reply("Chờ tí...");
            setTimeout(() => {
                ctx.reply("ID của bạn là: " + ctx.update.message.from.id);
            }, 1000);
            break;
        case "/my_domain":
            ctx.reply("Chờ tí...");
            setTimeout(() => {
                ctx.reply("Domain của bạn là: https://t.me/" + ctx.update.message.from.username);
            }, 1000);
            break;
        case "/sticker":
            ctx.reply("Chờ tí...");
            setTimeout(() => {
                ctx.reply("👍");
            }, 1000);
            break;
        case "/bye":
            ctx.reply("Tạm biệt");
            ctx.reply("👍");
            break;
        default:
            ctx.reply("Hong hiểu...");
            break;
    }
});

const helpText = 'Tôi có thể giúp gì cho bạn?\n' +
`# Thảo mai
/start - Bắt đầu
/hello - Xin chào
/bye - Tạm biệt

# Yêu cầu trợ giúp
/help - Trợ giúp

# Lấy mẫu sticker
/sticker - Gửi sticker

# Lấy thông tin
/my_id - Lấy ID
/my_domain - Lấy domain
`;

bot.launch();

// Export the router
module.exports = app;