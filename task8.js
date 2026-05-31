// API Link
// let apiLink = "https://fakestoreapi.com/products";
// Beginner Level
// Task 1: Print All Products
// Fetch all products and print them.
// Output:
// Title : ...
// Price : ...

            // let apiLink = "https://fakestoreapi.com/products";

            // fetch(apiLink)
            //   .then((response) => response.json())
            //   .then((products) => {
            //     products.forEach((product) => {
            //       console.log(`Title : ${product.title}`);
            //       console.log(`Price : $${product.price}`);
            //       console.log("-------------------");
            //     });
            //   })
            //   .catch((error) => {
            //     console.log("Error:", error);
            //   });


// Task 2: Print Only Product Titles
// Output:
// Product 1
// Product 2
// Product 3
// Use:
// forEach()
// or
// map()

        // let apiLink = "https://fakestoreapi.com/products";

        // fetch(apiLink)
        //   .then((response) => response.json())
        //   .then((products) => {
        //     products.forEach((product) => {
        //       console.log(product.title);
        //     });
        //   })
        //   .catch((error) => {
        //     console.log("Error:", error);
        //   });


// Task 3: Print Total Products
// Output:
// Total Products : 20

        // let apiLink = "https://fakestoreapi.com/products";

        // fetch(apiLink)
        //   .then((response) => response.json())
        //   .then((products) => {
        //     console.log(`Total Products : ${products.length}`);
        //   })
        //   .catch((error) => {
        //     console.log("Error:", error);
        //   });


// Task 4: Print All Categories
// Output:
// electronics
// jewelery
// men's clothing
// women's clothing

        // let apiLink = "https://fakestoreapi.com/products";

        // fetch(apiLink)
        // .then((response) => response.json())
        // .then((products) => {
        //     products.forEach((product) => {
        //     console.log(product.category);
        //     });
        // })
        // .catch((error) => {
        //     console.log("Error:", error);
        // });


// Task 5: Print Products Above $50
// Use:
// filter()
// Output:
// Product A - 109
// Product B - 250
// Intermediate Level

const products = [
  { name: "Product A", price: 109 },
  { name: "Product B", price: 250 },
  { name: "Product C", price: 45 }
];

const expensiveProducts = products.filter(product => product.price > 50);

expensiveProducts.forEach(product => {
  console.log(`${product.name} - ${product.price}`);
});


// Task 6: Print Products Below $50
// Use:
// filter()
// Task 7: Find First Product Above $100
// Use:
// find()
// Output:
// {
//  title:"...",
//  price:109
// }

const products1 = [
  { title: "Product A", price: 109 },
  { title: "Product B", price: 250 },
  { title: "Product C", price: 45 },
  { title: "Product D", price: 30 }
];

const cheapProducts = products1.filter(product => product.price < 50);

cheapProducts.forEach(product => {
  console.log(`${product.title} - ${product.price}`);
});


// Task 8: Search Product
// let searchText = "shirt";
// Find matching products.
// Use:
// includes()
// filter()

const products2 = [
  { title: "Red Shirt", price: 25 },
  { title: "Blue Jeans", price: 50 },
  { title: "Black Shirt", price: 30 },
  { title: "White Shoes", price: 80 }
];

let searchText = "shirt";

const matchingProducts = products2  .filter(product =>
  product.title.toLowerCase().includes(searchText.toLowerCase())
);

console.log(matchingProducts);


// Task 9: Count Electronics Products
// Output:
// Electronics Count : 6

const products3 = [
  { title: "Laptop", category: "Electronics" },
  { title: "Phone", category: "Electronics" },
  { title: "TV", category: "Electronics" },
  { title: "Headphones", category: "Electronics" },
  { title: "Camera", category: "Electronics" },
  { title: "Smart Watch", category: "Electronics" },
  { title: "Shirt", category: "Clothing" },
  { title: "Shoes", category: "Clothing" }
];

const electronicsCount = products3.filter(
  product => product.category === "Electronics"
).length;

console.log(`Electronics Count : ${electronicsCount}`);


// Task 10: Print Highest Price Product
// Use:
// sort()
// or
// reduce()

const products4 = [
  { title: "Product A", price: 109 },
  { title: "Product B", price: 250 },
  { title: "Product C", price: 45 }
];

const highestPriceProduct = [...products4].sort(
  (a, b) => b.price - a.price
)[0];

console.log(highestPriceProduct);



// Task 11: Print Lowest Price Product
// Use:
// sort()
// or
// reduce()

const products5 = [
  { title: "Product A", price: 109 },
  { title: "Product B", price: 250 },
  { title: "Product C", price: 45 }
];

const lowestPriceProduct = [...products5].sort(
  (a, b) => a.price - b.price
)[0];

console.log(lowestPriceProduct);


// Task 12: Calculate Total Price of All Products
// Use:
// reduce()
// Output:
// Total Price : XXXX

const products6 = [
  { title: "Product A", price: 109 },
  { title: "Product B", price: 250 },
  { title: "Product C", price: 45 }
];

const totalPrice = products6.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(`Total Price : ${totalPrice}`);


// Task 13: Calculate Average Product Price
// Output:
// Average Price : XXX

const products7 = [
  { title: "Product A", price: 100 },
  { title: "Product B", price: 200 },
  { title: "Product C", price: 300 }
];

const total = products7.reduce((sum, product) => sum + product.price, 0);

const average = total / products7.length;

console.log(`Average Price : ${average}`);


// Task 14: Print Product With Highest Rating
// Output:
// Title : ...
// Rating : 4.9

const products8 = [
  { title: "Product A", rating: 4.2 },
  { title: "Product B", rating: 4.9 },
  { title: "Product C", rating: 4.5 }
];

const highestRatedProduct = products8.reduce((highest, product) =>
  product.rating > highest.rating ? product : highest
);

console.log(`Title : ${highestRatedProduct.title}`);
console.log(`Rating : ${highestRatedProduct.rating}`);


// Task 15: Print Product With Lowest Rating
// Output:
// Title : ...
// Rating : 2.1
// Advanced Level

const products9 = [
  { title: "Product A", rating: 3.8 },
  { title: "Product B", rating: 2.1 },
  { title: "Product C", rating: 4.5 },
  { title: "Product D", rating: 3.2 }
];

const lowestRatedProduct = products9.reduce((lowest, product) =>
  product.rating < lowest.rating ? product : lowest
);

console.log(`Title : ${lowestRatedProduct.title}`);
console.log(`Rating : ${lowestRatedProduct.rating}`);


// Task 16: Category Wise Product Count
// Output:
// electronics : 6
// jewelery : 4
// men's clothing : 4
// women's clothing : 6
// Use:
// reduce()

const products10 = [
  { title: "Laptop", category: "electronics" },
  { title: "Phone", category: "electronics" },
  { title: "TV", category: "electronics" },
  { title: "Headphones", category: "electronics" },
  { title: "Camera", category: "electronics" },
  { title: "Smart Watch", category: "electronics" },

  { title: "Ring", category: "jewelery" },
  { title: "Necklace", category: "jewelery" },
  { title: "Bracelet", category: "jewelery" },
  { title: "Earrings", category: "jewelery" },

  { title: "T-Shirt", category: "men's clothing" },
  { title: "Jeans", category: "men's clothing" },
  { title: "Shirt", category: "men's clothing" },
  { title: "Jacket", category: "men's clothing" },

  { title: "Dress", category: "women's clothing" },
  { title: "Top", category: "women's clothing" },
  { title: "Skirt", category: "women's clothing" },
  { title: "Heels", category: "women's clothing" },
  { title: "Handbag", category: "women's clothing" },
  { title: "Scarf", category: "women's clothing" }
];

const categoryCount = products10.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});

Object.entries(categoryCount).forEach(([category, count]) => {
  console.log(`${category} : ${count}`);
});


// Task 17: Create Discounted Products
// Apply 10% discount.
// Output:
// [
//  {
//   title:"...",
//   oldPrice:100,
//   newPrice:90
//  }
// ]
// Use:
// map()

const products11 = [
  { title: "Product A", price: 100 },
  { title: "Product B", price: 250 },
  { title: "Product C", price: 80 }
];

const discountedProducts = products11.map(product => ({
  title: product.title,
  oldPrice: product.price,
  newPrice: product.price - (product.price * 0.10)
}));

console.log(discountedProducts);


// Task 18: Sort Products Low To High
// Use:
// sort((a,b)=>a.price-b.price)



// Task 19: Sort Products High To Low
// Use:
// sort((a,b)=>b.price-a.price)

const products12 = [
  { title: "Product A", price: 100 },
  { title: "Product B", price: 250 },
  { title: "Product C", price: 80 }
];

const lowToHigh = [...products12].sort((a, b) => a.price - b.price);

console.log(lowToHigh);


// Task 20: Check Any Product Above $500
// Use:
// some()
// Output:
// true

const products13 = [
  { title: "Product A", price: 100 },
  { title: "Product B", price: 250 },
  { title: "Product C", price: 600 }
];

const hasExpensiveProduct = products13.some(product => product.price > 500);

console.log(hasExpensiveProduct);


// Task 21: Check All Products Above Rating 3
// Use:
// every()
// Output:
// true / false

const products14 = [
  { title: "Product A", rating: 4.2 },
  { title: "Product B", rating: 3.5 },
  { title: "Product C", rating: 4.8 }
];

const allAbove3 = products14.every(product => product.rating > 3);

console.log(allAbove3);


// Task 22: Print Top 5 Costliest Products
// Output:
// Product A
// Product B
// Product C
// Product D
// Product E

const products15 = [
  { title: "Product A", price: 500 },
  { title: "Product B", price: 120 },
  { title: "Product C", price: 900 },
  { title: "Product D", price: 300 },
  { title: "Product E", price: 750 },
  { title: "Product F", price: 60 },
  { title: "Product G", price: 450 }
];

const top5 = [...products15]
  .sort((a, b) => b.price - a.price)
  .slice(0, 5);

top5.forEach(product => {
  console.log(`${product.title}, Price - ${product.price}`);
});


// Task 23: Print Top 5 Rated Products
// Sort by rating and print first 5.

const products16 = [
  { title: "Product A", rating: 4.2 },
  { title: "Product B", rating: 3.8 },
  { title: "Product C", rating: 4.9 },
  { title: "Product D", rating: 4.5 },
  { title: "Product E", rating: 4.1 },
  { title: "Product F", rating: 3.9 },
  { title: "Product G", rating: 4.7 }
];

const top5Rated = [...products16]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 5);

top5Rated.forEach(product => {
  console.log(`${product.title}, Rating - ${product.rating}`);
});


// Task 24: Group Products By Category
// Output:
// {
//  electronics:[...],
//  jewelery:[...],
//  men's clothing:[...]
// }

const products17 = [
  { title: "Laptop", category: "electronics" },
  { title: "Phone", category: "electronics" },
  { title: "Ring", category: "jewelery" },
  { title: "Necklace", category: "jewelery" },
  { title: "Shirt", category: "men's clothing" },
  { title: "Jeans", category: "men's clothing" }
];

const grouped = products17.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category].push(product);

  return acc;
}, {});

console.log(grouped);


// Task 25: Convert Product Prices To INR
// Assume:
// 1 USD = 85 INR
// Output:
// Title : ...
// Price : ₹8500
// Real-Time Company Tasks


const conversionRate = 85;

function convertToINR(title, priceInUSD) {
    const priceInINR = priceInUSD * conversionRate;

    console.log("Title : " + title);
    console.log("Price : ₹" + priceInINR);
}

convertToINR("Wireless Headphones", 100);


// Task 26: Amazon Product Filter
// Conditions:
// Price < 500
// Rating > 4
// Category = electronics
// Output matching products.

// Task 26: Amazon Product Filter

const products18 = [
    { name: "USB Cable", price: 199, rating: 4.5, category: "electronics" },
    { name: "Notebook", price: 120, rating: 4.8, category: "stationery" },
    { name: "Wireless Mouse", price: 450, rating: 4.2, category: "electronics" },
    { name: "Bluetooth Speaker", price: 999, rating: 4.6, category: "electronics" },
    { name: "Pen", price: 50, rating: 3.9, category: "stationery" },
    { name: "Earphones", price: 300, rating: 4.7, category: "electronics" }
];

const filteredProducts = products18.filter(product => {
    return (
        product.price < 500 &&
        product.rating > 4 &&
        product.category === "electronics"
    );
});

console.log("Matching Products:");
filteredProducts.forEach(product => {
    console.log(product.name);
});


// Task 27: Best Seller Product
// Find:
// Highest Rating

const products19 = [
    { name: "USB Cable", price: 199, rating: 4.5 },
    { name: "Wireless Mouse", price: 450, rating: 4.2 },
    { name: "Bluetooth Speaker", price: 999, rating: 4.6 },
    { name: "Earphones", price: 300, rating: 4.7 },
    { name: "Keyboard", price: 700, rating: 4.4 }
];

let bestSeller = products19[0];

for (let i = 1; i < products19.length; i++) {
    if (products19[i].rating > bestSeller.rating) {
        bestSeller = products19[i];
    }
}

console.log("Best Seller Product:");
console.log("Name:", bestSeller.name);
console.log("Rating:", bestSeller.rating);


// Task 28: Product Analytics Dashboard
// Output:
// Total Products :
// Total Categories :
// Highest Price Product :
// Lowest Price Product :
// Average Price :
// Best Rated Product :

const products20 = [
    { name: "USB Cable", price: 199, rating: 4.5, category: "electronics" },
    { name: "Wireless Mouse", price: 450, rating: 4.2, category: "electronics" },
    { name: "Notebook", price: 120, rating: 4.8, category: "stationery" },
    { name: "Bluetooth Speaker", price: 999, rating: 4.6, category: "electronics" },
    { name: "Pen", price: 50, rating: 3.9, category: "stationery" },
    { name: "Earphones", price: 300, rating: 4.7, category: "electronics" }
];

const totalProducts = products20.length;

const categories = [...new Set(products20.map(p => p.category))];
const totalCategories = categories.length;

let highestPriceProductt = products20[0];

let lowestPriceProductt = products20[0];

let totalPricee = 0;

let bestRatedProduct = products20[0];

for (let i = 0; i < products20.length; i++) {
    const p = products20[i];

    totalPricee += p.price;

    if (p.price > highestPriceProductt.price) {
        highestPriceProductt = p;
    }

    if (p.price < lowestPriceProductt.price) {
        lowestPriceProductt = p;
    }

    if (p.rating > bestRatedProduct.rating) {
        bestRatedProduct = p;
    }
}

const averagePrice = totalPricee / totalProducts;

console.log("Product Analytics Dashboard");
console.log("Total Products :", totalProducts);
console.log("Total Categories :", totalCategories);
console.log("Highest Price Product :", highestPriceProductt.name);
console.log("Lowest Price Product :", lowestPriceProductt.name);
console.log("Average Price :", averagePrice.toFixed(2));
console.log("Best Rated Product :", bestRatedProduct.name);


// Task 29: Inventory Report
// Output:
// Expensive Products :
// Affordable Products :
// Electronics :
// Jewellery :
// Mens Clothing :
// Womens Clothing :

const products21 = [
    { name: "Gold Ring", price: 5000, category: "jewellery" },
    { name: "Silver Chain", price: 1200, category: "jewellery" },
    { name: "T-Shirt", price: 300, category: "mens clothing" },
    { name: "Shirt", price: 450, category: "mens clothing" },
    { name: "Dress", price: 800, category: "womens clothing" },
    { name: "Kurti", price: 600, category: "womens clothing" },
    { name: "Earphones", price: 250, category: "electronics" },
    { name: "Mouse", price: 700, category: "electronics" }
];

// Buckets
let expensive = [];
let affordable = [];

let electronics = [];
let jewellery = [];
let mensClothing = [];
let womensClothing = [];

for (let p of products21) {
    if (p.price > 500) {
        expensive.push(p.name);
    } else {
        affordable.push(p.name);
    }

    if (p.category === "electronics") {
        electronics.push(p.name);
    } else if (p.category === "jewellery") {
        jewellery.push(p.name);
    } else if (p.category === "mens clothing") {
        mensClothing.push(p.name);
    } else if (p.category === "womens clothing") {
        womensClothing.push(p.name);
    }
}

console.log("Inventory Report");
console.log("Expensive Products :", expensive);
console.log("Affordable Products :", affordable);
console.log("Electronics :", electronics);
console.log("Jewellery :", jewellery);
console.log("Mens Clothing :", mensClothing);
console.log("Womens Clothing :", womensClothing);


// Task 30: Complete Admin Dashboard (Interview Level)
// Build a report:
// ==============================

// TOTAL PRODUCTS :
// TOTAL CATEGORIES :
// TOTAL PRICE :
// AVERAGE PRICE :

// HIGHEST PRICE PRODUCT :
// LOWEST PRICE PRODUCT :

// BEST RATED PRODUCT :
// LOWEST RATED PRODUCT :

// PRODUCTS ABOVE $100 :
// PRODUCTS BELOW $50 :

// CATEGORY COUNTS :

// ==============================
// Methods You Must Practice
// fetch()
// then()
// catch()
// finally()

// forEach()
// map()
// filter()
// find()
// reduce()
// some()
// every()
// sort()

// includes()



const API_URL = "https://fakestoreapi.com/products";

fetch(API_URL)
  .then(res => res.json())
  .then(products => {

    const totalProducts = products.length;

    const categories = [...new Set(products.map(p => p.category))];
    const totalCategories = categories.length;

    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    const averagePrice = totalPrice / totalProducts;

    const highestPriceProduct = products.reduce((max, p) =>
      p.price > max.price ? p : max
    );

    const lowestPriceProduct = products.reduce((min, p) =>
      p.price < min.price ? p : min
    );

    const bestRatedProduct = products.reduce((max, p) =>
      p.rating.rate > max.rating.rate ? p : max
    );

    const lowestRatedProduct = products.reduce((min, p) =>
      p.rating.rate < min.rating.rate ? p : min
    );

    const productsAbove100 = products.filter(p => p.price > 100);
    const productsBelow50 = products.filter(p => p.price < 50);


    const categoryCounts = products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});


    const hasExpensiveProduct = products.some(p => p.price > 1000);
    const allExpensive = products.every(p => p.price > 10);

    const hasElectronics = products
      .map(p => p.category)
      .includes("electronics");


    const sortedByPrice = [...products].sort((a, b) => a.price - b.price);


    console.log("==================================");
    console.log("ADMIN DASHBOARD REPORT");
    console.log("==================================");

    console.log("TOTAL PRODUCTS :", totalProducts);
    console.log("TOTAL CATEGORIES :", totalCategories);
    console.log("TOTAL PRICE :", totalPrice.toFixed(2));
    console.log("AVERAGE PRICE :", averagePrice.toFixed(2));

    console.log("\nHIGHEST PRICE PRODUCT :", highestPriceProduct.title);
    console.log("LOWEST PRICE PRODUCT :", lowestPriceProduct.title);

    console.log("\nBEST RATED PRODUCT :", bestRatedProduct.title);
    console.log("LOWEST RATED PRODUCT :", lowestRatedProduct.title);

    console.log("\nPRODUCTS ABOVE $100 :", productsAbove100.length);
    console.log("PRODUCTS BELOW $50 :", productsBelow50.length);

    console.log("\nCATEGORY COUNTS :", categoryCounts);

    console.log("\nHAS EXPENSIVE PRODUCT (>1000):", hasExpensiveProduct);
    console.log("ALL PRODUCTS ABOVE $10:", allExpensive);
    console.log("HAS ELECTRONICS CATEGORY:", hasElectronics);

    console.log("\nTOP 5 CHEAPEST PRODUCTS:");
    sortedByPrice.slice(0, 5).forEach(p => console.log(p.title));

  })
  .catch(error => {
    console.log("Error fetching data:", error);
  })
  .finally(() => {
    console.log("\nDashboard Execution Completed");
  });
