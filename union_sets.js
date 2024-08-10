/**
 * Función que realiza la unión de dos listas
 * @param {*} list1 
 * @param {*} list2 
 * @returns 
 */
function union(list1, list2) {
    // Convertimos ambas listas a Set
    let set1 = new Set(list1.map(blog => JSON.stringify(blog)));
    let set2 = new Set(list2.map(blog => JSON.stringify(blog)));

    // Unimos ambos sets
    let union = new Set([...set1, ...set2]);

    // Convertimos los elementos de vuelta a objetos
    return new Set([...union].map(blog => JSON.parse(blog)));
}

/**
 * Función Principal
 */
function main() {

    let yesterdayBlogs = [
        { url: "https://www.joelonsoftware.com/", author: "Joel Spolsky" },
        { url: "https://blog.codinghorror.com/", author: "Jeff Atwood" },
        { url: "https://thedailywtf.com/", author: "Alex Papadimoulis" },
        { url: "https://alistapart.com/", author: "Jeffrey Zeldman" },
        { url: "https://overreacted.io/", author: "Dan Abramov" }
    ];

    let todayBlogs = [
        { url: "https://waitbutwhy.com/", author: "Tim Urban" },
        { url: "https://thedailywtf.com/", author: "Alex Papadimoulis" }, // Duplicado
        { url: "https://solocodigoweb.com/", author: "Gonzalo Chacaltana" },
        { url: "https://overreacted.io/", author: "Dan Abramov" } // Duplicado
    ];

    // Realizamos la unión de las dos listas de blogs
    let combinedBlogs = union(yesterdayBlogs, todayBlogs);

    // Mostramos los blogs combinados
    console.log("Blogs combinados sin duplicados:");
    combinedBlogs.forEach(blog => console.log(`URL: ${blog.url}, Author: ${blog.author}`));
}

main();