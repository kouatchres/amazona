import { objectType, unionType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('email');
  }
});

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('accessToken');
    t.field('user', { type: 'User' });
  }
});

export const InvalidUserError = objectType({
  name: 'InvalidUser',
  definition(t) {
    t.nonNull.string('message');
  }
});

export const UserAlreadyExistsError = objectType({
  name: 'UserAlreadyExists',
  definition(t) {
    t.nonNull.string('message');
  }
});

export const RecordAlreadyExistsError = objectType({
  name: 'RecordAlreadyExists',
  definition(t) {
    t.nonNull.string('message');
  }
});

export const LoginResult = unionType({
  name: 'LoginResult',
  definition(t) {
    t.members('AuthPayload', 'InvalidUser');
  },
  resolveType(t) {
    // @ts-ignore
    return t.user;
    // return t.__typename;
  }
});

export const SignupResult = unionType({
  name: 'SignupResult',
  definition(t) {
    t.members('AuthPayload', 'UserAlreadyExists');
  },
  resolveType(t) {
    // @ts-ignore
    return t.user;
    // t.__typename,
  }
});
