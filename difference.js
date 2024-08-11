/**
 * Función que devuelve la diferencia de dos listas de objetos
 * @param {set} set1 
 * @param {set} sett2 
 * @returns 
 */
function difference(set1, set2) {
    return new Set([...set1].filter(blog1 =>
        ![...set2].some(blog2 => blog1.url === blog2.url)
      ));
}

/**
 * Función Principal
 */
function main() {

    const blogList1 = new Set([
        { url: "https://www.joelonsoftware.com/", author: "Joel Spolsky" },
        { url: "https://blog.codinghorror.com/", author: "Jeff Atwood" },
        { url: "https://thedailywtf.com/", author: "Alex Papadimoulis" },
        { url: "https://alistapart.com/", author: "Jeffrey Zeldman" },
        { url: "https://overreacted.io/", author: "Dan Abramov" }
    ]);

    const blogList2 = new Set([
        { url: "https://waitbutwhy.com/", author: "Tim Urban" },
        { url: "https://thedailywtf.com/", author: "Alex Papadimoulis" }, // Duplicado
        { url: "https://solocodigoweb.com/", author: "Gonzalo Chacaltana" },
        { url: "https://overreacted.io/", author: "Dan Abramov" } // Duplicado
    ]);

    // Obtenemos la diferencia de la lista 1 sobre la lista 2
    const blogListDiff1 = difference(blogList1, blogList2);

    // Mostramos resultados
    console.log("\nBlogs en blogList1 pero no en blogList2");
    blogListDiff1.forEach(blog => console.log(`URL: ${blog.url}, Author: ${blog.author}`));

    // Obtenemos la diferencia de la lista 2 sobre la lista 1
    const blogListDiff2 = difference(blogList2, blogList1);

    // Mostramos resultados
    console.log("\nBlogs en blogList2 pero no en blogList1");
    blogListDiff2.forEach(blog => console.log(`URL: ${blog.url}, Author: ${blog.author}`));
}

main();