//Importing module
// import {addToCart, totalPrice as price, tq} from './shoppingCart.js'
// // import * as ShoppingCart from './shoppingCart.js'
import add from './shoppingCart.js'
import {cart} from './shoppingCart.js'

// console.log('Importing module');
// add('boats',2);
// add('apple',3);
// add('bread',5);
// console.log(cart);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// // Use in script or module mode
// console.log('Start fetching 0');
// (async function toto(){
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// })();
// console.log('Stop fetching 0');

// // Use in module mode
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Stop fetching');

// const getLastPost = async function() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();  
//     console.log(data);

//     return {title: data.at(-1).title, text: data.at(-1).body};
// }

// const lastPost = await getLastPost();
// // console.log(lastPost);

// const ShoppingCart2 = (function() {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

//     const addToCart = function(product,quantity) {
//         cart.push({product, quantity});
//         console.log(`${quantity} ${product} added to cart`);
//     }

//     const orderStock = function(product,quantity) {
//         console.log(`${quantity} ${product} order from supplier to cart`);
//     }

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     };
// })()

// ShoppingCart2.addToCart('apple',3);
// console.log(ShoppingCart2.cart);