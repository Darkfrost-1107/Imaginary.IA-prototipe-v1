import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient = new PrismaClient()

if(process.env.NODE_ENV === 'production') {
  const libsql = createClient({
    url: `${process.env.TURSO_DATABASE_URL}`,
    authToken: `${process.env.TURSO_DATABASE_AUTH_TOKEN}`
  })
  const adapter = new PrismaLibSQL(libsql)
  prisma = new PrismaClient({adapter})
} else {
  
}

export default prisma