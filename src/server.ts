import fastify from 'fastify';
import cookie from '@fastify/cookie'
import { env } from './env';
import { transactionsRoutes } from './routes/transactions';

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes,{
    prefix: 'transactions',
})


// GET, POST, PUT, PATCH, DELETE

// http://localhost:3333/hello

app.listen({
    port: env.PORT,
}).then(() => {
    console.log('HTTP Server Running!')
})