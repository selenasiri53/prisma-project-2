import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// prisma.user.findFirst

async function main() {
    const users = prisma.user.findMany()
    console.log(users)
}

main() 
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})