/*
//latihan membuat server dengan process.env

const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});
*/

const server = new Server(
    {
        host: process.env.NODE_ENV !== 'production'? 'localhost' : '0.0.0.0'
    }
)
