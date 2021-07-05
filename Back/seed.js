const {User, Products}= require("./Models")

// User.bulkCreate([
//     {
//         firstName: "Rodrigo",
//         lastName: "Cadiz",
//         email: "rodrigo@ro.com",
//         address: "lebensohn 412, mar de ajo, 7109",
//         password: "1234",
//         phone: 1161185846
//     },
//     {
//         firstName: "Erika",
//         lastName: "Zurhmule",
//         email: "erika@ro.com",
//         address: "costanera 24, mar de ajo, 7109",
//         password: "1234",
//         phone: 1154856985
//     },
//     {
//         firstName: "Belen",
//         lastName: "Buccolo",
//         email: "belen@ro.com",
//         address: "costanera 24, mar de ajo, 7109",
//         password: "1234",
//         phone: 1154850148
//     },
//     {
//         firstName: "Fer",
//         lastName: "Yifii",
//         email: "fer@ro.com",
//         address: "costanera 24, mar de ajo, 7109",
//         password: "1234",
//         phone: 1154852357
//     },
//     {
//         firstName: "Hernan",
//         lastName: "Langer",
//         email: "hernan@ro.com",
//         address: "costanera 24, mar de ajo, 7109",
//         password: "1234",
//         phone: 1154854593
//     },
// ])
// .then(algo=>{
//     console.log("USERS SEED")
// })

Products.bulkCreate([
    {
        name: "Banana",
        category: "fruit",
        price: 100,
        stock: 250,
        seasonal: true,
        description: "La bananaaporta vitaminas A, C, B1, B2, B6, B9 -ácido fólico- y E.",
        image: "https://www.suat.com.uy/upcms/thumbs/648x365/novedades/imagen/955_big.jpg"
    },
    {
        name: "Manzana",
        category: "fruit",
        price: 150,
        stock: 400,
        seasonal: false,
        description: "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
        image: "https://png.pngtree.com/png-vector/20210522/ourlarge/pngtree-apple-delicious-sweet-vitamins-png-image_3323219.jpg"
    },
    {
        name: "Zanahoria",
        category: "veg",
        price: 80,
        stock: 200,
        seasonal: false,
        description: "Las zanahorias contienen varias vitaminas, en especial: vitamina A, vitamina E y vitamina K.",
        image: "https://www.hogarmania.com/archivos/201305/5185-nutricion-ainhoa-zanahorias-xl-668x400x80xX.jpg"
    },
    {
        name: "Tomate",
        category: "veg",
        price: 80,
        stock: 180,
        seasonal: false,
        description: "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
        image: "https://www.cucinare.tv/wp-content/uploads/2019/05/Tomates.jpg"
    },

])
.then(algo=>{
    console.log("PRODUCT SEED")
})

