import { extendType } from 'nexus';

export const user = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user();
    t.crud.users();

    t.field('me', {
      type: 'User',
      async resolve(_parent, _args, { prisma, userId }) {
        const user = await prisma.user.findUnique({
          where: {
            id: String(userId)
          }
        });
        return user;
      }
    });
  }
});
