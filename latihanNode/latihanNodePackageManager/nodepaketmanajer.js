const moment= require('moment');

//mengambil waktu sekarang melalui paket libraries dari moment
const date = moment().format("MMM Do YY");
console.log(date);