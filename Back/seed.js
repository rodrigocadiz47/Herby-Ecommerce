const { User, Products } = require("./Models");

User.bulkCreate([
  //   {
  //     firstName: "Rodrigo",
  //     lastName: "Cadiz",
  //     email: "rodrigo@ro.com",
  //     address: "lebensohn 412, mar de ajo, 7109",
  //     password: "1234",
  //     phone: 1161185846,
  //   },
  // {
  //   firstName: "Erika",
  //   lastName: "Zurhmule",
  //   email: "erika@gmail.com",
  //   address: "costanera 24, mar de ajo, 7109",
  //   password: "1234",
  //   phone: 1154856985,
  //   isAdmin: true,
  // },
  //   {
  //     firstName: "Belen",
  //     lastName: "Buccolo",
  //     email: "belen@ro.com",
  //     address: "costanera 24, mar de ajo, 7109",
  //     password: "1234",
  //     phone: 1154850148,
  //   },
  //   {
  //     firstName: "Fer",
  //     lastName: "Yifii",
  //     email: "fer@ro.com",
  //     address: "costanera 24, mar de ajo, 7109",
  //     password: "1234",
  //     phone: 1154852357,
  //   },
  //   {
  //     firstName: "Hernan",
  //     lastName: "Langer",
  //     email: "hernan@ro.com",
  //     address: "costanera 24, mar de ajo, 7109",
  //     password: "1234",
  //     phone: 1154854593,
  //   },
]).then((algo) => {
  console.log("Admin SEED");
});

Products.bulkCreate([
  {
    name: "Banana",
    category: "fruit",
    price: 100,
    stock: 12,
    seasonal: true,
    description:
      "La banana aporta vitaminas A, C, B1, B2, B6, B9 -ácido fólico- y E. Por otra parte, en cuanto a los minerales, se encuentran el potasio, magnesio, hierro, selenio, zinc y calcio. La lista de beneficios incluye el contenido de triptófano, el cual se presenta como un aminoácido esencial. Esta fruta se encuentra especialmente recomendada para las personas que realizan deporte o que son muy activas -tanto mental como físicamente-; por tal motivo, se sugiere incorporarla en la alimentación habitual de niños y adolescentes.",
    image:
      "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Manzana Roja",
    category: "fruit",
    price: 150,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Manzana Verde",
    category: "fruit",
    price: 130,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.pexels.com/photos/533343/pexels-photo-533343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Pomelo Rosado",
    category: "fruit",
    price: 110,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.pexels.com/photos/6156970/pexels-photo-6156970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Mandarina",
    category: "fruit",
    price: 90,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0JTIwdGFuZ2VyaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Pera",
    category: "fruit",
    price: 160,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.unsplash.com/photo-1619506147154-01717498fc26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
  },
  {
    name: "Anana",
    category: "fruit",
    price: 170,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZydWl0JTIwcGluZWFwcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Naranja",
    category: "fruit",
    price: 120,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.unsplash.com/photo-1599076480086-fd46f116eb8c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYzfHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Papaya",
    category: "fruit",
    price: 250,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.pexels.com/photos/5945739/pexels-photo-5945739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Cereza",
    category: "fruit",
    price: 230,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBjaGVycnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Uva Verde",
    category: "fruit",
    price: 150,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.pexels.com/photos/5945854/pexels-photo-5945854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Sandia",
    category: "fruit",
    price: 100,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80",
  },
  {
    name: "Coco",
    category: "fruit",
    price: 100,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Kiwi",
    category: "fruit",
    price: 100,
    stock: 400,
    seasonal: false,
    description:
      "La manzana es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio.",
    image:
      "https://images.pexels.com/photos/6156993/pexels-photo-6156993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Zanahoria",
    category: "veg",
    price: 110,
    stock: 200,
    seasonal: false,
    description:
      "Las zanahorias contienen varias vitaminas, en especial: vitamina A, vitamina E y vitamina K.",
    image:
      "https://images.pexels.com/photos/5621248/pexels-photo-5621248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Tomate",
    category: "veg",
    price: 130,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1607863680051-d7a0dbaec74a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Tomate Cherry",
    category: "veg",
    price: 80,
    stock: 220,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlcnJ5JTIwdG9tYXRvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Lechuga",
    category: "veg",
    price: 140,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80",
  },
  {
    name: "Rúcula",
    category: "veg",
    price: 180,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.pexels.com/photos/4519017/pexels-photo-4519017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Brocoli",
    category: "veg",
    price: 200,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.pexels.com/photos/8538298/pexels-photo-8538298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Champiñon",
    category: "veg",
    price: 380,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1577166071289-3104dfa3f28d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
  },
  {
    name: "Papa",
    category: "veg",
    price: 90,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.pexels.com/photos/4110456/pexels-photo-4110456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Batata",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1617130094141-532436117aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Zapallo",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.pexels.com/photos/6157002/pexels-photo-6157002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Repollo Blanco",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.pexels.com/photos/6157053/pexels-photo-6157053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Berengena",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1533213520888-6aa83d71cc24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80",
  },
  {
    name: "Pimiento Rojo",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1591080801565-38dc85c40db9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  },
  {
    name: "Choclo",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1615485291262-eee9f6529056?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
  },
  {
    name: "Palta",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Ajo",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1585910513592-9dd2d2232975?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
  },
  {
    name: "Cebolla",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cebolla Morada",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1585849834908-3481231155e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80",
  },
  {
    name: "Cebolla de Verdeo",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1559836833-2a2c99b1f54f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Limón",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Lima",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1558490946-2cf6cab78c60?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU2fHxmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Espárragos",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1588665518342-e116ee63620e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Aji",
    category: "veg",
    price: 80,
    stock: 180,
    seasonal: false,
    description:
      "El tomate maduro, además de agua, posee carbohidratos, potasio, fósforo, magnesio, vitaminas B1, B2, B5 y C.",
    image:
      "https://images.unsplash.com/photo-1581264542935-745d77881a2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
]).then((algo) => {
  console.log("PRODUCT SEED");
});
