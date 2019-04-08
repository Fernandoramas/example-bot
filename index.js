const Telegraf = require('telegraf')
const app = new Telegraf('879656846:AAEvn2N9-S6tVQw1vUporucb35K8c_qjYIs')
app.command('start', (ctx) => {
 console.log('start', ctx.from)
 ctx.reply("welcome")
})
app.hears(/hi/i, (ctx) => ctx.reply("Hey, there"))
app.on('sticker', (ctx) => ctx.reply('👍'))
app.startPolling()