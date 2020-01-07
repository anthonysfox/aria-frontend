import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type AuthUserResponse = {
   __typename?: 'AuthUserResponse',
  user: User,
  authToken: Scalars['String'],
};

export type CreatePlayInput = {
  trackId: Scalars['String'],
};

export type CreatePlaylistInput = {
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};

export type CreateTrackGenreInput = {
  name: Scalars['String'],
  trackIds?: Maybe<Array<Scalars['String']>>,
};

export type CreateTrackInput = {
  title: Scalars['String'],
  trackGenreId?: Maybe<Scalars['ID']>,
};


export type LoginUserInput = {
  emailAddress: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createTrack: Track,
  updateTrack: Track,
  deleteTrack: Track,
  createTrackGenre: TrackGenre,
  signupUser?: Maybe<AuthUserResponse>,
  loginUser: AuthUserResponse,
  createPlaylist: Playlist,
  updatePlaylist: Playlist,
  deletePlaylist: Playlist,
  addTrack: Playlist,
  removeTrack: Playlist,
  createPlay: Play,
};


export type MutationCreateTrackArgs = {
  trackData: CreateTrackInput
};


export type MutationUpdateTrackArgs = {
  trackData: UpdateTrackInput
};


export type MutationDeleteTrackArgs = {
  trackId: Scalars['String']
};


export type MutationCreateTrackGenreArgs = {
  trackGenreData: CreateTrackGenreInput
};


export type MutationSignupUserArgs = {
  signupUserData: SignupUserInput
};


export type MutationLoginUserArgs = {
  loginUserData: LoginUserInput
};


export type MutationCreatePlaylistArgs = {
  playlistData: CreatePlaylistInput
};


export type MutationUpdatePlaylistArgs = {
  updatePlaylistData: UpdatePlaylistInput,
  playlistId: Scalars['String']
};


export type MutationDeletePlaylistArgs = {
  playlistId: Scalars['String']
};


export type MutationAddTrackArgs = {
  trackId: Scalars['String'],
  playlistId: Scalars['String']
};


export type MutationRemoveTrackArgs = {
  trackId: Scalars['String'],
  playlistId: Scalars['String']
};


export type MutationCreatePlayArgs = {
  createPlayInput: CreatePlayInput
};

export type Play = {
   __typename?: 'Play',
  id: Scalars['ID'],
  track?: Maybe<Track>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type Playlist = {
   __typename?: 'Playlist',
  id: Scalars['ID'],
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  user: Scalars['String'],
  tracks?: Maybe<Array<Track>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type Query = {
   __typename?: 'Query',
  allUsers: Array<User>,
  allTracks: Array<Track>,
  findTrack: Track,
  allTrackGenres: Array<TrackGenre>,
  allPlaylists: Array<Playlist>,
  findOnePlaylistById: Scalars['ID'],
  allPlays: Array<Play>,
};


export type QueryFindTrackArgs = {
  trackId: Scalars['String']
};


export type QueryAllTrackGenresArgs = {
  limit?: Maybe<Scalars['Int']>
};


export type QueryFindOnePlaylistByIdArgs = {
  playlistId: Scalars['String']
};

export type SignupUserInput = {
  fullName: Scalars['String'],
  emailAddress: Scalars['String'],
  password: Scalars['String'],
  birthday: Scalars['DateTime'],
};

export type Track = {
   __typename?: 'Track',
  id: Scalars['ID'],
  title: Scalars['String'],
  genre?: Maybe<TrackGenre>,
  user?: Maybe<User>,
  plays: Array<Play>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type TrackGenre = {
   __typename?: 'TrackGenre',
  id: Scalars['ID'],
  name: Scalars['String'],
  tracks?: Maybe<Array<Track>>,
  favoritedUsers?: Maybe<Array<User>>,
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type UpdatePlaylistInput = {
  title: Scalars['String'],
  description: Scalars['String'],
};

export type UpdateTrackInput = {
  trackId: Scalars['ID'],
  trackData: UpdateTrackInputDto,
};

export type UpdateTrackInputDto = {
  title?: Maybe<Scalars['String']>,
  genreId?: Maybe<Scalars['ID']>,
  userId?: Maybe<Scalars['ID']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  fullName: Scalars['String'],
  emailAddress: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  birthday: Scalars['DateTime'],
  favoriteGenre: TrackGenre,
  playlists?: Maybe<Array<Playlist>>,
  tracks?: Maybe<Array<Track>>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type SignupUserMutationVariables = {
  fullName: Scalars['String'],
  emailAddress: Scalars['String'],
  password: Scalars['String'],
  birthday: Scalars['DateTime']
};


export type SignupUserMutation = (
  { __typename?: 'Mutation' }
  & { signupUser: Maybe<(
    { __typename?: 'AuthUserResponse' }
    & Pick<AuthUserResponse, 'authToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'fullName' | 'emailAddress' | 'createdAt' | 'updatedAt'>
    ) }
  )> }
);

export type LoginUserMutationVariables = {
  emailAddress: Scalars['String'],
  password: Scalars['String']
};


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'AuthUserResponse' }
    & Pick<AuthUserResponse, 'authToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'emailAddress' | 'createdAt' | 'updatedAt'>
    ) }
  ) }
);


export const SignupUserDocument = gql`
    mutation signupUser($fullName: String!, $emailAddress: String!, $password: String!, $birthday: DateTime!) {
  signupUser(signupUserData: {fullName: $fullName, emailAddress: $emailAddress, password: $password, birthday: $birthday}) {
    user {
      id
      fullName
      emailAddress
      createdAt
      updatedAt
    }
    authToken
  }
}
    `;
export type SignupUserMutationFn = ApolloReactCommon.MutationFunction<SignupUserMutation, SignupUserMutationVariables>;
export type SignupUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignupUserMutation, SignupUserMutationVariables>, 'mutation'>;

    export const SignupUserComponent = (props: SignupUserComponentProps) => (
      <ApolloReactComponents.Mutation<SignupUserMutation, SignupUserMutationVariables> mutation={SignupUserDocument} {...props} />
    );
    
export type SignupUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SignupUserMutation, SignupUserMutationVariables> | TChildProps;
export function withSignupUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignupUserMutation,
  SignupUserMutationVariables,
  SignupUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SignupUserMutation, SignupUserMutationVariables, SignupUserProps<TChildProps>>(SignupUserDocument, {
      alias: 'signupUser',
      ...operationOptions
    });
};

/**
 * __useSignupUserMutation__
 *
 * To run a mutation, you first call `useSignupUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupUserMutation, { data, loading, error }] = useSignupUserMutation({
 *   variables: {
 *      fullName: // value for 'fullName'
 *      emailAddress: // value for 'emailAddress'
 *      password: // value for 'password'
 *      birthday: // value for 'birthday'
 *   },
 * });
 */
export function useSignupUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupUserMutation, SignupUserMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupUserMutation, SignupUserMutationVariables>(SignupUserDocument, baseOptions);
      }
export type SignupUserMutationHookResult = ReturnType<typeof useSignupUserMutation>;
export type SignupUserMutationResult = ApolloReactCommon.MutationResult<SignupUserMutation>;
export type SignupUserMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupUserMutation, SignupUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation loginUser($emailAddress: String!, $password: String!) {
  loginUser(loginUserData: {emailAddress: $emailAddress, password: $password}) {
    user {
      id
      emailAddress
      createdAt
      updatedAt
    }
    authToken
  }
}
    `;
export type LoginUserMutationFn = ApolloReactCommon.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;
export type LoginUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginUserMutation, LoginUserMutationVariables>, 'mutation'>;

    export const LoginUserComponent = (props: LoginUserComponentProps) => (
      <ApolloReactComponents.Mutation<LoginUserMutation, LoginUserMutationVariables> mutation={LoginUserDocument} {...props} />
    );
    
export type LoginUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LoginUserMutation, LoginUserMutationVariables> | TChildProps;
export function withLoginUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginUserMutation,
  LoginUserMutationVariables,
  LoginUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LoginUserMutation, LoginUserMutationVariables, LoginUserProps<TChildProps>>(LoginUserDocument, {
      alias: 'loginUser',
      ...operationOptions
    });
};

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      emailAddress: // value for 'emailAddress'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = ApolloReactCommon.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;