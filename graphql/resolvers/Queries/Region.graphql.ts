import { extendType, stringArg, nonNull } from 'nexus';

export const region = extendType({
  type: 'Query',
  definition(t) {
    t.crud.region();
    // t.crud.regions();

    t.field('singleRegionWithDivisions', {
      type: 'Region',
      args: { id: nonNull(stringArg()) },
      resolve(_parent, args, { prisma }) {
        return prisma.region.findUnique({
          where: { id: args.id },
          include: {
            divisions: true
          }
        });
      }
    });

    t.nonNull.list.field('regions', {
      type: 'Region',
      resolve(_parent, _args, { prisma }) {
        return prisma.region.findMany();
      }
    });
  }
});

// t.field('region', {
//   type: 'Region',
//   args: { id: nonNull(stringArg()) },
//   resolve(_parent, args, { prisma }) {
//     return prisma.region.findUnique({
//       where: { id: args.id }
//     });
//   }
// });
