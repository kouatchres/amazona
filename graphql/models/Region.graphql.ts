import { objectType } from 'nexus';

export const Region = objectType({
  name: 'Region',
  definition(t) {
    t.model.id();
    t.model.regCode();
    t.model.regName();
    // t.list.field('divisions', {
    //   type: 'Division',
    //   resolve: async (parent, _, { prisma }) => {
    //     return await prisma.region
    //       .findUnique({
    //         where: { id: parent.id }
    //       })
    //       .divisions();
    //   }
    // });
  }
});
