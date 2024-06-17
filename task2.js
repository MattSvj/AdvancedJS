// Определяем поваров и их специализации
let chefs = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
]);

// Определяем блюда и их поваров
let dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

// Определяем заказы клиентов
let orders = new Map();

// Добавляем заказы клиентов
let clientAlexey = {};
clientAlexey[dishes.get('Пицца "Пепперони"')] = 1;
clientAlexey[dishes.get('Тирамису')] = 1;
orders.set(clientAlexey, 'Алексей');

let clientMaria = {};
clientMaria[dishes.get('Суши "Калифорния"')] = 1;
clientMaria[dishes.get('Пицца "Маргарита"')] = 1;
orders.set(clientMaria, 'Мария');

let clientIrina = {};
clientIrina[dishes.get('Чизкейк')] = 1;
orders.set(clientIrina, 'Ирина');

// Выводим информацию о заказах
orders.forEach((client, order) => {
    console.log(`${client} заказал:`);
    Object.keys(order).forEach(dish => {
        console.log(`${dish} (${chefs.get(dish)}).`);
    });
    console.log('');
});
