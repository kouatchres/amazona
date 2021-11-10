import { stringArg, extendType, nonNull } from 'nexus';
import { verify, hash } from 'argon2';
import { generateAccessToken } from '../../utils/helpers';
import { ApolloError } from 'apollo-server-micro';

export const user = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      resolve: async (_parent, { email, password }, { prisma }) => {
        try {
          const userExists = await prisma.user.findUnique({
            where: { email }
          });
          if (userExists) throw new ApolloError('Cet Email existe déjà.');

          const hashedPassword = await hash(password);
          const user = await prisma.user.create({
            data: {
              email,
              password: hashedPassword
            }
          });

          return {
            __typename: 'AuthPayload',
            accessToken: generateAccessToken(user.id),
            user
          };
        } catch (err: any) {
          return err;
        }
      }
    });

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      resolve: async (_parent, { email, password }, { prisma }) => {
        try {
          const user = await prisma.user.findUnique({
            where: { email }
          });
          if (!user) throw new ApolloError('Données Invalides');

          const passwordValid = await verify(user.password, password);

          if (!passwordValid) throw new ApolloError('Données Invalides');
          return {
            accessToken: generateAccessToken(user.id),
            user
          };
        } catch (err: any) {
          return err;
        }
      }
    });
  }
});
