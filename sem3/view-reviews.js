document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const reviewsContainer = document.getElementById('reviewsContainer');

    // Функция для отображения списка продуктов с отзывами
    function displayProducts() {
        productList.innerHTML = '';
        reviewsContainer.innerHTML = '';

        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        // Собираем список уникальных продуктов
        const products = [...new Set(reviews.map(review => review.product))];

        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product;
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => displayReviews(product));
            productList.appendChild(li);
        });
    }

    // Функция для отображения отзывов по выбранному продукту
    function displayReviews(productName) {
        reviewsContainer.innerHTML = '';
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        const productReviews = reviews.filter(review => review.product === productName);

        productReviews.forEach(review => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${review.product}</strong>: ${review.review} 
                             <button class="delete-btn">Delete</button>`;
            const deleteButton = div.querySelector('.delete-btn');
            deleteButton.addEventListener('click', () => deleteReview(review));

            reviewsContainer.appendChild(div);
        });
    }

    // Функция для удаления отзыва
    function deleteReview(review) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        // Фильтруем отзывы, оставляя только те, которые не совпадают с удаляемым
        reviews = reviews.filter(r => !(r.product === review.product && r.review === review.review));

        // Обновляем LocalStorage
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Повторно отображаем отзывы после удаления
        displayProducts();
    }

    // Инициализация отображения при загрузке страницы
    displayProducts();
});
