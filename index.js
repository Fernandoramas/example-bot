const Telegraf = require('telegraf')
const bot = new Telegraf('TOKEN')


var photos = {}

bot.start((ctx) => {
    photos[ctx.from.id] = []
    return ctx.reply('Please, send me from 2 to 5 photos.\n'
        +'Send /done to create album when you finish or /cancel to abort operation')
  })
  
  bot.command('/cancel', (ctx) => photos[ctx.from.id] = [])
  
  bot.command('/done', (ctx) => {
    if (photos[ctx.from.id].length < 2 || photos[ctx.from.id].length > 5) return
    done(ctx)
  })
  
  bot.on('photo', (ctx) => {
    const lastPhoto = ctx.message.photo.length - 1
    photos[ctx.from.id] = photos[ctx.from.id] || []
    photos[ctx.from.id].push({type: 'photo', media: ctx.message.photo[lastPhoto].file_id})
    if (photos[ctx.from.id].length >= 5) {
      done(ctx)
    }
  })
  
  function done(ctx) {
    ctx.replyWithMediaGroup(photos[ctx.from.id])
    photos[ctx.from.id] = []
  }
  
  bot.startPolling()
