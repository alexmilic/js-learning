'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  
  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(
        `Oreder recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is you pasta with ${ing1}, ${ing2} and ${ing3}`);
  }
};

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Street Name 1',
//     mainIndex: 2,
//     starterIndex: 2
// });

// spread operator

const arr = [7, 8, 8];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);
// copy array
const mainMenuCopy = [...restaurant.mainMenu]

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];
console.log(ingredients);

restaurant.orderPasta(...ingredients);


// object destucturing
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// // mutating variables
// let a = 111;
// let b = 222;
// const obj = {a: 23, b: 7, c: 14};

// // ({a, b} = obj);
// console.log(a, b);

// // nested objects
// const {
//     fri: {
//         open: o, 
//         close: c
//     }
// } = openingHours;
// console.log(o, c);



// let [main, , secondary] = restaurant.categories;
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// // recieve 2 return values from a function
// const [starter , mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, ,[j, k]] = nested;
// console.log(i, j, k);


// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);