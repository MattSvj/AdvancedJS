// Определяем класс для альбома
class Album {
    constructor(title, artist, year) {
        this.title = title;
        this.artist = artist;
        this.year = year;
    }
}

// Создаем объект музыкальной коллекции
let musicCollection = {
    albums: [
        new Album("Album 1", "Artist 1", "2020"),
        new Album("Album 2", "Artist 2", "2021"),
        new Album("Album 3", "Artist 3", "2022")
    ],
    [Symbol.iterator]: function() {
        let index = 0;
        return {
            next: () => {
                if (index < this.albums.length) {
                    return { value: this.albums[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Используем цикл for...of для вывода альбомов
for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}
