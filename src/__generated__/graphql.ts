/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Game = {
  __typename?: 'Game';
  bombs: Scalars['Int']['output'];
  columns: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rows: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
  user: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  leaderboard?: Maybe<Array<Maybe<Game>>>;
};

export type LeaderboardQueryVariables = Exact<{ [key: string]: never; }>;


export type LeaderboardQuery = { __typename?: 'Query', leaderboard?: Array<{ __typename?: 'Game', id: string, user: string, rows: number, columns: number, bombs: number, time: number, createdAt: string } | null> | null };


export const LeaderboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Leaderboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaderboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"}},{"kind":"Field","name":{"kind":"Name","value":"rows"}},{"kind":"Field","name":{"kind":"Name","value":"columns"}},{"kind":"Field","name":{"kind":"Name","value":"bombs"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<LeaderboardQuery, LeaderboardQueryVariables>;