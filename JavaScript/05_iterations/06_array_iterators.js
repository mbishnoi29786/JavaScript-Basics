// forEach does not return anything because of that we need more iterators some of them are : -

// filter -->
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = numbers.filter((num) => num > 4);
// console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]

// if we want to implement same logic using forEach loop -->
const nums = [];
numbers.forEach(item => {
    if(item > 4)
    {
        nums.push(item); 
    }
})
// console.log(nums); // [ 5, 6, 7, 8, 9, 10 ]

// methods chaining -->
const result = numbers.map((num) => num * 10).map((num) => num+1).filter(num => num > 40);
console.log(result);

const books = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        published: 1960,
        genre: 'Fiction',
        pages: 281
    },
    {
        title: '1984',
        author: 'George Orwell',
        published: 1949,
        genre: 'Dystopian',
        pages: 328
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        published: 1925,
        genre: 'Classic',
        pages: 180
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        published: 1951,
        genre: 'Fiction',
        pages: 214
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        published: 1937,
        genre: 'Fantasy',
        pages: 310
    },
    {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        published: 1953,
        genre: 'Dystopian',
        pages: 194
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        published: 1813,
        genre: 'Classic',
        pages: 279
    },
    {
        title: 'The Chronicles of Narnia',
        author: 'C.S. Lewis',
        published: 1950,
        genre: 'Fantasy',
        pages: 767
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        published: 1851,
        genre: 'Adventure',
        pages: 635
    },
    {
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        published: 1869,
        genre: 'Historical Fiction',
        pages: 1225
    },
    {
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        published: 1892,
        genre: 'Mystery',
        pages: 307
    },
    {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        published: 1932,
        genre: 'Dystopian',
        pages: 268
    },
    {
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        published: 1320,
        genre: 'Epic Poetry',
        pages: 798
    },
    {
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        published: 1880,
        genre: 'Philosophical Fiction',
        pages: 796
    },
    {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel Garcia Marquez',
        published: 1967,
        genre: 'Magic Realism',
        pages: 417
    },
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        published: 1866,
        genre: 'Psychological Fiction',
        pages: 430
    }
    ];

    // Example usage of array methods:

    // forEach
    books.forEach(book => {
    // console.log(book.title);
    });
    
    // map
    const bookTitles = books.map(book => book.title);
    // console.log(bookTitles);
    
    // filter
    const fictionBooks = books.filter(book => book.genre === 'Fiction');
    // console.log(fictionBooks);
    
    // reduce
    const totalPages = books.reduce((total, book) => total + book.pages, 0);
    // console.log(`Total pages: ${totalPages}`);
    
    // find
    const bookByAuthor = books.find(book => book.author === 'George Orwell');
    // console.log(bookByAuthor);
    
    // some
    const hasDystopianBooks = books.some(book => book.genre === 'Dystopian');
    // console.log(`Contains Dystopian books: ${hasDystopianBooks}`);

    // every
    const allHavePages = books.every(book => book.pages > 0);
    console.log(`All books have pages: ${allHavePages}`);

