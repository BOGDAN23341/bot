const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'IP_ТВОГО_СЕРВЕРА', // Наприклад: 'play.example.net'
  port: 25565,              // Стандартний порт
  username: 'AFK_Bot123'    // Нік бота
});

const PASSWORD = 'qwerty123'; // Пароль, який бот буде використовувати для /register і /login

bot.on('spawn', () => {
  console.log('✅ Бот зайшов на сервер');

  // Автоматична реєстрація/логін
  setTimeout(() => {
    bot.chat(`/register ${PASSWORD} ${PASSWORD}`);
    setTimeout(() => {
      bot.chat(`/login ${PASSWORD}`);
    }, 2000);
  }, 2000);

  // Стрибки кожні 30 секунд, щоб не кікало
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500); // Стрибок триває 0.5 сек
  }, 30000); // Кожні 30 секунд
});
