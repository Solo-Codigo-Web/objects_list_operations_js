/**
 * Función que devuelve la diferencia simétrica de dos listas de objetos
 * @param {set} blogs1 
 * @param {set} blogs2 
 * @returns 
 */
function symetricDifferene(blogs1, blogs2) {
    return new Set(
        [...blogs1].filter(blog1 => ![...blogs2].some(blog2 => blog1.url === blog2.url))
            .concat(
                [...blogs2].filter(blog2 => ![...blogs1].some(blog1 => blog1.url === blog2.url))
            )
    );
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

    // Realizamos la diferencia simétrica de las listas de objetos
    const uniqueBlogs = symetricDifferene(yesterdayBlogs, todayBlogs);

    // Mostramos los blogs únicos
    console.log("Blogs únicos (diferencia simétrica) en ambas listas:");
    uniqueBlogs.forEach(blog => console.log(`URL: ${blog.url}, Author: ${blog.author}`));
}

main();