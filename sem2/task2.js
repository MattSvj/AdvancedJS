const initialData = [
    {
      product: "Apple iPhone 13",
      reviews: [
        {
          id: "1",
          text: "Отличный телефон! Батарея держится долго.",
        },
        {
          id: "2",
          text: "Камера супер, фото выглядят просто потрясающе.",
        },
      ],
    },
    {
      product: "Samsung Galaxy Z Fold 3",
      reviews: [
        {
          id: "3",
          text: "Интересный дизайн, но дорогой.",
        },
      ],
    },
    {
      product: "Sony PlayStation 5",
      reviews: [
        {
          id: "4",
          text: "Люблю играть на PS5, графика на высоте.",
        },
      ],
    },
  ];
  
  // Функция для добавления отзыва
  function addReview(event) {
    event.preventDefault();
  
    const reviewInput = document.getElementById('review-input');
    const reviewText = reviewInput.value.trim();
  
    // Проверка длины отзыва
    if (reviewText.length < 50 || reviewText.length > 500) {
      alert('Отзыв должен содержать от 50 до 500 символов.');
      return;
    }
  
    // Создание нового элемента для отзыва
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.textContent = reviewText;
  
    // Добавление отзыва в контейнер
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.appendChild(reviewElement);
  
    // Очистка поля ввода после добавления отзыва
    reviewInput.value = '';
  }
  
  // Назначение обработчика события на кнопку отправки отзыва
  const submitButton = document.getElementById('submit-review');
  submitButton.addEventListener('click', addReview);
  
  // Инициализация страницы с уже существующими отзывами из initialData (при наличии)
  document.addEventListener('DOMContentLoaded', function() {
    const reviewsContainer = document.getElementById('reviews-container');
  
    initialData.forEach(product => {
      product.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.textContent = review.text;
        reviewsContainer.appendChild(reviewElement);
      });
    });
  });
  