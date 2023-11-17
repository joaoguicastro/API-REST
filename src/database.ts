import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
    client: 'sqlite',
    connection: {
        filename: env.DATABASE_URL,
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './db/migrations',
    }
}

export const knex = setupKnex(config)

// para fazer a criaçao da migrate no knex e o npm run knex -- migrate:make create-documents
// executar o servidor npm run dev
// help do knex e npm run knex -- -h
// rodar a migraçao npm run knex -- migrate:latest
// precisa do eslint como extensao do visual studio