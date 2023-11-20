import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { knex } from "../database"
import crypto from 'node:crypto'

export async function transactionsRoutes(app:FastifyInstance){
  app.post('/', async (request, reply) => {
    // {title, amount, type: credit ou debit}

    const createTransactionBodySchema =z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit'])
    })

    const { title, amount, type } = createTransactionBodySchema.parse(request.body)

    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount *-1,
    })

    //HTTP Codes(201 - recurso criado com sucesso)

    return reply.status(201).send()
  })
}