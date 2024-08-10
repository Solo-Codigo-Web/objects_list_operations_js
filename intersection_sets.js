/**
 * Función que realiza la unión de dos listas
 * @param {*} list1 
 * @param {*} list2 
 * @returns 
 */
function intersect(list1, list2) {
    // Convertimos ambas listas a Set
    let set1 = new Set(list1);
    let set2 = new Set(list2);

    // Unimos ambos sets
    let intersection = new Set([...set1].filter(blog1 =>
        [...set2].some(blog2 => blog1.url === blog2.url)
    ));
    return intersection;
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

    // Realizamos la intersección de las dos listas de blogs
    let commonBlogs = intersect(yesterdayBlogs, todayBlogs);

    // Mostramos los blogs comunes
    console.log("Blogs comunes en ambas listas:");
    commonBlogs.forEach(blog => console.log(`URL: ${blog.url}, Author: ${blog.author}`));
}

main();