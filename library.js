function addBook(library, book) {
    if (library.has(book)) {
        console.log(`El libro "${book.title}" ya está en la biblioteca.`);
    } else {
        library.add(book);
        console.log(`El libro "${book.title}" ha sido agregado a la biblioteca.`);
    }
}

function listBooks(library) {
    console.log("\nColección de libros");
    console.log("*".repeat(45));
    library.forEach(book => {
        console.log(`ISBN: ${book.isbn}`);
        console.log(`Title: ${book.title}`);
    });
    console.log("*".repeat(45));
}

function findBookByISBN(library, isbn) {
    for (let book of library) {
        if (book.isbn === isbn) {
            return book;
        }
    };
    return null;
}

function main() {
    let library = new Set();
    addBook(library, { isbn: "978-0135957059", title: "The Pragmatic Programmer: Your Journey to Mastery" });
    addBook(library, { isbn: "978-0201485677", title: "Refactoring: Improving the Design of Existing Code" });
    addBook(library, { isbn: "978-0735619678", title: "Code Complete: A Practical Handbook of Software Construction" });
    addBook(library, { isbn: "978-0201485677", title: "Refactoring: Improving the Design of Existing Code" });
    listBooks(library);

    // Buscar un libro por ISBN
    isbn = "978-0201485677"
    let foundBook = findBookByISBN(library, isbn);
    if (foundBook) {
        console.log(`Libro encontrado: ${foundBook.title}`);
    } else {
        console.log(`Libro no encontrado con ISBN ${isbn}`);
    }
}

main();