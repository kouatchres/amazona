import { queryType, stringArg } from 'nexus';

const Query = queryType({
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.user.findMany({
          orderBy: [{ email: 'asc' }]
        });
      }
    });

    t.field('me', {
      type: 'User',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, args, { prisma }) => {
        return await prisma.user.findUnique({ where: { id: String(args.id) } });
      }
    });

    t.list.field('regions', {
      type: 'Region',
      resolve: async (_parent, _args, { prisma }) => {
        return await prisma.region.findMany({
          orderBy: [{ regName: 'asc' }, { regCode: 'asc' }]
        });
      }
    });

    t.field('region', {
      type: 'Region',
      args: {
        id: stringArg()
      },
      resolve: async (_parent, { id }, { prisma }) => {
        return await prisma.region.findUnique({ where: { id: String(id) } });
      }
    });
  }
});
export default Query;
