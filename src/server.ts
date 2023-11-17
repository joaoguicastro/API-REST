import fastify from 'fastify';
import { knex } from './database';
import crypto from 'node:crypto';

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

// http://localhost:3333/hello

app.get('/hello', async () => {
  const transactions = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transação de teste',
    amount: 1000,

  })

  return transactions
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running!')
})