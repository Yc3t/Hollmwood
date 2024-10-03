import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "Famous People" },
                { name: "Movies & TV" },
                { name: "Musicians" },
                { name: "Games" },
                { name: "Animals" },
                { name: "Philosophy" },
                { name: "Scientists" },
            ]
        });
        console.log("Seed data inserted successfully.");
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        await db.$disconnect();
    }
}

main()
    .catch((error) => {
        console.error("Unhandled error during seeding:", error);
        process.exit(1);
    });