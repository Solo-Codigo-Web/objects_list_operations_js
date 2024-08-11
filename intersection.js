/**
 * Función que devuelve la intersección de dos listas de objetos
 * @param {*} list1 
 * @param {*} list2 
 * @returns 
 */
function intersect(set1, set2) {
    return new Set([...set1].filter(blog1 =>
        [...set2].some(blog2 => blog1.url === blog2.url)
    ));
}

/**
 * Función Principal
 */
function main() {

    const yesterdayBlogs = new Set([
        { url: "https://www.joelonsoftware.com/", author: "Joel Spolsky" },
        { url: "https://blog.codinghorror.com/", author: "Jeff Atwood" },
        { url: "https://thedailywtf.com/", author: "Alex Papadimoulis" },
        { url: "https://alistapart.com/", author: "Jeffrey Zeldman" },
        { url: "https://overreacted.io/", author: "Dan Abramov" }
    ]);

    const todayBlogs = new Set([
        { url: "https://waitbutwhy.com/", author: "Tim Urban" },
        { url: "https://thedailywtf.com/", author: "Alex Papadimoulis" }, // Duplicado
        { url: "https://solocodigoweb.com/", author: "Gonzalo Chacaltana" },
        { url: "https://overreacted.io/", author: "Dan Abramov" } // Duplicado
    ]);

    // Realizamos la intersección de los dos listas de objetos
    const commonBlogs = intersect(yesterdayBlogs, todayBlogs);

    // Mostramos los blogs comunes
    console.log("Blogs comunes en ambas listas:");
    commonBlogs.forEach(blog => console.log(`URL: ${blog.url}, Author: ${blog.author}`));
}

main();