const products = [
    { id: "1", name: "Samsung Galaxy S21", price: 799, category: "phones" },
    { id: "2", name: "iPhone 13 Pro", price: 999, category: "phones" },
    { id: "3", name: "Google Pixel 6", price: 699, category: "phones" },
    { id: "4", name: "iPad Pro", price: 899, category: "tablets" },
    { id: "5", name: "Samsung Galaxy Tab S7", price: 649, category: "tablets" },
    { id: "6", name: "Amazon Fire HD 10", price: 149, category: "tablets" },
    { id: "7", name: "Dell XPS 15", price: 1599, category: "notebooks" },
    { id: "8", name: "HP Spectre x360", price: 1299, category: "notebooks" },
    { id: "9", name: "Lenovo ThinkPad X1 Carbon", price: 1399, category: "notebooks" },
];

// getproduct
const getproduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const product = products.find(p => p.id === id);
           if (product) {
               resolve(product);
           } else {
               reject("No se encontró el producto");
           }
        }, 1000); 
    });
};

// getproducts
export const getproducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productsFiltered = category ? products.filter(product => product.category === category) : products;
            resolve(productsFiltered);
        }, 1000); 
    });
};