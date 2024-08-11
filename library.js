/**
 * Función para agregar un libro a la colección biblioteca
 * @param {set} library 
 * @param {object} book 
 */
function addBook(library, book) {
    if (library.has(book)) {
        console.log(`Failed: El libro con ISBN "${book.isbn}" y título: "${book.title}" ya existe en la biblioteca.`);
    } else if (findBookByISBN(library,book.isbn)) {
        console.log(`Failed: El libro con ISBN "${book.isbn}" ya existe en la biblioteca.`);
    } else {
        library.add(book);
        console.log(`Success: El libro "${book.title}" ha sido agregado a la biblioteca.`);
    }
}

/**
 * Función para devolver lista de libros de la colección biblioteca
 * @param {set} library 
 */
function listBooks(library) {
    console.log("\nColección de libros");
    console.log("*".repeat(45));
    library.forEach(book => {
        console.log(`ISBN: ${book.isbn}`);
        console.log(`Title: ${book.title}`);
    });
    console.log("*".repeat(45));
}

/**
 * Función para buscar un libro en la colección biblioteca por su ISBN
 * @param {set} library 
 * @param {string} isbn 
 * @returns 
 */
function findBookByISBN(library, isbn) {
    for (let book of library) {
        if (book.isbn === isbn) {
            return book;
        }
    };
    return null;
}

/**
 * Función Principal
 */
function main() {
    let library = new Set();
    isbn = "978-0201485677"
    book2 = { isbn: isbn, title: "Refactoring: Improving the Design of Existing Code" };
    addBook(library, { isbn: "978-0135957059", title: "The Pragmatic Programmer: Your Journey to Mastery" });
    addBook(library, book2);
    addBook(library, { isbn: "978-0735619678", title: "Code Complete: A Practical Handbook of Software Construction" });
    addBook(library, book2);
    addBook(library, { isbn: isbn, title: "Advance Programming in C++" });
    listBooks(library);

    // Buscar un libro por ISBN
    let foundBook = findBookByISBN(library, isbn);
    if (foundBook) {
        console.log(`\nLibro con ISBN "${isbn}" encontrado: "${foundBook.title}"`);
    } else {
        console.log(`\nLibro no encontrado con ISBN ${isbn}`);
    }
}

main();