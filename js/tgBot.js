const form = document.getElementById('popup-content-form');
require('dotenv').config();
console.log(process.env.BOT_TOKEN)

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const phone = form.elements['phone'].value;

  const message = `Заявка з сайту: 
  Ім'я: ${name} 
  Телефон: ${phone};`

  const url = `https://api.telegram.org/bot/sendMessage?chat_id=&text=${message}`;

  fetch(url, {
    method: 'POST',
  })
    .then((response) => {
      console.log('Дані успішно надіслано на Telegram бота');
    })
    .catch((error) => {
      console.error('Помилка при надсиланні даних:', error);
    });
});
