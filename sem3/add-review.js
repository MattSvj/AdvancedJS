document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reviewForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const reviewText = document.getElementById('reviewText').value;

        if (productName && reviewText) {
            // Создаем объект для хранения отзыва
            const review = {
                product: productName,
                review: reviewText
            };

            // Получаем текущие отзывы из LocalStorage
            let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

            // Добавляем новый отзыв
            reviews.push(review);

            // Обновляем LocalStorage
            localStorage.setItem('reviews', JSON.stringify(reviews));

            // Очищаем форму
            form.reset();
            alert('Review added successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    });
});
