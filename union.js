/**
 * Función que devuelve la unión de dos listas de objetos
 * @param {*} list1 
 * @param {*} list2 
 * @returns 
 */
function union(list1, list2) {
    // Convertimos ambas listas a Set
    const set1 = new Set(list1.map(blog => JSON.stringify(blog)));
    const set2 = new Set(list2.map(blog => JSON.stringify(blog)));

    // Unimos ambos sets
    const union = new Set([...set1, ...set2]);

    return new Set([...union].map(blog => JSON.parse(blog)));
}

/**
 * Función Principal
 */
function main() {

    const blogList1 = [
        { url: "https://www.joelonsoftware.com/", author: "Joel Spolsky" },
        { url: "https://blog.codinghorror.com/", author: "Jeff Atwood" },
        { url: "https://thedailywtf.com/", author: "Alex Papadimoulis" },
        { url: "https://alistapart.com/", author: "Jeffrey Zeldman" },
        { url: "https://overreacted.io/", author: "Dan Abramov" }
    ];

    const blogList2 = [
        { url: "https://waitbutwhy.com/", author: "Tim Urban" },
        { url: "https://thedailywtf.com/", author: "Alex Papadimoulis" }, // Duplicado
        { url: "https://solocodigoweb.com/", author: "Gonzalo Chacaltana" },
        { url: "https://overreacted.io/", author: "Dan Abramov" } // Duplicado
    ];

    // Realizamos la unión de las dos listas de blogs
    const combinedBlogs = union(blogList1, blogList2);

    // Mostramos los blogs combinados
    console.log("Blogs combinados sin duplicados:");
    combinedBlogs.forEach(blog => console.log(`URL: ${blog.url}, Author: ${blog.author}`));
}

main();