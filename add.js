const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters');

const bot = new Telegraf ('6266764088:AAGjlP3Vc_-8vyYlMKlev8Vz4DTeYGo4kSY')
bot.start((ctx) => ctx.reply('Я тоже люблю тебя, котенок❤️')) 
bot.help((ctx) => ctx.reply('Send me a sticker')) 
bot.on('sticker', (ctx) => ctx.reply('')) 
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch() 