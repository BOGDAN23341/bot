const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'minecraftanarhy.aternos.me',     // Наприклад: "bogdan123.aternos.me"
  port: 25565,             // Зазвичай 25565, якщо не вказано інше
  username: 'AFK_Bot123',  // Нікнейм бота
  version: '1.21.4',       // Актуальна версія
});

bot.on('login', () => {
  console.log('✅ Бот увійшов!');
  bot.chat('/login твій_пароль'); // якщо стоїть AuthMe
});

bot.on('spawn', () => {
  bot.setControlState('jump', true); // Щоб не кікало за AFK
  setInterval(() => {
    bot.setControlState('jump', false);
    setTimeout(() => {
      bot.setControlState('jump', true);
    }, 1000);
  }, 10000);
});

bot.on('end', () => {
  console.log('❌ Бот вийшов. Перезапуск...');
  setTimeout(() => process.exit(1), 3000);
});
