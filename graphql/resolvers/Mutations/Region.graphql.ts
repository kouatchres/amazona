import { extendType, nonNull, arg } from 'nexus';

export const region = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneRegion();
    t.crud.deleteOneRegion();
    t.crud.updateOneRegion();

    t.field('createRegion', {
      type: 'Region',
      description: 'Stores a Region manually',
      args: {
        data: nonNull(arg({ type: 'RegionCreateInput' }))
      },

      resolve: async (_, { data }, { prisma }) => {
        const wasRegistered = await prisma.region.findMany({
          where: {
            regName: data?.regName
          }
        });
        if (wasRegistered?.length > 0) {
          throw new Error('Région déjà présente');
        }

        return await prisma.region.create({
          data: {
            regName: String(data?.regName),
            regCode: String(data?.regCode)
          }
        });
      }
    });
  }
});
