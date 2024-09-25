// CRUD
import { PrismaClient } from '@prisma/client' // prisma connection 
const prisma = new PrismaClient()
// generate prisma client by running: 
// $ npx prisma generate

async function main() {
    await prisma.user.deleteMany() // deletes old version of db for this project, avoids conflicting with new users created
    const user = await prisma.user.create({
        data: {
            name: "Jane",
            email: "jane@test.com",
            age: 27,
            userPreference: {
                create: {
                    emailUpdates: true,
                },
            },
        },
        select: {
            name: true, 
            userPreference: { select: { id: true }},
        },
        // select OR include - not both 
        // select collects more specific data

        // include: {
        //     userPreference: true,
        // },
    })

    console.log(user)
}

main() 
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})