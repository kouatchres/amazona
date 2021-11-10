import { PrismaClient } from '@prisma/client';
const { regionData } = require('./seedData');
// const {PrismaClient}=require('@PrismaClient');

const prisma = new PrismaClient();

async function main() {
  await prisma.region.createMany({ data: regionData });
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
