const {EventEmitter} = require('events');

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk' });

/*
 jika ada lebih satu function yang didaftarkan bisa seperti ini
-------------------------------------------------------------
 const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
 
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
--------------------------------------------------------------------------------
 output:
 Kopi Tubruk telah dibuat!
 Bill sebesar 15000 telah dibuat!
*/