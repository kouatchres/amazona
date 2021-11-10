import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthPayload = {
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type InvalidUser = {
  message: Scalars['String'];
};

export type LoginResult = AuthPayload | InvalidUser;

export type Mutation = {
  createOneRegion: Region;
  deleteOneRegion?: Maybe<Region>;
  updateOneRegion?: Maybe<Region>;
  /** Stores a Region manually */
  createRegion?: Maybe<Region>;
  signup?: Maybe<AuthPayload>;
  login?: Maybe<AuthPayload>;
};


export type MutationCreateOneRegionArgs = {
  data: RegionCreateInput;
};


export type MutationDeleteOneRegionArgs = {
  where: RegionWhereUniqueInput;
};


export type MutationUpdateOneRegionArgs = {
  data: RegionUpdateInput;
  where: RegionWhereUniqueInput;
};


export type MutationCreateRegionArgs = {
  data: RegionCreateInput;
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  users?: Maybe<Array<Maybe<User>>>;
  me?: Maybe<User>;
  regions?: Maybe<Array<Maybe<Region>>>;
  region?: Maybe<Region>;
};


export type QueryMeArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryRegionArgs = {
  id?: Maybe<Scalars['String']>;
};

export type RecordAlreadyExists = {
  message: Scalars['String'];
};

export type Region = {
  id: Scalars['String'];
  regCode: Scalars['String'];
  regName: Scalars['String'];
};

export type RegionCreateInput = {
  id?: Maybe<Scalars['String']>;
  regName: Scalars['String'];
  regCode: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegionUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  regName?: Maybe<StringFieldUpdateOperationsInput>;
  regCode?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type SignupResult = AuthPayload | UserAlreadyExists;

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type User = {
  id: Scalars['String'];
  email: Scalars['String'];
};

export type UserAlreadyExists = {
  message: Scalars['String'];
};

export type RegionFragmentFragment = Pick<Region, 'id' | 'regName' | 'regCode'>;

export type CreateRegionMutationVariables = Exact<{
  data: RegionCreateInput;
}>;


export type CreateRegionMutation = { createOneRegion: RegionFragmentFragment };

export type CreateARegionMutationVariables = Exact<{
  data: RegionCreateInput;
}>;


export type CreateARegionMutation = { createRegion?: Maybe<RegionFragmentFragment> };

export type UpdateARegionMutationVariables = Exact<{
  data: RegionUpdateInput;
  where: RegionWhereUniqueInput;
}>;


export type UpdateARegionMutation = { updateOneRegion?: Maybe<RegionFragmentFragment> };

export type DeleteARegionMutationVariables = Exact<{
  where: RegionWhereUniqueInput;
}>;


export type DeleteARegionMutation = { deleteOneRegion?: Maybe<Pick<Region, 'id'>> };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { signup?: Maybe<{ user?: Maybe<Pick<User, 'id' | 'email'>> }> };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { login?: Maybe<{ user?: Maybe<Pick<User, 'id' | 'email'>> }> };

export type AllRegionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRegionsQuery = { regions?: Maybe<Array<Maybe<RegionFragmentFragment>>> };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { users?: Maybe<Array<Maybe<Pick<User, 'id' | 'email'>>>> };

export type SingleUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleUserQuery = { me?: Maybe<Pick<User, 'email'>> };

export const RegionFragmentFragmentDoc = gql`
    fragment RegionFragment on Region {
  id
  regName
  regCode
}
    `;
export const CreateRegionDocument = gql`
    mutation createRegion($data: RegionCreateInput!) {
  createOneRegion(data: $data) {
    ...RegionFragment
  }
}
    ${RegionFragmentFragmentDoc}`;
export type CreateRegionMutationFn = Apollo.MutationFunction<CreateRegionMutation, CreateRegionMutationVariables>;
export type CreateRegionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateRegionMutation, CreateRegionMutationVariables>, 'mutation'>;

    export const CreateRegionComponent = (props: CreateRegionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateRegionMutation, CreateRegionMutationVariables> mutation={CreateRegionDocument} {...props} />
    );
    
export type CreateRegionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateRegionMutation, CreateRegionMutationVariables>
    } & TChildProps;
export function withCreateRegion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateRegionMutation,
  CreateRegionMutationVariables,
  CreateRegionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateRegionMutation, CreateRegionMutationVariables, CreateRegionProps<TChildProps, TDataName>>(CreateRegionDocument, {
      alias: 'createRegion',
      ...operationOptions
    });
};

/**
 * __useCreateRegionMutation__
 *
 * To run a mutation, you first call `useCreateRegionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegionMutation, { data, loading, error }] = useCreateRegionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRegionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateRegionMutation, CreateRegionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateRegionMutation, CreateRegionMutationVariables>(CreateRegionDocument, options);
      }
export type CreateRegionMutationHookResult = ReturnType<typeof useCreateRegionMutation>;
export type CreateRegionMutationResult = Apollo.MutationResult<CreateRegionMutation>;
export type CreateRegionMutationOptions = Apollo.BaseMutationOptions<CreateRegionMutation, CreateRegionMutationVariables>;
export const CreateARegionDocument = gql`
    mutation createARegion($data: RegionCreateInput!) {
  createRegion(data: $data) {
    ...RegionFragment
  }
}
    ${RegionFragmentFragmentDoc}`;
export type CreateARegionMutationFn = Apollo.MutationFunction<CreateARegionMutation, CreateARegionMutationVariables>;
export type CreateARegionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateARegionMutation, CreateARegionMutationVariables>, 'mutation'>;

    export const CreateARegionComponent = (props: CreateARegionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateARegionMutation, CreateARegionMutationVariables> mutation={CreateARegionDocument} {...props} />
    );
    
export type CreateARegionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateARegionMutation, CreateARegionMutationVariables>
    } & TChildProps;
export function withCreateARegion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateARegionMutation,
  CreateARegionMutationVariables,
  CreateARegionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateARegionMutation, CreateARegionMutationVariables, CreateARegionProps<TChildProps, TDataName>>(CreateARegionDocument, {
      alias: 'createARegion',
      ...operationOptions
    });
};

/**
 * __useCreateARegionMutation__
 *
 * To run a mutation, you first call `useCreateARegionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateARegionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createARegionMutation, { data, loading, error }] = useCreateARegionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateARegionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateARegionMutation, CreateARegionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateARegionMutation, CreateARegionMutationVariables>(CreateARegionDocument, options);
      }
export type CreateARegionMutationHookResult = ReturnType<typeof useCreateARegionMutation>;
export type CreateARegionMutationResult = Apollo.MutationResult<CreateARegionMutation>;
export type CreateARegionMutationOptions = Apollo.BaseMutationOptions<CreateARegionMutation, CreateARegionMutationVariables>;
export const UpdateARegionDocument = gql`
    mutation updateARegion($data: RegionUpdateInput!, $where: RegionWhereUniqueInput!) {
  updateOneRegion(data: $data, where: $where) {
    ...RegionFragment
  }
}
    ${RegionFragmentFragmentDoc}`;
export type UpdateARegionMutationFn = Apollo.MutationFunction<UpdateARegionMutation, UpdateARegionMutationVariables>;
export type UpdateARegionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateARegionMutation, UpdateARegionMutationVariables>, 'mutation'>;

    export const UpdateARegionComponent = (props: UpdateARegionComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateARegionMutation, UpdateARegionMutationVariables> mutation={UpdateARegionDocument} {...props} />
    );
    
export type UpdateARegionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateARegionMutation, UpdateARegionMutationVariables>
    } & TChildProps;
export function withUpdateARegion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateARegionMutation,
  UpdateARegionMutationVariables,
  UpdateARegionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateARegionMutation, UpdateARegionMutationVariables, UpdateARegionProps<TChildProps, TDataName>>(UpdateARegionDocument, {
      alias: 'updateARegion',
      ...operationOptions
    });
};

/**
 * __useUpdateARegionMutation__
 *
 * To run a mutation, you first call `useUpdateARegionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateARegionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateARegionMutation, { data, loading, error }] = useUpdateARegionMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateARegionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateARegionMutation, UpdateARegionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateARegionMutation, UpdateARegionMutationVariables>(UpdateARegionDocument, options);
      }
export type UpdateARegionMutationHookResult = ReturnType<typeof useUpdateARegionMutation>;
export type UpdateARegionMutationResult = Apollo.MutationResult<UpdateARegionMutation>;
export type UpdateARegionMutationOptions = Apollo.BaseMutationOptions<UpdateARegionMutation, UpdateARegionMutationVariables>;
export const DeleteARegionDocument = gql`
    mutation deleteARegion($where: RegionWhereUniqueInput!) {
  deleteOneRegion(where: $where) {
    id
  }
}
    `;
export type DeleteARegionMutationFn = Apollo.MutationFunction<DeleteARegionMutation, DeleteARegionMutationVariables>;
export type DeleteARegionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteARegionMutation, DeleteARegionMutationVariables>, 'mutation'>;

    export const DeleteARegionComponent = (props: DeleteARegionComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteARegionMutation, DeleteARegionMutationVariables> mutation={DeleteARegionDocument} {...props} />
    );
    
export type DeleteARegionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteARegionMutation, DeleteARegionMutationVariables>
    } & TChildProps;
export function withDeleteARegion<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteARegionMutation,
  DeleteARegionMutationVariables,
  DeleteARegionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteARegionMutation, DeleteARegionMutationVariables, DeleteARegionProps<TChildProps, TDataName>>(DeleteARegionDocument, {
      alias: 'deleteARegion',
      ...operationOptions
    });
};

/**
 * __useDeleteARegionMutation__
 *
 * To run a mutation, you first call `useDeleteARegionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteARegionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteARegionMutation, { data, loading, error }] = useDeleteARegionMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteARegionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteARegionMutation, DeleteARegionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteARegionMutation, DeleteARegionMutationVariables>(DeleteARegionDocument, options);
      }
export type DeleteARegionMutationHookResult = ReturnType<typeof useDeleteARegionMutation>;
export type DeleteARegionMutationResult = Apollo.MutationResult<DeleteARegionMutation>;
export type DeleteARegionMutationOptions = Apollo.BaseMutationOptions<DeleteARegionMutation, DeleteARegionMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($email: String!, $password: String!) {
  signup(email: $email, password: $password) {
    user {
      id
      email
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    
export type CreateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>
    } & TChildProps;
export function withCreateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps, TDataName>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const AllRegionsDocument = gql`
    query AllRegions {
  regions {
    ...RegionFragment
  }
}
    ${RegionFragmentFragmentDoc}`;
export type AllRegionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllRegionsQuery, AllRegionsQueryVariables>, 'query'>;

    export const AllRegionsComponent = (props: AllRegionsComponentProps) => (
      <ApolloReactComponents.Query<AllRegionsQuery, AllRegionsQueryVariables> query={AllRegionsDocument} {...props} />
    );
    
export type AllRegionsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllRegionsQuery, AllRegionsQueryVariables>
    } & TChildProps;
export function withAllRegions<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllRegionsQuery,
  AllRegionsQueryVariables,
  AllRegionsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllRegionsQuery, AllRegionsQueryVariables, AllRegionsProps<TChildProps, TDataName>>(AllRegionsDocument, {
      alias: 'allRegions',
      ...operationOptions
    });
};

/**
 * __useAllRegionsQuery__
 *
 * To run a query within a React component, call `useAllRegionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllRegionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllRegionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllRegionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllRegionsQuery, AllRegionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllRegionsQuery, AllRegionsQueryVariables>(AllRegionsDocument, options);
      }
export function useAllRegionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllRegionsQuery, AllRegionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllRegionsQuery, AllRegionsQueryVariables>(AllRegionsDocument, options);
        }
export type AllRegionsQueryHookResult = ReturnType<typeof useAllRegionsQuery>;
export type AllRegionsLazyQueryHookResult = ReturnType<typeof useAllRegionsLazyQuery>;
export type AllRegionsQueryResult = Apollo.QueryResult<AllRegionsQuery, AllRegionsQueryVariables>;
export const AllUsersDocument = gql`
    query AllUsers {
  users {
    id
    email
  }
}
    `;
export type AllUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllUsersQuery, AllUsersQueryVariables>, 'query'>;

    export const AllUsersComponent = (props: AllUsersComponentProps) => (
      <ApolloReactComponents.Query<AllUsersQuery, AllUsersQueryVariables> query={AllUsersDocument} {...props} />
    );
    
export type AllUsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllUsersQuery, AllUsersQueryVariables>
    } & TChildProps;
export function withAllUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllUsersQuery,
  AllUsersQueryVariables,
  AllUsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllUsersQuery, AllUsersQueryVariables, AllUsersProps<TChildProps, TDataName>>(AllUsersDocument, {
      alias: 'allUsers',
      ...operationOptions
    });
};

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const SingleUserDocument = gql`
    query SingleUser($id: String!) {
  me(id: $id) {
    email
  }
}
    `;
export type SingleUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SingleUserQuery, SingleUserQueryVariables>, 'query'> & ({ variables: SingleUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SingleUserComponent = (props: SingleUserComponentProps) => (
      <ApolloReactComponents.Query<SingleUserQuery, SingleUserQueryVariables> query={SingleUserDocument} {...props} />
    );
    
export type SingleUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SingleUserQuery, SingleUserQueryVariables>
    } & TChildProps;
export function withSingleUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SingleUserQuery,
  SingleUserQueryVariables,
  SingleUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SingleUserQuery, SingleUserQueryVariables, SingleUserProps<TChildProps, TDataName>>(SingleUserDocument, {
      alias: 'singleUser',
      ...operationOptions
    });
};

/**
 * __useSingleUserQuery__
 *
 * To run a query within a React component, call `useSingleUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SingleUserQuery, SingleUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SingleUserQuery, SingleUserQueryVariables>(SingleUserDocument, options);
      }
export function useSingleUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SingleUserQuery, SingleUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SingleUserQuery, SingleUserQueryVariables>(SingleUserDocument, options);
        }
export type SingleUserQueryHookResult = ReturnType<typeof useSingleUserQuery>;
export type SingleUserLazyQueryHookResult = ReturnType<typeof useSingleUserLazyQuery>;
export type SingleUserQueryResult = Apollo.QueryResult<SingleUserQuery, SingleUserQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  String: ResolverTypeWrapper<Scalars['String']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  InvalidUser: ResolverTypeWrapper<InvalidUser>;
  LoginResult: ResolversTypes['AuthPayload'] | ResolversTypes['InvalidUser'];
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RecordAlreadyExists: ResolverTypeWrapper<RecordAlreadyExists>;
  Region: ResolverTypeWrapper<Region>;
  RegionCreateInput: RegionCreateInput;
  RegionUpdateInput: RegionUpdateInput;
  RegionWhereUniqueInput: RegionWhereUniqueInput;
  SignupResult: ResolversTypes['AuthPayload'] | ResolversTypes['UserAlreadyExists'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  User: ResolverTypeWrapper<User>;
  UserAlreadyExists: ResolverTypeWrapper<UserAlreadyExists>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  String: Scalars['String'];
  DateTime: Scalars['DateTime'];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  InvalidUser: InvalidUser;
  LoginResult: ResolversParentTypes['AuthPayload'] | ResolversParentTypes['InvalidUser'];
  Mutation: {};
  Query: {};
  RecordAlreadyExists: RecordAlreadyExists;
  Region: Region;
  RegionCreateInput: RegionCreateInput;
  RegionUpdateInput: RegionUpdateInput;
  RegionWhereUniqueInput: RegionWhereUniqueInput;
  SignupResult: ResolversParentTypes['AuthPayload'] | ResolversParentTypes['UserAlreadyExists'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  User: User;
  UserAlreadyExists: UserAlreadyExists;
  Boolean: Scalars['Boolean'];
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type InvalidUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvalidUser'] = ResolversParentTypes['InvalidUser']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = {
  __resolveType: TypeResolveFn<'AuthPayload' | 'InvalidUser', ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createOneRegion?: Resolver<ResolversTypes['Region'], ParentType, ContextType, RequireFields<MutationCreateOneRegionArgs, 'data'>>;
  deleteOneRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationDeleteOneRegionArgs, 'where'>>;
  updateOneRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationUpdateOneRegionArgs, 'data' | 'where'>>;
  createRegion?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<MutationCreateRegionArgs, 'data'>>;
  signup?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<MutationSignupArgs, 'email' | 'password'>>;
  login?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryMeArgs, never>>;
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Region']>>>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType, RequireFields<QueryRegionArgs, never>>;
};

export type RecordAlreadyExistsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecordAlreadyExists'] = ResolversParentTypes['RecordAlreadyExists']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignupResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignupResult'] = ResolversParentTypes['SignupResult']> = {
  __resolveType: TypeResolveFn<'AuthPayload' | 'UserAlreadyExists', ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAlreadyExistsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAlreadyExists'] = ResolversParentTypes['UserAlreadyExists']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  InvalidUser?: InvalidUserResolvers<ContextType>;
  LoginResult?: LoginResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RecordAlreadyExists?: RecordAlreadyExistsResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  SignupResult?: SignupResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAlreadyExists?: UserAlreadyExistsResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
