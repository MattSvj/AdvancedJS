class Library {
    #books;
  
    constructor(initialBooks = []) {
      // Проверяем, что initialBooks не содержит дубликатов
      if (new Set(initialBooks).size !== initialBooks.length) {
        throw new Error('Initial book list contains duplicates.');
      }
  
      this.#books = [...initialBooks];
    }
  
    // Геттер для получения текущего списка книг
    get allBooks() {
      return this.#books;
    }
  
    // Метод для добавления книги
    addBook(title) {
      if (this.#books.includes(title)) {
        throw new Error(`Book "${title}" already exists in the library.`);
      }
  
      this.#books.push(title);
    }
  
    // Метод для удаления книги
    removeBook(title) {
      const index = this.#books.indexOf(title);
      if (index === -1) {
        throw new Error(`Book "${title}" not found in the library.`);
      }
  
      this.#books.splice(index, 1);
    }
  
    // Метод для проверки наличия книги
    hasBook(title) {
      return this.#books.includes(title);
    }
  }


// Создание экземпляра библиотеки
const myLibrary = new Library(['Book1', 'Book2']);

console.log(myLibrary.allBooks); // ['Book1', 'Book2']

// Добавление новой книги
myLibrary.addBook('Book3');
console.log(myLibrary.allBooks); // ['Book1', 'Book2', 'Book3']

// Попытка добавить существующую книгу (вызовет ошибку)
// myLibrary.addBook('Book1'); // Error: Book "Book1" already exists in the library.

// Удаление книги
myLibrary.removeBook('Book2');
console.log(myLibrary.allBooks); // ['Book1', 'Book3']

// Попытка удалить несуществующую книгу (вызовет ошибку)
// myLibrary.removeBook('Book4'); // Error: Book "Book4" not found in the library.

// Проверка наличия книги
console.log(myLibrary.hasBook('Book1')); // true
console.log(myLibrary.hasBook('Book2')); // false
