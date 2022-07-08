// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  nfts?: Maybe<Array<NFT>>;
  sales: Scalars['Int'];
  purchases: Scalars['Int'];
  spent: Scalars['BigInt'];
  earned: Scalars['BigInt'];
};


export type AccountnftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFT_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  sales?: InputMaybe<Scalars['Int']>;
  sales_not?: InputMaybe<Scalars['Int']>;
  sales_gt?: InputMaybe<Scalars['Int']>;
  sales_lt?: InputMaybe<Scalars['Int']>;
  sales_gte?: InputMaybe<Scalars['Int']>;
  sales_lte?: InputMaybe<Scalars['Int']>;
  sales_in?: InputMaybe<Array<Scalars['Int']>>;
  sales_not_in?: InputMaybe<Array<Scalars['Int']>>;
  purchases?: InputMaybe<Scalars['Int']>;
  purchases_not?: InputMaybe<Scalars['Int']>;
  purchases_gt?: InputMaybe<Scalars['Int']>;
  purchases_lt?: InputMaybe<Scalars['Int']>;
  purchases_gte?: InputMaybe<Scalars['Int']>;
  purchases_lte?: InputMaybe<Scalars['Int']>;
  purchases_in?: InputMaybe<Array<Scalars['Int']>>;
  purchases_not_in?: InputMaybe<Array<Scalars['Int']>>;
  spent?: InputMaybe<Scalars['BigInt']>;
  spent_not?: InputMaybe<Scalars['BigInt']>;
  spent_gt?: InputMaybe<Scalars['BigInt']>;
  spent_lt?: InputMaybe<Scalars['BigInt']>;
  spent_gte?: InputMaybe<Scalars['BigInt']>;
  spent_lte?: InputMaybe<Scalars['BigInt']>;
  spent_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spent_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  earned?: InputMaybe<Scalars['BigInt']>;
  earned_not?: InputMaybe<Scalars['BigInt']>;
  earned_gt?: InputMaybe<Scalars['BigInt']>;
  earned_lt?: InputMaybe<Scalars['BigInt']>;
  earned_gte?: InputMaybe<Scalars['BigInt']>;
  earned_lte?: InputMaybe<Scalars['BigInt']>;
  earned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  earned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Account_orderBy =
  | 'id'
  | 'address'
  | 'nfts'
  | 'sales'
  | 'purchases'
  | 'spent'
  | 'earned';

export type AnalyticsDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  sales: Scalars['Int'];
  volume: Scalars['BigInt'];
  creatorsEarnings: Scalars['BigInt'];
  daoEarnings: Scalars['BigInt'];
};

export type AnalyticsDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  sales?: InputMaybe<Scalars['Int']>;
  sales_not?: InputMaybe<Scalars['Int']>;
  sales_gt?: InputMaybe<Scalars['Int']>;
  sales_lt?: InputMaybe<Scalars['Int']>;
  sales_gte?: InputMaybe<Scalars['Int']>;
  sales_lte?: InputMaybe<Scalars['Int']>;
  sales_in?: InputMaybe<Array<Scalars['Int']>>;
  sales_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creatorsEarnings?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_not?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_gt?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_lt?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_gte?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_lte?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creatorsEarnings_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoEarnings?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_not?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_gt?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_lt?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_gte?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_lte?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoEarnings_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type AnalyticsDayData_orderBy =
  | 'id'
  | 'date'
  | 'sales'
  | 'volume'
  | 'creatorsEarnings'
  | 'daoEarnings';

export type Bid = {
  id: Scalars['ID'];
  bidAddress: Scalars['Bytes'];
  category: Category;
  nft?: Maybe<NFT>;
  nftAddress: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  bidder?: Maybe<Scalars['Bytes']>;
  seller?: Maybe<Scalars['Bytes']>;
  price: Scalars['BigInt'];
  fingerprint?: Maybe<Scalars['Bytes']>;
  status: OrderStatus;
  blockchainId: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  expiresAt: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
};

export type Bid_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bidAddress?: InputMaybe<Scalars['Bytes']>;
  bidAddress_not?: InputMaybe<Scalars['Bytes']>;
  bidAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bidAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bidAddress_contains?: InputMaybe<Scalars['Bytes']>;
  bidAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  category?: InputMaybe<Category>;
  category_not?: InputMaybe<Category>;
  category_in?: InputMaybe<Array<Category>>;
  category_not_in?: InputMaybe<Array<Category>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftAddress?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not?: InputMaybe<Scalars['Bytes']>;
  nftAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_contains?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bidder?: InputMaybe<Scalars['Bytes']>;
  bidder_not?: InputMaybe<Scalars['Bytes']>;
  bidder_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bidder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bidder_contains?: InputMaybe<Scalars['Bytes']>;
  bidder_not_contains?: InputMaybe<Scalars['Bytes']>;
  seller?: InputMaybe<Scalars['Bytes']>;
  seller_not?: InputMaybe<Scalars['Bytes']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  seller_contains?: InputMaybe<Scalars['Bytes']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fingerprint?: InputMaybe<Scalars['Bytes']>;
  fingerprint_not?: InputMaybe<Scalars['Bytes']>;
  fingerprint_in?: InputMaybe<Array<Scalars['Bytes']>>;
  fingerprint_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  fingerprint_contains?: InputMaybe<Scalars['Bytes']>;
  fingerprint_not_contains?: InputMaybe<Scalars['Bytes']>;
  status?: InputMaybe<OrderStatus>;
  status_not?: InputMaybe<OrderStatus>;
  status_in?: InputMaybe<Array<OrderStatus>>;
  status_not_in?: InputMaybe<Array<OrderStatus>>;
  blockchainId?: InputMaybe<Scalars['String']>;
  blockchainId_not?: InputMaybe<Scalars['String']>;
  blockchainId_gt?: InputMaybe<Scalars['String']>;
  blockchainId_lt?: InputMaybe<Scalars['String']>;
  blockchainId_gte?: InputMaybe<Scalars['String']>;
  blockchainId_lte?: InputMaybe<Scalars['String']>;
  blockchainId_in?: InputMaybe<Array<Scalars['String']>>;
  blockchainId_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockchainId_contains?: InputMaybe<Scalars['String']>;
  blockchainId_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchainId_not_contains?: InputMaybe<Scalars['String']>;
  blockchainId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchainId_starts_with?: InputMaybe<Scalars['String']>;
  blockchainId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchainId_not_starts_with?: InputMaybe<Scalars['String']>;
  blockchainId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchainId_ends_with?: InputMaybe<Scalars['String']>;
  blockchainId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockchainId_not_ends_with?: InputMaybe<Scalars['String']>;
  blockchainId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_not?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Bid_orderBy =
  | 'id'
  | 'bidAddress'
  | 'category'
  | 'nft'
  | 'nftAddress'
  | 'tokenId'
  | 'bidder'
  | 'seller'
  | 'price'
  | 'fingerprint'
  | 'status'
  | 'blockchainId'
  | 'blockNumber'
  | 'expiresAt'
  | 'createdAt'
  | 'updatedAt';

/** The block at which the query should be executed. */
export type Block_height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Category =
  | 'parcel'
  | 'estate'
  | 'wearable'
  | 'ens';

export type Count = {
  id: Scalars['ID'];
  orderTotal: Scalars['Int'];
  orderParcel: Scalars['Int'];
  orderEstate: Scalars['Int'];
  orderWearable: Scalars['Int'];
  orderENS: Scalars['Int'];
  parcelTotal: Scalars['Int'];
  estateTotal: Scalars['Int'];
  wearableTotal: Scalars['Int'];
  ensTotal: Scalars['Int'];
  started: Scalars['Int'];
  salesTotal: Scalars['Int'];
  salesManaTotal: Scalars['BigInt'];
  creatorEarningsManaTotal: Scalars['BigInt'];
  daoEarningsManaTotal: Scalars['BigInt'];
};

export type Count_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  orderTotal?: InputMaybe<Scalars['Int']>;
  orderTotal_not?: InputMaybe<Scalars['Int']>;
  orderTotal_gt?: InputMaybe<Scalars['Int']>;
  orderTotal_lt?: InputMaybe<Scalars['Int']>;
  orderTotal_gte?: InputMaybe<Scalars['Int']>;
  orderTotal_lte?: InputMaybe<Scalars['Int']>;
  orderTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  orderTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  orderParcel?: InputMaybe<Scalars['Int']>;
  orderParcel_not?: InputMaybe<Scalars['Int']>;
  orderParcel_gt?: InputMaybe<Scalars['Int']>;
  orderParcel_lt?: InputMaybe<Scalars['Int']>;
  orderParcel_gte?: InputMaybe<Scalars['Int']>;
  orderParcel_lte?: InputMaybe<Scalars['Int']>;
  orderParcel_in?: InputMaybe<Array<Scalars['Int']>>;
  orderParcel_not_in?: InputMaybe<Array<Scalars['Int']>>;
  orderEstate?: InputMaybe<Scalars['Int']>;
  orderEstate_not?: InputMaybe<Scalars['Int']>;
  orderEstate_gt?: InputMaybe<Scalars['Int']>;
  orderEstate_lt?: InputMaybe<Scalars['Int']>;
  orderEstate_gte?: InputMaybe<Scalars['Int']>;
  orderEstate_lte?: InputMaybe<Scalars['Int']>;
  orderEstate_in?: InputMaybe<Array<Scalars['Int']>>;
  orderEstate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  orderWearable?: InputMaybe<Scalars['Int']>;
  orderWearable_not?: InputMaybe<Scalars['Int']>;
  orderWearable_gt?: InputMaybe<Scalars['Int']>;
  orderWearable_lt?: InputMaybe<Scalars['Int']>;
  orderWearable_gte?: InputMaybe<Scalars['Int']>;
  orderWearable_lte?: InputMaybe<Scalars['Int']>;
  orderWearable_in?: InputMaybe<Array<Scalars['Int']>>;
  orderWearable_not_in?: InputMaybe<Array<Scalars['Int']>>;
  orderENS?: InputMaybe<Scalars['Int']>;
  orderENS_not?: InputMaybe<Scalars['Int']>;
  orderENS_gt?: InputMaybe<Scalars['Int']>;
  orderENS_lt?: InputMaybe<Scalars['Int']>;
  orderENS_gte?: InputMaybe<Scalars['Int']>;
  orderENS_lte?: InputMaybe<Scalars['Int']>;
  orderENS_in?: InputMaybe<Array<Scalars['Int']>>;
  orderENS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  parcelTotal?: InputMaybe<Scalars['Int']>;
  parcelTotal_not?: InputMaybe<Scalars['Int']>;
  parcelTotal_gt?: InputMaybe<Scalars['Int']>;
  parcelTotal_lt?: InputMaybe<Scalars['Int']>;
  parcelTotal_gte?: InputMaybe<Scalars['Int']>;
  parcelTotal_lte?: InputMaybe<Scalars['Int']>;
  parcelTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  parcelTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  estateTotal?: InputMaybe<Scalars['Int']>;
  estateTotal_not?: InputMaybe<Scalars['Int']>;
  estateTotal_gt?: InputMaybe<Scalars['Int']>;
  estateTotal_lt?: InputMaybe<Scalars['Int']>;
  estateTotal_gte?: InputMaybe<Scalars['Int']>;
  estateTotal_lte?: InputMaybe<Scalars['Int']>;
  estateTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  estateTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  wearableTotal?: InputMaybe<Scalars['Int']>;
  wearableTotal_not?: InputMaybe<Scalars['Int']>;
  wearableTotal_gt?: InputMaybe<Scalars['Int']>;
  wearableTotal_lt?: InputMaybe<Scalars['Int']>;
  wearableTotal_gte?: InputMaybe<Scalars['Int']>;
  wearableTotal_lte?: InputMaybe<Scalars['Int']>;
  wearableTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  wearableTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  ensTotal?: InputMaybe<Scalars['Int']>;
  ensTotal_not?: InputMaybe<Scalars['Int']>;
  ensTotal_gt?: InputMaybe<Scalars['Int']>;
  ensTotal_lt?: InputMaybe<Scalars['Int']>;
  ensTotal_gte?: InputMaybe<Scalars['Int']>;
  ensTotal_lte?: InputMaybe<Scalars['Int']>;
  ensTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  ensTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  started?: InputMaybe<Scalars['Int']>;
  started_not?: InputMaybe<Scalars['Int']>;
  started_gt?: InputMaybe<Scalars['Int']>;
  started_lt?: InputMaybe<Scalars['Int']>;
  started_gte?: InputMaybe<Scalars['Int']>;
  started_lte?: InputMaybe<Scalars['Int']>;
  started_in?: InputMaybe<Array<Scalars['Int']>>;
  started_not_in?: InputMaybe<Array<Scalars['Int']>>;
  salesTotal?: InputMaybe<Scalars['Int']>;
  salesTotal_not?: InputMaybe<Scalars['Int']>;
  salesTotal_gt?: InputMaybe<Scalars['Int']>;
  salesTotal_lt?: InputMaybe<Scalars['Int']>;
  salesTotal_gte?: InputMaybe<Scalars['Int']>;
  salesTotal_lte?: InputMaybe<Scalars['Int']>;
  salesTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  salesTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  salesManaTotal?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_not?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_gt?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_lt?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_gte?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_lte?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  salesManaTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creatorEarningsManaTotal?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_not?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_gt?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_lt?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_gte?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_lte?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creatorEarningsManaTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoEarningsManaTotal?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_not?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_gt?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_lt?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_gte?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_lte?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoEarningsManaTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Count_orderBy =
  | 'id'
  | 'orderTotal'
  | 'orderParcel'
  | 'orderEstate'
  | 'orderWearable'
  | 'orderENS'
  | 'parcelTotal'
  | 'estateTotal'
  | 'wearableTotal'
  | 'ensTotal'
  | 'started'
  | 'salesTotal'
  | 'salesManaTotal'
  | 'creatorEarningsManaTotal'
  | 'daoEarningsManaTotal';

export type Data = {
  id: Scalars['ID'];
  parcel?: Maybe<Parcel>;
  estate?: Maybe<Estate>;
  version: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ipns?: Maybe<Scalars['String']>;
};

export type Data_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  parcel?: InputMaybe<Scalars['String']>;
  parcel_not?: InputMaybe<Scalars['String']>;
  parcel_gt?: InputMaybe<Scalars['String']>;
  parcel_lt?: InputMaybe<Scalars['String']>;
  parcel_gte?: InputMaybe<Scalars['String']>;
  parcel_lte?: InputMaybe<Scalars['String']>;
  parcel_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_contains?: InputMaybe<Scalars['String']>;
  parcel_contains_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_contains?: InputMaybe<Scalars['String']>;
  parcel_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parcel_starts_with?: InputMaybe<Scalars['String']>;
  parcel_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_ends_with?: InputMaybe<Scalars['String']>;
  parcel_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_contains_nocase?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipns?: InputMaybe<Scalars['String']>;
  ipns_not?: InputMaybe<Scalars['String']>;
  ipns_gt?: InputMaybe<Scalars['String']>;
  ipns_lt?: InputMaybe<Scalars['String']>;
  ipns_gte?: InputMaybe<Scalars['String']>;
  ipns_lte?: InputMaybe<Scalars['String']>;
  ipns_in?: InputMaybe<Array<Scalars['String']>>;
  ipns_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipns_contains?: InputMaybe<Scalars['String']>;
  ipns_contains_nocase?: InputMaybe<Scalars['String']>;
  ipns_not_contains?: InputMaybe<Scalars['String']>;
  ipns_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipns_starts_with?: InputMaybe<Scalars['String']>;
  ipns_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipns_not_starts_with?: InputMaybe<Scalars['String']>;
  ipns_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipns_ends_with?: InputMaybe<Scalars['String']>;
  ipns_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipns_not_ends_with?: InputMaybe<Scalars['String']>;
  ipns_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type Data_orderBy =
  | 'id'
  | 'parcel'
  | 'estate'
  | 'version'
  | 'name'
  | 'description'
  | 'ipns';

export type ENS = {
  id: Scalars['ID'];
  tokenId: Scalars['BigInt'];
  owner: Account;
  caller?: Maybe<Scalars['Bytes']>;
  beneficiary?: Maybe<Scalars['Bytes']>;
  labelHash?: Maybe<Scalars['Bytes']>;
  subdomain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['BigInt']>;
  nft?: Maybe<NFT>;
};

export type ENS_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  labelHash?: InputMaybe<Scalars['Bytes']>;
  labelHash_not?: InputMaybe<Scalars['Bytes']>;
  labelHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelHash_contains?: InputMaybe<Scalars['Bytes']>;
  labelHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  subdomain?: InputMaybe<Scalars['String']>;
  subdomain_not?: InputMaybe<Scalars['String']>;
  subdomain_gt?: InputMaybe<Scalars['String']>;
  subdomain_lt?: InputMaybe<Scalars['String']>;
  subdomain_gte?: InputMaybe<Scalars['String']>;
  subdomain_lte?: InputMaybe<Scalars['String']>;
  subdomain_in?: InputMaybe<Array<Scalars['String']>>;
  subdomain_not_in?: InputMaybe<Array<Scalars['String']>>;
  subdomain_contains?: InputMaybe<Scalars['String']>;
  subdomain_contains_nocase?: InputMaybe<Scalars['String']>;
  subdomain_not_contains?: InputMaybe<Scalars['String']>;
  subdomain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subdomain_starts_with?: InputMaybe<Scalars['String']>;
  subdomain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subdomain_not_starts_with?: InputMaybe<Scalars['String']>;
  subdomain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subdomain_ends_with?: InputMaybe<Scalars['String']>;
  subdomain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subdomain_not_ends_with?: InputMaybe<Scalars['String']>;
  subdomain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type ENS_orderBy =
  | 'id'
  | 'tokenId'
  | 'owner'
  | 'caller'
  | 'beneficiary'
  | 'labelHash'
  | 'subdomain'
  | 'createdAt'
  | 'nft';

export type Estate = {
  id: Scalars['ID'];
  tokenId: Scalars['BigInt'];
  owner: Account;
  parcels?: Maybe<Array<Parcel>>;
  size?: Maybe<Scalars['Int']>;
  data?: Maybe<Data>;
  rawData?: Maybe<Scalars['String']>;
  nft?: Maybe<NFT>;
};


export type EstateparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
};

export type Estate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parcels?: InputMaybe<Array<Scalars['String']>>;
  parcels_not?: InputMaybe<Array<Scalars['String']>>;
  parcels_contains?: InputMaybe<Array<Scalars['String']>>;
  parcels_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  parcels_not_contains?: InputMaybe<Array<Scalars['String']>>;
  parcels_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  size?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<Scalars['Int']>>;
  size_not_in?: InputMaybe<Array<Scalars['Int']>>;
  data?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_contains_nocase?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rawData?: InputMaybe<Scalars['String']>;
  rawData_not?: InputMaybe<Scalars['String']>;
  rawData_gt?: InputMaybe<Scalars['String']>;
  rawData_lt?: InputMaybe<Scalars['String']>;
  rawData_gte?: InputMaybe<Scalars['String']>;
  rawData_lte?: InputMaybe<Scalars['String']>;
  rawData_in?: InputMaybe<Array<Scalars['String']>>;
  rawData_not_in?: InputMaybe<Array<Scalars['String']>>;
  rawData_contains?: InputMaybe<Scalars['String']>;
  rawData_contains_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_contains?: InputMaybe<Scalars['String']>;
  rawData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rawData_starts_with?: InputMaybe<Scalars['String']>;
  rawData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_starts_with?: InputMaybe<Scalars['String']>;
  rawData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_ends_with?: InputMaybe<Scalars['String']>;
  rawData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_ends_with?: InputMaybe<Scalars['String']>;
  rawData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type Estate_orderBy =
  | 'id'
  | 'tokenId'
  | 'owner'
  | 'parcels'
  | 'size'
  | 'data'
  | 'rawData'
  | 'nft';

export type NFT = {
  id: Scalars['ID'];
  tokenId: Scalars['BigInt'];
  contractAddress: Scalars['Bytes'];
  category: Category;
  owner: Account;
  tokenURI?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Order>>;
  bids?: Maybe<Array<Bid>>;
  activeOrder?: Maybe<Order>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  parcel?: Maybe<Parcel>;
  estate?: Maybe<Estate>;
  wearable?: Maybe<Wearable>;
  ens?: Maybe<ENS>;
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  soldAt?: Maybe<Scalars['BigInt']>;
  sales: Scalars['Int'];
  volume: Scalars['BigInt'];
  searchOrderStatus?: Maybe<OrderStatus>;
  searchOrderPrice?: Maybe<Scalars['BigInt']>;
  searchOrderExpiresAt?: Maybe<Scalars['BigInt']>;
  searchOrderCreatedAt?: Maybe<Scalars['BigInt']>;
  searchIsLand?: Maybe<Scalars['Boolean']>;
  searchText?: Maybe<Scalars['String']>;
  searchParcelIsInBounds?: Maybe<Scalars['Boolean']>;
  searchParcelX?: Maybe<Scalars['BigInt']>;
  searchParcelY?: Maybe<Scalars['BigInt']>;
  searchParcelEstateId?: Maybe<Scalars['String']>;
  searchEstateSize?: Maybe<Scalars['Int']>;
  searchIsWearableHead?: Maybe<Scalars['Boolean']>;
  searchIsWearableAccessory?: Maybe<Scalars['Boolean']>;
  searchWearableRarity?: Maybe<Scalars['String']>;
  searchWearableCategory?: Maybe<WearableCategory>;
  searchWearableBodyShapes?: Maybe<Array<WearableBodyShape>>;
};


export type NFTordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
};


export type NFTbidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
};

export type NFT_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractAddress?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not?: InputMaybe<Scalars['Bytes']>;
  contractAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  category?: InputMaybe<Category>;
  category_not?: InputMaybe<Category>;
  category_in?: InputMaybe<Array<Category>>;
  category_not_in?: InputMaybe<Array<Category>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeOrder?: InputMaybe<Scalars['String']>;
  activeOrder_not?: InputMaybe<Scalars['String']>;
  activeOrder_gt?: InputMaybe<Scalars['String']>;
  activeOrder_lt?: InputMaybe<Scalars['String']>;
  activeOrder_gte?: InputMaybe<Scalars['String']>;
  activeOrder_lte?: InputMaybe<Scalars['String']>;
  activeOrder_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_contains?: InputMaybe<Scalars['String']>;
  activeOrder_contains_nocase?: InputMaybe<Scalars['String']>;
  activeOrder_not_contains?: InputMaybe<Scalars['String']>;
  activeOrder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  activeOrder_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeOrder_not_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeOrder_ends_with?: InputMaybe<Scalars['String']>;
  activeOrder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeOrder_not_ends_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parcel?: InputMaybe<Scalars['String']>;
  parcel_not?: InputMaybe<Scalars['String']>;
  parcel_gt?: InputMaybe<Scalars['String']>;
  parcel_lt?: InputMaybe<Scalars['String']>;
  parcel_gte?: InputMaybe<Scalars['String']>;
  parcel_lte?: InputMaybe<Scalars['String']>;
  parcel_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_contains?: InputMaybe<Scalars['String']>;
  parcel_contains_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_contains?: InputMaybe<Scalars['String']>;
  parcel_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parcel_starts_with?: InputMaybe<Scalars['String']>;
  parcel_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_ends_with?: InputMaybe<Scalars['String']>;
  parcel_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  wearable?: InputMaybe<Scalars['String']>;
  wearable_not?: InputMaybe<Scalars['String']>;
  wearable_gt?: InputMaybe<Scalars['String']>;
  wearable_lt?: InputMaybe<Scalars['String']>;
  wearable_gte?: InputMaybe<Scalars['String']>;
  wearable_lte?: InputMaybe<Scalars['String']>;
  wearable_in?: InputMaybe<Array<Scalars['String']>>;
  wearable_not_in?: InputMaybe<Array<Scalars['String']>>;
  wearable_contains?: InputMaybe<Scalars['String']>;
  wearable_contains_nocase?: InputMaybe<Scalars['String']>;
  wearable_not_contains?: InputMaybe<Scalars['String']>;
  wearable_not_contains_nocase?: InputMaybe<Scalars['String']>;
  wearable_starts_with?: InputMaybe<Scalars['String']>;
  wearable_starts_with_nocase?: InputMaybe<Scalars['String']>;
  wearable_not_starts_with?: InputMaybe<Scalars['String']>;
  wearable_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  wearable_ends_with?: InputMaybe<Scalars['String']>;
  wearable_ends_with_nocase?: InputMaybe<Scalars['String']>;
  wearable_not_ends_with?: InputMaybe<Scalars['String']>;
  wearable_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ens?: InputMaybe<Scalars['String']>;
  ens_not?: InputMaybe<Scalars['String']>;
  ens_gt?: InputMaybe<Scalars['String']>;
  ens_lt?: InputMaybe<Scalars['String']>;
  ens_gte?: InputMaybe<Scalars['String']>;
  ens_lte?: InputMaybe<Scalars['String']>;
  ens_in?: InputMaybe<Array<Scalars['String']>>;
  ens_not_in?: InputMaybe<Array<Scalars['String']>>;
  ens_contains?: InputMaybe<Scalars['String']>;
  ens_contains_nocase?: InputMaybe<Scalars['String']>;
  ens_not_contains?: InputMaybe<Scalars['String']>;
  ens_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ens_starts_with?: InputMaybe<Scalars['String']>;
  ens_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ens_not_starts_with?: InputMaybe<Scalars['String']>;
  ens_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ens_ends_with?: InputMaybe<Scalars['String']>;
  ens_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ens_not_ends_with?: InputMaybe<Scalars['String']>;
  ens_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soldAt?: InputMaybe<Scalars['BigInt']>;
  soldAt_not?: InputMaybe<Scalars['BigInt']>;
  soldAt_gt?: InputMaybe<Scalars['BigInt']>;
  soldAt_lt?: InputMaybe<Scalars['BigInt']>;
  soldAt_gte?: InputMaybe<Scalars['BigInt']>;
  soldAt_lte?: InputMaybe<Scalars['BigInt']>;
  soldAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soldAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales?: InputMaybe<Scalars['Int']>;
  sales_not?: InputMaybe<Scalars['Int']>;
  sales_gt?: InputMaybe<Scalars['Int']>;
  sales_lt?: InputMaybe<Scalars['Int']>;
  sales_gte?: InputMaybe<Scalars['Int']>;
  sales_lte?: InputMaybe<Scalars['Int']>;
  sales_in?: InputMaybe<Array<Scalars['Int']>>;
  sales_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderStatus?: InputMaybe<OrderStatus>;
  searchOrderStatus_not?: InputMaybe<OrderStatus>;
  searchOrderStatus_in?: InputMaybe<Array<OrderStatus>>;
  searchOrderStatus_not_in?: InputMaybe<Array<OrderStatus>>;
  searchOrderPrice?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_not?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_gt?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_lt?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_gte?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_lte?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderExpiresAt?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_not?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_gt?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_lt?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_gte?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_lte?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderExpiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderCreatedAt?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_not?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderCreatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchIsLand?: InputMaybe<Scalars['Boolean']>;
  searchIsLand_not?: InputMaybe<Scalars['Boolean']>;
  searchIsLand_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchIsLand_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchText?: InputMaybe<Scalars['String']>;
  searchText_not?: InputMaybe<Scalars['String']>;
  searchText_gt?: InputMaybe<Scalars['String']>;
  searchText_lt?: InputMaybe<Scalars['String']>;
  searchText_gte?: InputMaybe<Scalars['String']>;
  searchText_lte?: InputMaybe<Scalars['String']>;
  searchText_in?: InputMaybe<Array<Scalars['String']>>;
  searchText_not_in?: InputMaybe<Array<Scalars['String']>>;
  searchText_contains?: InputMaybe<Scalars['String']>;
  searchText_contains_nocase?: InputMaybe<Scalars['String']>;
  searchText_not_contains?: InputMaybe<Scalars['String']>;
  searchText_not_contains_nocase?: InputMaybe<Scalars['String']>;
  searchText_starts_with?: InputMaybe<Scalars['String']>;
  searchText_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchText_not_starts_with?: InputMaybe<Scalars['String']>;
  searchText_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchText_ends_with?: InputMaybe<Scalars['String']>;
  searchText_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchText_not_ends_with?: InputMaybe<Scalars['String']>;
  searchText_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchParcelIsInBounds?: InputMaybe<Scalars['Boolean']>;
  searchParcelIsInBounds_not?: InputMaybe<Scalars['Boolean']>;
  searchParcelIsInBounds_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchParcelIsInBounds_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchParcelX?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_not?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_gt?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_lt?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_gte?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_lte?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchParcelX_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchParcelY?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_not?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_gt?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_lt?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_gte?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_lte?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchParcelY_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchParcelEstateId?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_gt?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_lt?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_gte?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_lte?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_in?: InputMaybe<Array<Scalars['String']>>;
  searchParcelEstateId_not_in?: InputMaybe<Array<Scalars['String']>>;
  searchParcelEstateId_contains?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_contains_nocase?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_contains?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_starts_with?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_starts_with?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_ends_with?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_ends_with?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchEstateSize?: InputMaybe<Scalars['Int']>;
  searchEstateSize_not?: InputMaybe<Scalars['Int']>;
  searchEstateSize_gt?: InputMaybe<Scalars['Int']>;
  searchEstateSize_lt?: InputMaybe<Scalars['Int']>;
  searchEstateSize_gte?: InputMaybe<Scalars['Int']>;
  searchEstateSize_lte?: InputMaybe<Scalars['Int']>;
  searchEstateSize_in?: InputMaybe<Array<Scalars['Int']>>;
  searchEstateSize_not_in?: InputMaybe<Array<Scalars['Int']>>;
  searchIsWearableHead?: InputMaybe<Scalars['Boolean']>;
  searchIsWearableHead_not?: InputMaybe<Scalars['Boolean']>;
  searchIsWearableHead_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchIsWearableHead_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchIsWearableAccessory?: InputMaybe<Scalars['Boolean']>;
  searchIsWearableAccessory_not?: InputMaybe<Scalars['Boolean']>;
  searchIsWearableAccessory_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchIsWearableAccessory_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchWearableRarity?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not?: InputMaybe<Scalars['String']>;
  searchWearableRarity_gt?: InputMaybe<Scalars['String']>;
  searchWearableRarity_lt?: InputMaybe<Scalars['String']>;
  searchWearableRarity_gte?: InputMaybe<Scalars['String']>;
  searchWearableRarity_lte?: InputMaybe<Scalars['String']>;
  searchWearableRarity_in?: InputMaybe<Array<Scalars['String']>>;
  searchWearableRarity_not_in?: InputMaybe<Array<Scalars['String']>>;
  searchWearableRarity_contains?: InputMaybe<Scalars['String']>;
  searchWearableRarity_contains_nocase?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_contains?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  searchWearableRarity_starts_with?: InputMaybe<Scalars['String']>;
  searchWearableRarity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_starts_with?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchWearableRarity_ends_with?: InputMaybe<Scalars['String']>;
  searchWearableRarity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_ends_with?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchWearableCategory?: InputMaybe<WearableCategory>;
  searchWearableCategory_not?: InputMaybe<WearableCategory>;
  searchWearableCategory_in?: InputMaybe<Array<WearableCategory>>;
  searchWearableCategory_not_in?: InputMaybe<Array<WearableCategory>>;
  searchWearableBodyShapes?: InputMaybe<Array<WearableBodyShape>>;
  searchWearableBodyShapes_not?: InputMaybe<Array<WearableBodyShape>>;
  searchWearableBodyShapes_contains?: InputMaybe<Array<WearableBodyShape>>;
  searchWearableBodyShapes_contains_nocase?: InputMaybe<Array<WearableBodyShape>>;
  searchWearableBodyShapes_not_contains?: InputMaybe<Array<WearableBodyShape>>;
  searchWearableBodyShapes_not_contains_nocase?: InputMaybe<Array<WearableBodyShape>>;
};

export type NFT_orderBy =
  | 'id'
  | 'tokenId'
  | 'contractAddress'
  | 'category'
  | 'owner'
  | 'tokenURI'
  | 'orders'
  | 'bids'
  | 'activeOrder'
  | 'name'
  | 'image'
  | 'parcel'
  | 'estate'
  | 'wearable'
  | 'ens'
  | 'createdAt'
  | 'updatedAt'
  | 'soldAt'
  | 'sales'
  | 'volume'
  | 'searchOrderStatus'
  | 'searchOrderPrice'
  | 'searchOrderExpiresAt'
  | 'searchOrderCreatedAt'
  | 'searchIsLand'
  | 'searchText'
  | 'searchParcelIsInBounds'
  | 'searchParcelX'
  | 'searchParcelY'
  | 'searchParcelEstateId'
  | 'searchEstateSize'
  | 'searchIsWearableHead'
  | 'searchIsWearableAccessory'
  | 'searchWearableRarity'
  | 'searchWearableCategory'
  | 'searchWearableBodyShapes';

export type Order = {
  id: Scalars['ID'];
  marketplaceAddress: Scalars['Bytes'];
  category: Category;
  nft?: Maybe<NFT>;
  nftAddress: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  txHash: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  buyer?: Maybe<Scalars['Bytes']>;
  price: Scalars['BigInt'];
  status: OrderStatus;
  blockNumber: Scalars['BigInt'];
  expiresAt: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type OrderStatus =
  | 'open'
  | 'sold'
  | 'cancelled';

export type Order_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketplaceAddress?: InputMaybe<Scalars['Bytes']>;
  marketplaceAddress_not?: InputMaybe<Scalars['Bytes']>;
  marketplaceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  marketplaceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  marketplaceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  marketplaceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  category?: InputMaybe<Category>;
  category_not?: InputMaybe<Category>;
  category_in?: InputMaybe<Array<Category>>;
  category_not_in?: InputMaybe<Array<Category>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftAddress?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not?: InputMaybe<Scalars['Bytes']>;
  nftAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_contains?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  buyer?: InputMaybe<Scalars['Bytes']>;
  buyer_not?: InputMaybe<Scalars['Bytes']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_contains?: InputMaybe<Scalars['Bytes']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<OrderStatus>;
  status_not?: InputMaybe<OrderStatus>;
  status_in?: InputMaybe<Array<OrderStatus>>;
  status_not_in?: InputMaybe<Array<OrderStatus>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_not?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Order_orderBy =
  | 'id'
  | 'marketplaceAddress'
  | 'category'
  | 'nft'
  | 'nftAddress'
  | 'tokenId'
  | 'txHash'
  | 'owner'
  | 'buyer'
  | 'price'
  | 'status'
  | 'blockNumber'
  | 'expiresAt'
  | 'createdAt'
  | 'updatedAt';

export type Parcel = {
  id: Scalars['ID'];
  tokenId: Scalars['BigInt'];
  owner: Account;
  x: Scalars['BigInt'];
  y: Scalars['BigInt'];
  estate?: Maybe<Estate>;
  data?: Maybe<Data>;
  rawData?: Maybe<Scalars['String']>;
  nft?: Maybe<NFT>;
};

export type Parcel_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['BigInt']>;
  x_not?: InputMaybe<Scalars['BigInt']>;
  x_gt?: InputMaybe<Scalars['BigInt']>;
  x_lt?: InputMaybe<Scalars['BigInt']>;
  x_gte?: InputMaybe<Scalars['BigInt']>;
  x_lte?: InputMaybe<Scalars['BigInt']>;
  x_in?: InputMaybe<Array<Scalars['BigInt']>>;
  x_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  y?: InputMaybe<Scalars['BigInt']>;
  y_not?: InputMaybe<Scalars['BigInt']>;
  y_gt?: InputMaybe<Scalars['BigInt']>;
  y_lt?: InputMaybe<Scalars['BigInt']>;
  y_gte?: InputMaybe<Scalars['BigInt']>;
  y_lte?: InputMaybe<Scalars['BigInt']>;
  y_in?: InputMaybe<Array<Scalars['BigInt']>>;
  y_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_contains_nocase?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rawData?: InputMaybe<Scalars['String']>;
  rawData_not?: InputMaybe<Scalars['String']>;
  rawData_gt?: InputMaybe<Scalars['String']>;
  rawData_lt?: InputMaybe<Scalars['String']>;
  rawData_gte?: InputMaybe<Scalars['String']>;
  rawData_lte?: InputMaybe<Scalars['String']>;
  rawData_in?: InputMaybe<Array<Scalars['String']>>;
  rawData_not_in?: InputMaybe<Array<Scalars['String']>>;
  rawData_contains?: InputMaybe<Scalars['String']>;
  rawData_contains_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_contains?: InputMaybe<Scalars['String']>;
  rawData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rawData_starts_with?: InputMaybe<Scalars['String']>;
  rawData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_starts_with?: InputMaybe<Scalars['String']>;
  rawData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_ends_with?: InputMaybe<Scalars['String']>;
  rawData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_ends_with?: InputMaybe<Scalars['String']>;
  rawData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type Parcel_orderBy =
  | 'id'
  | 'tokenId'
  | 'owner'
  | 'x'
  | 'y'
  | 'estate'
  | 'data'
  | 'rawData'
  | 'nft';

export type Query = {
  count?: Maybe<Count>;
  counts: Array<Count>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  parcel?: Maybe<Parcel>;
  parcels: Array<Parcel>;
  estate?: Maybe<Estate>;
  estates: Array<Estate>;
  data?: Maybe<Data>;
  datas: Array<Data>;
  wearable?: Maybe<Wearable>;
  wearables: Array<Wearable>;
  ens?: Maybe<ENS>;
  enss: Array<ENS>;
  nft?: Maybe<NFT>;
  nfts: Array<NFT>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  analyticsDayData?: Maybe<AnalyticsDayData>;
  analyticsDayDatas: Array<AnalyticsDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerycountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Count_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Count_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryorderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybidArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryestateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryestatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Estate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Estate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Data_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Data_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywearableArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywearablesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wearable_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Wearable_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryensArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryenssArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ENS_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFT_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysaleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysalesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sale_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryanalyticsDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryanalyticsDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnalyticsDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AnalyticsDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Sale = {
  id: Scalars['ID'];
  type: SaleType;
  buyer: Scalars['Bytes'];
  seller: Scalars['Bytes'];
  price: Scalars['BigInt'];
  nft: NFT;
  timestamp: Scalars['BigInt'];
  txHash: Scalars['Bytes'];
  searchTokenId: Scalars['BigInt'];
  searchContractAddress: Scalars['Bytes'];
};

export type SaleType =
  | 'bid'
  | 'order';

export type Sale_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<SaleType>;
  type_not?: InputMaybe<SaleType>;
  type_in?: InputMaybe<Array<SaleType>>;
  type_not_in?: InputMaybe<Array<SaleType>>;
  buyer?: InputMaybe<Scalars['Bytes']>;
  buyer_not?: InputMaybe<Scalars['Bytes']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_contains?: InputMaybe<Scalars['Bytes']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']>;
  seller?: InputMaybe<Scalars['Bytes']>;
  seller_not?: InputMaybe<Scalars['Bytes']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  seller_contains?: InputMaybe<Scalars['Bytes']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  searchTokenId?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_not?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_gt?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_lt?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_gte?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_lte?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchContractAddress?: InputMaybe<Scalars['Bytes']>;
  searchContractAddress_not?: InputMaybe<Scalars['Bytes']>;
  searchContractAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  searchContractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  searchContractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  searchContractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
};

export type Sale_orderBy =
  | 'id'
  | 'type'
  | 'buyer'
  | 'seller'
  | 'price'
  | 'nft'
  | 'timestamp'
  | 'txHash'
  | 'searchTokenId'
  | 'searchContractAddress';

export type Subscription = {
  count?: Maybe<Count>;
  counts: Array<Count>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  parcel?: Maybe<Parcel>;
  parcels: Array<Parcel>;
  estate?: Maybe<Estate>;
  estates: Array<Estate>;
  data?: Maybe<Data>;
  datas: Array<Data>;
  wearable?: Maybe<Wearable>;
  wearables: Array<Wearable>;
  ens?: Maybe<ENS>;
  enss: Array<ENS>;
  nft?: Maybe<NFT>;
  nfts: Array<NFT>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  analyticsDayData?: Maybe<AnalyticsDayData>;
  analyticsDayDatas: Array<AnalyticsDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptioncountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Count_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Count_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionorderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbidArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionestateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionestatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Estate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Estate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Data_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Data_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwearableArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwearablesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wearable_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Wearable_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionensArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionenssArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ENS_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFT_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsaleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsalesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sale_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionanalyticsDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionanalyticsDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnalyticsDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AnalyticsDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Wearable = {
  id: Scalars['ID'];
  owner: Account;
  representationId: Scalars['String'];
  collection: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  category: WearableCategory;
  rarity: WearableRarity;
  bodyShapes?: Maybe<Array<WearableBodyShape>>;
  nft?: Maybe<NFT>;
};

export type WearableBodyShape =
  | 'BaseFemale'
  | 'BaseMale';

export type WearableCategory =
  | 'eyebrows'
  | 'eyes'
  | 'facial_hair'
  | 'hair'
  | 'mouth'
  | 'upper_body'
  | 'lower_body'
  | 'feet'
  | 'earring'
  | 'eyewear'
  | 'hat'
  | 'helmet'
  | 'mask'
  | 'tiara'
  | 'top_head'
  | 'skin';

export type WearableRarity =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'mythic'
  | 'unique';

export type Wearable_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  representationId?: InputMaybe<Scalars['String']>;
  representationId_not?: InputMaybe<Scalars['String']>;
  representationId_gt?: InputMaybe<Scalars['String']>;
  representationId_lt?: InputMaybe<Scalars['String']>;
  representationId_gte?: InputMaybe<Scalars['String']>;
  representationId_lte?: InputMaybe<Scalars['String']>;
  representationId_in?: InputMaybe<Array<Scalars['String']>>;
  representationId_not_in?: InputMaybe<Array<Scalars['String']>>;
  representationId_contains?: InputMaybe<Scalars['String']>;
  representationId_contains_nocase?: InputMaybe<Scalars['String']>;
  representationId_not_contains?: InputMaybe<Scalars['String']>;
  representationId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  representationId_starts_with?: InputMaybe<Scalars['String']>;
  representationId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  representationId_not_starts_with?: InputMaybe<Scalars['String']>;
  representationId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  representationId_ends_with?: InputMaybe<Scalars['String']>;
  representationId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  representationId_not_ends_with?: InputMaybe<Scalars['String']>;
  representationId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<WearableCategory>;
  category_not?: InputMaybe<WearableCategory>;
  category_in?: InputMaybe<Array<WearableCategory>>;
  category_not_in?: InputMaybe<Array<WearableCategory>>;
  rarity?: InputMaybe<WearableRarity>;
  rarity_not?: InputMaybe<WearableRarity>;
  rarity_in?: InputMaybe<Array<WearableRarity>>;
  rarity_not_in?: InputMaybe<Array<WearableRarity>>;
  bodyShapes?: InputMaybe<Array<WearableBodyShape>>;
  bodyShapes_not?: InputMaybe<Array<WearableBodyShape>>;
  bodyShapes_contains?: InputMaybe<Array<WearableBodyShape>>;
  bodyShapes_contains_nocase?: InputMaybe<Array<WearableBodyShape>>;
  bodyShapes_not_contains?: InputMaybe<Array<WearableBodyShape>>;
  bodyShapes_not_contains_nocase?: InputMaybe<Array<WearableBodyShape>>;
};

export type Wearable_orderBy =
  | 'id'
  | 'owner'
  | 'representationId'
  | 'collection'
  | 'name'
  | 'description'
  | 'category'
  | 'rarity'
  | 'bodyShapes'
  | 'nft';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Account_filter: Account_filter;
  Account_orderBy: Account_orderBy;
  AnalyticsDayData: ResolverTypeWrapper<AnalyticsDayData>;
  AnalyticsDayData_filter: AnalyticsDayData_filter;
  AnalyticsDayData_orderBy: AnalyticsDayData_orderBy;
  Bid: ResolverTypeWrapper<Bid>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Bid_filter: Bid_filter;
  Bid_orderBy: Bid_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Block_height: Block_height;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Category: Category;
  Count: ResolverTypeWrapper<Count>;
  Count_filter: Count_filter;
  Count_orderBy: Count_orderBy;
  Data: ResolverTypeWrapper<Data>;
  Data_filter: Data_filter;
  Data_orderBy: Data_orderBy;
  ENS: ResolverTypeWrapper<ENS>;
  ENS_filter: ENS_filter;
  ENS_orderBy: ENS_orderBy;
  Estate: ResolverTypeWrapper<Estate>;
  Estate_filter: Estate_filter;
  Estate_orderBy: Estate_orderBy;
  NFT: ResolverTypeWrapper<NFT>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  NFT_filter: NFT_filter;
  NFT_orderBy: NFT_orderBy;
  Order: ResolverTypeWrapper<Order>;
  OrderDirection: OrderDirection;
  OrderStatus: OrderStatus;
  Order_filter: Order_filter;
  Order_orderBy: Order_orderBy;
  Parcel: ResolverTypeWrapper<Parcel>;
  Parcel_filter: Parcel_filter;
  Parcel_orderBy: Parcel_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Sale: ResolverTypeWrapper<Sale>;
  SaleType: SaleType;
  Sale_filter: Sale_filter;
  Sale_orderBy: Sale_orderBy;
  Subscription: ResolverTypeWrapper<{}>;
  Wearable: ResolverTypeWrapper<Wearable>;
  WearableBodyShape: WearableBodyShape;
  WearableCategory: WearableCategory;
  WearableRarity: WearableRarity;
  Wearable_filter: Wearable_filter;
  Wearable_orderBy: Wearable_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Account_filter: Account_filter;
  AnalyticsDayData: AnalyticsDayData;
  AnalyticsDayData_filter: AnalyticsDayData_filter;
  Bid: Bid;
  String: Scalars['String'];
  Bid_filter: Bid_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  Block_height: Block_height;
  Bytes: Scalars['Bytes'];
  Count: Count;
  Count_filter: Count_filter;
  Data: Data;
  Data_filter: Data_filter;
  ENS: ENS;
  ENS_filter: ENS_filter;
  Estate: Estate;
  Estate_filter: Estate_filter;
  NFT: NFT;
  Boolean: Scalars['Boolean'];
  NFT_filter: NFT_filter;
  Order: Order;
  Order_filter: Order_filter;
  Parcel: Parcel;
  Parcel_filter: Parcel_filter;
  Query: {};
  Sale: Sale;
  Sale_filter: Sale_filter;
  Subscription: {};
  Wearable: Wearable;
  Wearable_filter: Wearable_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  nfts?: Resolver<Maybe<Array<ResolversTypes['NFT']>>, ParentType, ContextType, RequireFields<AccountnftsArgs, 'skip' | 'first'>>;
  sales?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  purchases?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spent?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  earned?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnalyticsDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AnalyticsDayData'] = ResolversParentTypes['AnalyticsDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sales?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  creatorsEarnings?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  daoEarnings?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BidResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bid'] = ResolversParentTypes['Bid']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bidAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['NFT']>, ParentType, ContextType>;
  nftAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  bidder?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fingerprint?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  blockchainId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Count'] = ResolversParentTypes['Count']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderParcel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderEstate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderWearable?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderENS?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parcelTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  estateTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wearableTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ensTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  started?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salesTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  salesManaTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  creatorEarningsManaTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  daoEarningsManaTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Data'] = ResolversParentTypes['Data']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parcel?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType>;
  estate?: Resolver<Maybe<ResolversTypes['Estate']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipns?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ENSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ENS'] = ResolversParentTypes['ENS']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  beneficiary?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  labelHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  subdomain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['NFT']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EstateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Estate'] = ResolversParentTypes['Estate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  parcels?: Resolver<Maybe<Array<ResolversTypes['Parcel']>>, ParentType, ContextType, RequireFields<EstateparcelsArgs, 'skip' | 'first'>>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Data']>, ParentType, ContextType>;
  rawData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['NFT']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NFTResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NFT'] = ResolversParentTypes['NFT']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  tokenURI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType, RequireFields<NFTordersArgs, 'skip' | 'first'>>;
  bids?: Resolver<Maybe<Array<ResolversTypes['Bid']>>, ParentType, ContextType, RequireFields<NFTbidsArgs, 'skip' | 'first'>>;
  activeOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parcel?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType>;
  estate?: Resolver<Maybe<ResolversTypes['Estate']>, ParentType, ContextType>;
  wearable?: Resolver<Maybe<ResolversTypes['Wearable']>, ParentType, ContextType>;
  ens?: Resolver<Maybe<ResolversTypes['ENS']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  soldAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sales?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  searchOrderStatus?: Resolver<Maybe<ResolversTypes['OrderStatus']>, ParentType, ContextType>;
  searchOrderPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  searchOrderExpiresAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  searchOrderCreatedAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  searchIsLand?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  searchText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchParcelIsInBounds?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  searchParcelX?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  searchParcelY?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  searchParcelEstateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchEstateSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  searchIsWearableHead?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  searchIsWearableAccessory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  searchWearableRarity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  searchWearableCategory?: Resolver<Maybe<ResolversTypes['WearableCategory']>, ParentType, ContextType>;
  searchWearableBodyShapes?: Resolver<Maybe<Array<ResolversTypes['WearableBodyShape']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  marketplaceAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['NFT']>, ParentType, ContextType>;
  nftAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  buyer?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Parcel'] = ResolversParentTypes['Parcel']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  x?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  estate?: Resolver<Maybe<ResolversTypes['Estate']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Data']>, ParentType, ContextType>;
  rawData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['NFT']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Count']>, ParentType, ContextType, RequireFields<QuerycountArgs, 'id' | 'subgraphError'>>;
  counts?: Resolver<Array<ResolversTypes['Count']>, ParentType, ContextType, RequireFields<QuerycountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryorderArgs, 'id' | 'subgraphError'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryordersArgs, 'skip' | 'first' | 'subgraphError'>>;
  bid?: Resolver<Maybe<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<QuerybidArgs, 'id' | 'subgraphError'>>;
  bids?: Resolver<Array<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<QuerybidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  parcel?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType, RequireFields<QueryparcelArgs, 'id' | 'subgraphError'>>;
  parcels?: Resolver<Array<ResolversTypes['Parcel']>, ParentType, ContextType, RequireFields<QueryparcelsArgs, 'skip' | 'first' | 'subgraphError'>>;
  estate?: Resolver<Maybe<ResolversTypes['Estate']>, ParentType, ContextType, RequireFields<QueryestateArgs, 'id' | 'subgraphError'>>;
  estates?: Resolver<Array<ResolversTypes['Estate']>, ParentType, ContextType, RequireFields<QueryestatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  data?: Resolver<Maybe<ResolversTypes['Data']>, ParentType, ContextType, RequireFields<QuerydataArgs, 'id' | 'subgraphError'>>;
  datas?: Resolver<Array<ResolversTypes['Data']>, ParentType, ContextType, RequireFields<QuerydatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  wearable?: Resolver<Maybe<ResolversTypes['Wearable']>, ParentType, ContextType, RequireFields<QuerywearableArgs, 'id' | 'subgraphError'>>;
  wearables?: Resolver<Array<ResolversTypes['Wearable']>, ParentType, ContextType, RequireFields<QuerywearablesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ens?: Resolver<Maybe<ResolversTypes['ENS']>, ParentType, ContextType, RequireFields<QueryensArgs, 'id' | 'subgraphError'>>;
  enss?: Resolver<Array<ResolversTypes['ENS']>, ParentType, ContextType, RequireFields<QueryenssArgs, 'skip' | 'first' | 'subgraphError'>>;
  nft?: Resolver<Maybe<ResolversTypes['NFT']>, ParentType, ContextType, RequireFields<QuerynftArgs, 'id' | 'subgraphError'>>;
  nfts?: Resolver<Array<ResolversTypes['NFT']>, ParentType, ContextType, RequireFields<QuerynftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sale?: Resolver<Maybe<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<QuerysaleArgs, 'id' | 'subgraphError'>>;
  sales?: Resolver<Array<ResolversTypes['Sale']>, ParentType, ContextType, RequireFields<QuerysalesArgs, 'skip' | 'first' | 'subgraphError'>>;
  analyticsDayData?: Resolver<Maybe<ResolversTypes['AnalyticsDayData']>, ParentType, ContextType, RequireFields<QueryanalyticsDayDataArgs, 'id' | 'subgraphError'>>;
  analyticsDayDatas?: Resolver<Array<ResolversTypes['AnalyticsDayData']>, ParentType, ContextType, RequireFields<QueryanalyticsDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SaleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Sale'] = ResolversParentTypes['Sale']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SaleType'], ParentType, ContextType>;
  buyer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nft?: Resolver<ResolversTypes['NFT'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  searchTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  searchContractAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  count?: SubscriptionResolver<Maybe<ResolversTypes['Count']>, "count", ParentType, ContextType, RequireFields<SubscriptioncountArgs, 'id' | 'subgraphError'>>;
  counts?: SubscriptionResolver<Array<ResolversTypes['Count']>, "counts", ParentType, ContextType, RequireFields<SubscriptioncountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  order?: SubscriptionResolver<Maybe<ResolversTypes['Order']>, "order", ParentType, ContextType, RequireFields<SubscriptionorderArgs, 'id' | 'subgraphError'>>;
  orders?: SubscriptionResolver<Array<ResolversTypes['Order']>, "orders", ParentType, ContextType, RequireFields<SubscriptionordersArgs, 'skip' | 'first' | 'subgraphError'>>;
  bid?: SubscriptionResolver<Maybe<ResolversTypes['Bid']>, "bid", ParentType, ContextType, RequireFields<SubscriptionbidArgs, 'id' | 'subgraphError'>>;
  bids?: SubscriptionResolver<Array<ResolversTypes['Bid']>, "bids", ParentType, ContextType, RequireFields<SubscriptionbidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  parcel?: SubscriptionResolver<Maybe<ResolversTypes['Parcel']>, "parcel", ParentType, ContextType, RequireFields<SubscriptionparcelArgs, 'id' | 'subgraphError'>>;
  parcels?: SubscriptionResolver<Array<ResolversTypes['Parcel']>, "parcels", ParentType, ContextType, RequireFields<SubscriptionparcelsArgs, 'skip' | 'first' | 'subgraphError'>>;
  estate?: SubscriptionResolver<Maybe<ResolversTypes['Estate']>, "estate", ParentType, ContextType, RequireFields<SubscriptionestateArgs, 'id' | 'subgraphError'>>;
  estates?: SubscriptionResolver<Array<ResolversTypes['Estate']>, "estates", ParentType, ContextType, RequireFields<SubscriptionestatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  data?: SubscriptionResolver<Maybe<ResolversTypes['Data']>, "data", ParentType, ContextType, RequireFields<SubscriptiondataArgs, 'id' | 'subgraphError'>>;
  datas?: SubscriptionResolver<Array<ResolversTypes['Data']>, "datas", ParentType, ContextType, RequireFields<SubscriptiondatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  wearable?: SubscriptionResolver<Maybe<ResolversTypes['Wearable']>, "wearable", ParentType, ContextType, RequireFields<SubscriptionwearableArgs, 'id' | 'subgraphError'>>;
  wearables?: SubscriptionResolver<Array<ResolversTypes['Wearable']>, "wearables", ParentType, ContextType, RequireFields<SubscriptionwearablesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ens?: SubscriptionResolver<Maybe<ResolversTypes['ENS']>, "ens", ParentType, ContextType, RequireFields<SubscriptionensArgs, 'id' | 'subgraphError'>>;
  enss?: SubscriptionResolver<Array<ResolversTypes['ENS']>, "enss", ParentType, ContextType, RequireFields<SubscriptionenssArgs, 'skip' | 'first' | 'subgraphError'>>;
  nft?: SubscriptionResolver<Maybe<ResolversTypes['NFT']>, "nft", ParentType, ContextType, RequireFields<SubscriptionnftArgs, 'id' | 'subgraphError'>>;
  nfts?: SubscriptionResolver<Array<ResolversTypes['NFT']>, "nfts", ParentType, ContextType, RequireFields<SubscriptionnftsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sale?: SubscriptionResolver<Maybe<ResolversTypes['Sale']>, "sale", ParentType, ContextType, RequireFields<SubscriptionsaleArgs, 'id' | 'subgraphError'>>;
  sales?: SubscriptionResolver<Array<ResolversTypes['Sale']>, "sales", ParentType, ContextType, RequireFields<SubscriptionsalesArgs, 'skip' | 'first' | 'subgraphError'>>;
  analyticsDayData?: SubscriptionResolver<Maybe<ResolversTypes['AnalyticsDayData']>, "analyticsDayData", ParentType, ContextType, RequireFields<SubscriptionanalyticsDayDataArgs, 'id' | 'subgraphError'>>;
  analyticsDayDatas?: SubscriptionResolver<Array<ResolversTypes['AnalyticsDayData']>, "analyticsDayDatas", ParentType, ContextType, RequireFields<SubscriptionanalyticsDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type WearableResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Wearable'] = ResolversParentTypes['Wearable']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  representationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['WearableCategory'], ParentType, ContextType>;
  rarity?: Resolver<ResolversTypes['WearableRarity'], ParentType, ContextType>;
  bodyShapes?: Resolver<Maybe<Array<ResolversTypes['WearableBodyShape']>>, ParentType, ContextType>;
  nft?: Resolver<Maybe<ResolversTypes['NFT']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AnalyticsDayData?: AnalyticsDayDataResolvers<ContextType>;
  Bid?: BidResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Count?: CountResolvers<ContextType>;
  Data?: DataResolvers<ContextType>;
  ENS?: ENSResolvers<ContextType>;
  Estate?: EstateResolvers<ContextType>;
  NFT?: NFTResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Parcel?: ParcelResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sale?: SaleResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Wearable?: WearableResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace DclMarketplaceTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  nfts?: Maybe<Array<NFT>>;
  sales: Scalars['Int'];
  purchases: Scalars['Int'];
  spent: Scalars['BigInt'];
  earned: Scalars['BigInt'];
};


export type AccountnftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFT_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  sales?: InputMaybe<Scalars['Int']>;
  sales_not?: InputMaybe<Scalars['Int']>;
  sales_gt?: InputMaybe<Scalars['Int']>;
  sales_lt?: InputMaybe<Scalars['Int']>;
  sales_gte?: InputMaybe<Scalars['Int']>;
  sales_lte?: InputMaybe<Scalars['Int']>;
  sales_in?: InputMaybe<Array<Scalars['Int']>>;
  sales_not_in?: InputMaybe<Array<Scalars['Int']>>;
  purchases?: InputMaybe<Scalars['Int']>;
  purchases_not?: InputMaybe<Scalars['Int']>;
  purchases_gt?: InputMaybe<Scalars['Int']>;
  purchases_lt?: InputMaybe<Scalars['Int']>;
  purchases_gte?: InputMaybe<Scalars['Int']>;
  purchases_lte?: InputMaybe<Scalars['Int']>;
  purchases_in?: InputMaybe<Array<Scalars['Int']>>;
  purchases_not_in?: InputMaybe<Array<Scalars['Int']>>;
  spent?: InputMaybe<Scalars['BigInt']>;
  spent_not?: InputMaybe<Scalars['BigInt']>;
  spent_gt?: InputMaybe<Scalars['BigInt']>;
  spent_lt?: InputMaybe<Scalars['BigInt']>;
  spent_gte?: InputMaybe<Scalars['BigInt']>;
  spent_lte?: InputMaybe<Scalars['BigInt']>;
  spent_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spent_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  earned?: InputMaybe<Scalars['BigInt']>;
  earned_not?: InputMaybe<Scalars['BigInt']>;
  earned_gt?: InputMaybe<Scalars['BigInt']>;
  earned_lt?: InputMaybe<Scalars['BigInt']>;
  earned_gte?: InputMaybe<Scalars['BigInt']>;
  earned_lte?: InputMaybe<Scalars['BigInt']>;
  earned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  earned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Account_orderBy =
  | 'id'
  | 'address'
  | 'nfts'
  | 'sales'
  | 'purchases'
  | 'spent'
  | 'earned';

export type AnalyticsDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  sales: Scalars['Int'];
  volume: Scalars['BigInt'];
  creatorsEarnings: Scalars['BigInt'];
  daoEarnings: Scalars['BigInt'];
};

export type AnalyticsDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  sales?: InputMaybe<Scalars['Int']>;
  sales_not?: InputMaybe<Scalars['Int']>;
  sales_gt?: InputMaybe<Scalars['Int']>;
  sales_lt?: InputMaybe<Scalars['Int']>;
  sales_gte?: InputMaybe<Scalars['Int']>;
  sales_lte?: InputMaybe<Scalars['Int']>;
  sales_in?: InputMaybe<Array<Scalars['Int']>>;
  sales_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creatorsEarnings?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_not?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_gt?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_lt?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_gte?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_lte?: InputMaybe<Scalars['BigInt']>;
  creatorsEarnings_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creatorsEarnings_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoEarnings?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_not?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_gt?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_lt?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_gte?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_lte?: InputMaybe<Scalars['BigInt']>;
  daoEarnings_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoEarnings_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type AnalyticsDayData_orderBy =
  | 'id'
  | 'date'
  | 'sales'
  | 'volume'
  | 'creatorsEarnings'
  | 'daoEarnings';

export type Bid = {
  id: Scalars['ID'];
  bidAddress: Scalars['Bytes'];
  category: Category;
  nft?: Maybe<NFT>;
  nftAddress: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  bidder?: Maybe<Scalars['Bytes']>;
  seller?: Maybe<Scalars['Bytes']>;
  price: Scalars['BigInt'];
  fingerprint?: Maybe<Scalars['Bytes']>;
  status: OrderStatus;
  blockchainId: Scalars['String'];
  blockNumber: Scalars['BigInt'];
  expiresAt: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
};

export type Bid_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  bidAddress?: InputMaybe<Scalars['Bytes']>;
  bidAddress_not?: InputMaybe<Scalars['Bytes']>;
  bidAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bidAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bidAddress_contains?: InputMaybe<Scalars['Bytes']>;
  bidAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  category?: InputMaybe<Category>;
  category_not?: InputMaybe<Category>;
  category_in?: InputMaybe<Array<Category>>;
  category_not_in?: InputMaybe<Array<Category>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftAddress?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not?: InputMaybe<Scalars['Bytes']>;
  nftAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_contains?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bidder?: InputMaybe<Scalars['Bytes']>;
  bidder_not?: InputMaybe<Scalars['Bytes']>;
  bidder_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bidder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bidder_contains?: InputMaybe<Scalars['Bytes']>;
  bidder_not_contains?: InputMaybe<Scalars['Bytes']>;
  seller?: InputMaybe<Scalars['Bytes']>;
  seller_not?: InputMaybe<Scalars['Bytes']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  seller_contains?: InputMaybe<Scalars['Bytes']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fingerprint?: InputMaybe<Scalars['Bytes']>;
  fingerprint_not?: InputMaybe<Scalars['Bytes']>;
  fingerprint_in?: InputMaybe<Array<Scalars['Bytes']>>;
  fingerprint_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  fingerprint_contains?: InputMaybe<Scalars['Bytes']>;
  fingerprint_not_contains?: InputMaybe<Scalars['Bytes']>;
  status?: InputMaybe<OrderStatus>;
  status_not?: InputMaybe<OrderStatus>;
  status_in?: InputMaybe<Array<OrderStatus>>;
  status_not_in?: InputMaybe<Array<OrderStatus>>;
  blockchainId?: InputMaybe<Scalars['String']>;
  blockchainId_not?: InputMaybe<Scalars['String']>;
  blockchainId_gt?: InputMaybe<Scalars['String']>;
  blockchainId_lt?: InputMaybe<Scalars['String']>;
  blockchainId_gte?: InputMaybe<Scalars['String']>;
  blockchainId_lte?: InputMaybe<Scalars['String']>;
  blockchainId_in?: InputMaybe<Array<Scalars['String']>>;
  blockchainId_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockchainId_contains?: InputMaybe<Scalars['String']>;
  blockchainId_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchainId_not_contains?: InputMaybe<Scalars['String']>;
  blockchainId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  blockchainId_starts_with?: InputMaybe<Scalars['String']>;
  blockchainId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchainId_not_starts_with?: InputMaybe<Scalars['String']>;
  blockchainId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockchainId_ends_with?: InputMaybe<Scalars['String']>;
  blockchainId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockchainId_not_ends_with?: InputMaybe<Scalars['String']>;
  blockchainId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_not?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Bid_orderBy =
  | 'id'
  | 'bidAddress'
  | 'category'
  | 'nft'
  | 'nftAddress'
  | 'tokenId'
  | 'bidder'
  | 'seller'
  | 'price'
  | 'fingerprint'
  | 'status'
  | 'blockchainId'
  | 'blockNumber'
  | 'expiresAt'
  | 'createdAt'
  | 'updatedAt';

/** The block at which the query should be executed. */
export type Block_height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Category =
  | 'parcel'
  | 'estate'
  | 'wearable'
  | 'ens';

export type Count = {
  id: Scalars['ID'];
  orderTotal: Scalars['Int'];
  orderParcel: Scalars['Int'];
  orderEstate: Scalars['Int'];
  orderWearable: Scalars['Int'];
  orderENS: Scalars['Int'];
  parcelTotal: Scalars['Int'];
  estateTotal: Scalars['Int'];
  wearableTotal: Scalars['Int'];
  ensTotal: Scalars['Int'];
  started: Scalars['Int'];
  salesTotal: Scalars['Int'];
  salesManaTotal: Scalars['BigInt'];
  creatorEarningsManaTotal: Scalars['BigInt'];
  daoEarningsManaTotal: Scalars['BigInt'];
};

export type Count_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  orderTotal?: InputMaybe<Scalars['Int']>;
  orderTotal_not?: InputMaybe<Scalars['Int']>;
  orderTotal_gt?: InputMaybe<Scalars['Int']>;
  orderTotal_lt?: InputMaybe<Scalars['Int']>;
  orderTotal_gte?: InputMaybe<Scalars['Int']>;
  orderTotal_lte?: InputMaybe<Scalars['Int']>;
  orderTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  orderTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  orderParcel?: InputMaybe<Scalars['Int']>;
  orderParcel_not?: InputMaybe<Scalars['Int']>;
  orderParcel_gt?: InputMaybe<Scalars['Int']>;
  orderParcel_lt?: InputMaybe<Scalars['Int']>;
  orderParcel_gte?: InputMaybe<Scalars['Int']>;
  orderParcel_lte?: InputMaybe<Scalars['Int']>;
  orderParcel_in?: InputMaybe<Array<Scalars['Int']>>;
  orderParcel_not_in?: InputMaybe<Array<Scalars['Int']>>;
  orderEstate?: InputMaybe<Scalars['Int']>;
  orderEstate_not?: InputMaybe<Scalars['Int']>;
  orderEstate_gt?: InputMaybe<Scalars['Int']>;
  orderEstate_lt?: InputMaybe<Scalars['Int']>;
  orderEstate_gte?: InputMaybe<Scalars['Int']>;
  orderEstate_lte?: InputMaybe<Scalars['Int']>;
  orderEstate_in?: InputMaybe<Array<Scalars['Int']>>;
  orderEstate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  orderWearable?: InputMaybe<Scalars['Int']>;
  orderWearable_not?: InputMaybe<Scalars['Int']>;
  orderWearable_gt?: InputMaybe<Scalars['Int']>;
  orderWearable_lt?: InputMaybe<Scalars['Int']>;
  orderWearable_gte?: InputMaybe<Scalars['Int']>;
  orderWearable_lte?: InputMaybe<Scalars['Int']>;
  orderWearable_in?: InputMaybe<Array<Scalars['Int']>>;
  orderWearable_not_in?: InputMaybe<Array<Scalars['Int']>>;
  orderENS?: InputMaybe<Scalars['Int']>;
  orderENS_not?: InputMaybe<Scalars['Int']>;
  orderENS_gt?: InputMaybe<Scalars['Int']>;
  orderENS_lt?: InputMaybe<Scalars['Int']>;
  orderENS_gte?: InputMaybe<Scalars['Int']>;
  orderENS_lte?: InputMaybe<Scalars['Int']>;
  orderENS_in?: InputMaybe<Array<Scalars['Int']>>;
  orderENS_not_in?: InputMaybe<Array<Scalars['Int']>>;
  parcelTotal?: InputMaybe<Scalars['Int']>;
  parcelTotal_not?: InputMaybe<Scalars['Int']>;
  parcelTotal_gt?: InputMaybe<Scalars['Int']>;
  parcelTotal_lt?: InputMaybe<Scalars['Int']>;
  parcelTotal_gte?: InputMaybe<Scalars['Int']>;
  parcelTotal_lte?: InputMaybe<Scalars['Int']>;
  parcelTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  parcelTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  estateTotal?: InputMaybe<Scalars['Int']>;
  estateTotal_not?: InputMaybe<Scalars['Int']>;
  estateTotal_gt?: InputMaybe<Scalars['Int']>;
  estateTotal_lt?: InputMaybe<Scalars['Int']>;
  estateTotal_gte?: InputMaybe<Scalars['Int']>;
  estateTotal_lte?: InputMaybe<Scalars['Int']>;
  estateTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  estateTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  wearableTotal?: InputMaybe<Scalars['Int']>;
  wearableTotal_not?: InputMaybe<Scalars['Int']>;
  wearableTotal_gt?: InputMaybe<Scalars['Int']>;
  wearableTotal_lt?: InputMaybe<Scalars['Int']>;
  wearableTotal_gte?: InputMaybe<Scalars['Int']>;
  wearableTotal_lte?: InputMaybe<Scalars['Int']>;
  wearableTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  wearableTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  ensTotal?: InputMaybe<Scalars['Int']>;
  ensTotal_not?: InputMaybe<Scalars['Int']>;
  ensTotal_gt?: InputMaybe<Scalars['Int']>;
  ensTotal_lt?: InputMaybe<Scalars['Int']>;
  ensTotal_gte?: InputMaybe<Scalars['Int']>;
  ensTotal_lte?: InputMaybe<Scalars['Int']>;
  ensTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  ensTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  started?: InputMaybe<Scalars['Int']>;
  started_not?: InputMaybe<Scalars['Int']>;
  started_gt?: InputMaybe<Scalars['Int']>;
  started_lt?: InputMaybe<Scalars['Int']>;
  started_gte?: InputMaybe<Scalars['Int']>;
  started_lte?: InputMaybe<Scalars['Int']>;
  started_in?: InputMaybe<Array<Scalars['Int']>>;
  started_not_in?: InputMaybe<Array<Scalars['Int']>>;
  salesTotal?: InputMaybe<Scalars['Int']>;
  salesTotal_not?: InputMaybe<Scalars['Int']>;
  salesTotal_gt?: InputMaybe<Scalars['Int']>;
  salesTotal_lt?: InputMaybe<Scalars['Int']>;
  salesTotal_gte?: InputMaybe<Scalars['Int']>;
  salesTotal_lte?: InputMaybe<Scalars['Int']>;
  salesTotal_in?: InputMaybe<Array<Scalars['Int']>>;
  salesTotal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  salesManaTotal?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_not?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_gt?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_lt?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_gte?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_lte?: InputMaybe<Scalars['BigInt']>;
  salesManaTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  salesManaTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creatorEarningsManaTotal?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_not?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_gt?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_lt?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_gte?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_lte?: InputMaybe<Scalars['BigInt']>;
  creatorEarningsManaTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creatorEarningsManaTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoEarningsManaTotal?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_not?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_gt?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_lt?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_gte?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_lte?: InputMaybe<Scalars['BigInt']>;
  daoEarningsManaTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  daoEarningsManaTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Count_orderBy =
  | 'id'
  | 'orderTotal'
  | 'orderParcel'
  | 'orderEstate'
  | 'orderWearable'
  | 'orderENS'
  | 'parcelTotal'
  | 'estateTotal'
  | 'wearableTotal'
  | 'ensTotal'
  | 'started'
  | 'salesTotal'
  | 'salesManaTotal'
  | 'creatorEarningsManaTotal'
  | 'daoEarningsManaTotal';

export type Data = {
  id: Scalars['ID'];
  parcel?: Maybe<Parcel>;
  estate?: Maybe<Estate>;
  version: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ipns?: Maybe<Scalars['String']>;
};

export type Data_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  parcel?: InputMaybe<Scalars['String']>;
  parcel_not?: InputMaybe<Scalars['String']>;
  parcel_gt?: InputMaybe<Scalars['String']>;
  parcel_lt?: InputMaybe<Scalars['String']>;
  parcel_gte?: InputMaybe<Scalars['String']>;
  parcel_lte?: InputMaybe<Scalars['String']>;
  parcel_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_contains?: InputMaybe<Scalars['String']>;
  parcel_contains_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_contains?: InputMaybe<Scalars['String']>;
  parcel_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parcel_starts_with?: InputMaybe<Scalars['String']>;
  parcel_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_ends_with?: InputMaybe<Scalars['String']>;
  parcel_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_contains_nocase?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipns?: InputMaybe<Scalars['String']>;
  ipns_not?: InputMaybe<Scalars['String']>;
  ipns_gt?: InputMaybe<Scalars['String']>;
  ipns_lt?: InputMaybe<Scalars['String']>;
  ipns_gte?: InputMaybe<Scalars['String']>;
  ipns_lte?: InputMaybe<Scalars['String']>;
  ipns_in?: InputMaybe<Array<Scalars['String']>>;
  ipns_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipns_contains?: InputMaybe<Scalars['String']>;
  ipns_contains_nocase?: InputMaybe<Scalars['String']>;
  ipns_not_contains?: InputMaybe<Scalars['String']>;
  ipns_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipns_starts_with?: InputMaybe<Scalars['String']>;
  ipns_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipns_not_starts_with?: InputMaybe<Scalars['String']>;
  ipns_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipns_ends_with?: InputMaybe<Scalars['String']>;
  ipns_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipns_not_ends_with?: InputMaybe<Scalars['String']>;
  ipns_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type Data_orderBy =
  | 'id'
  | 'parcel'
  | 'estate'
  | 'version'
  | 'name'
  | 'description'
  | 'ipns';

export type ENS = {
  id: Scalars['ID'];
  tokenId: Scalars['BigInt'];
  owner: Account;
  caller?: Maybe<Scalars['Bytes']>;
  beneficiary?: Maybe<Scalars['Bytes']>;
  labelHash?: Maybe<Scalars['Bytes']>;
  subdomain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['BigInt']>;
  nft?: Maybe<NFT>;
};

export type ENS_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  labelHash?: InputMaybe<Scalars['Bytes']>;
  labelHash_not?: InputMaybe<Scalars['Bytes']>;
  labelHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelHash_contains?: InputMaybe<Scalars['Bytes']>;
  labelHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  subdomain?: InputMaybe<Scalars['String']>;
  subdomain_not?: InputMaybe<Scalars['String']>;
  subdomain_gt?: InputMaybe<Scalars['String']>;
  subdomain_lt?: InputMaybe<Scalars['String']>;
  subdomain_gte?: InputMaybe<Scalars['String']>;
  subdomain_lte?: InputMaybe<Scalars['String']>;
  subdomain_in?: InputMaybe<Array<Scalars['String']>>;
  subdomain_not_in?: InputMaybe<Array<Scalars['String']>>;
  subdomain_contains?: InputMaybe<Scalars['String']>;
  subdomain_contains_nocase?: InputMaybe<Scalars['String']>;
  subdomain_not_contains?: InputMaybe<Scalars['String']>;
  subdomain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subdomain_starts_with?: InputMaybe<Scalars['String']>;
  subdomain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subdomain_not_starts_with?: InputMaybe<Scalars['String']>;
  subdomain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subdomain_ends_with?: InputMaybe<Scalars['String']>;
  subdomain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subdomain_not_ends_with?: InputMaybe<Scalars['String']>;
  subdomain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type ENS_orderBy =
  | 'id'
  | 'tokenId'
  | 'owner'
  | 'caller'
  | 'beneficiary'
  | 'labelHash'
  | 'subdomain'
  | 'createdAt'
  | 'nft';

export type Estate = {
  id: Scalars['ID'];
  tokenId: Scalars['BigInt'];
  owner: Account;
  parcels?: Maybe<Array<Parcel>>;
  size?: Maybe<Scalars['Int']>;
  data?: Maybe<Data>;
  rawData?: Maybe<Scalars['String']>;
  nft?: Maybe<NFT>;
};


export type EstateparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
};

export type Estate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parcels?: InputMaybe<Array<Scalars['String']>>;
  parcels_not?: InputMaybe<Array<Scalars['String']>>;
  parcels_contains?: InputMaybe<Array<Scalars['String']>>;
  parcels_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  parcels_not_contains?: InputMaybe<Array<Scalars['String']>>;
  parcels_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  size?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<Scalars['Int']>>;
  size_not_in?: InputMaybe<Array<Scalars['Int']>>;
  data?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_contains_nocase?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rawData?: InputMaybe<Scalars['String']>;
  rawData_not?: InputMaybe<Scalars['String']>;
  rawData_gt?: InputMaybe<Scalars['String']>;
  rawData_lt?: InputMaybe<Scalars['String']>;
  rawData_gte?: InputMaybe<Scalars['String']>;
  rawData_lte?: InputMaybe<Scalars['String']>;
  rawData_in?: InputMaybe<Array<Scalars['String']>>;
  rawData_not_in?: InputMaybe<Array<Scalars['String']>>;
  rawData_contains?: InputMaybe<Scalars['String']>;
  rawData_contains_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_contains?: InputMaybe<Scalars['String']>;
  rawData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rawData_starts_with?: InputMaybe<Scalars['String']>;
  rawData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_starts_with?: InputMaybe<Scalars['String']>;
  rawData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_ends_with?: InputMaybe<Scalars['String']>;
  rawData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_ends_with?: InputMaybe<Scalars['String']>;
  rawData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type Estate_orderBy =
  | 'id'
  | 'tokenId'
  | 'owner'
  | 'parcels'
  | 'size'
  | 'data'
  | 'rawData'
  | 'nft';

export type NFT = {
  id: Scalars['ID'];
  tokenId: Scalars['BigInt'];
  contractAddress: Scalars['Bytes'];
  category: Category;
  owner: Account;
  tokenURI?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Order>>;
  bids?: Maybe<Array<Bid>>;
  activeOrder?: Maybe<Order>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  parcel?: Maybe<Parcel>;
  estate?: Maybe<Estate>;
  wearable?: Maybe<Wearable>;
  ens?: Maybe<ENS>;
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  soldAt?: Maybe<Scalars['BigInt']>;
  sales: Scalars['Int'];
  volume: Scalars['BigInt'];
  searchOrderStatus?: Maybe<OrderStatus>;
  searchOrderPrice?: Maybe<Scalars['BigInt']>;
  searchOrderExpiresAt?: Maybe<Scalars['BigInt']>;
  searchOrderCreatedAt?: Maybe<Scalars['BigInt']>;
  searchIsLand?: Maybe<Scalars['Boolean']>;
  searchText?: Maybe<Scalars['String']>;
  searchParcelIsInBounds?: Maybe<Scalars['Boolean']>;
  searchParcelX?: Maybe<Scalars['BigInt']>;
  searchParcelY?: Maybe<Scalars['BigInt']>;
  searchParcelEstateId?: Maybe<Scalars['String']>;
  searchEstateSize?: Maybe<Scalars['Int']>;
  searchIsWearableHead?: Maybe<Scalars['Boolean']>;
  searchIsWearableAccessory?: Maybe<Scalars['Boolean']>;
  searchWearableRarity?: Maybe<Scalars['String']>;
  searchWearableCategory?: Maybe<WearableCategory>;
  searchWearableBodyShapes?: Maybe<Array<WearableBodyShape>>;
};


export type NFTordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
};


export type NFTbidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
};

export type NFT_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractAddress?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not?: InputMaybe<Scalars['Bytes']>;
  contractAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  category?: InputMaybe<Category>;
  category_not?: InputMaybe<Category>;
  category_in?: InputMaybe<Array<Category>>;
  category_not_in?: InputMaybe<Array<Category>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeOrder?: InputMaybe<Scalars['String']>;
  activeOrder_not?: InputMaybe<Scalars['String']>;
  activeOrder_gt?: InputMaybe<Scalars['String']>;
  activeOrder_lt?: InputMaybe<Scalars['String']>;
  activeOrder_gte?: InputMaybe<Scalars['String']>;
  activeOrder_lte?: InputMaybe<Scalars['String']>;
  activeOrder_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_not_in?: InputMaybe<Array<Scalars['String']>>;
  activeOrder_contains?: InputMaybe<Scalars['String']>;
  activeOrder_contains_nocase?: InputMaybe<Scalars['String']>;
  activeOrder_not_contains?: InputMaybe<Scalars['String']>;
  activeOrder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  activeOrder_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeOrder_not_starts_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  activeOrder_ends_with?: InputMaybe<Scalars['String']>;
  activeOrder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  activeOrder_not_ends_with?: InputMaybe<Scalars['String']>;
  activeOrder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parcel?: InputMaybe<Scalars['String']>;
  parcel_not?: InputMaybe<Scalars['String']>;
  parcel_gt?: InputMaybe<Scalars['String']>;
  parcel_lt?: InputMaybe<Scalars['String']>;
  parcel_gte?: InputMaybe<Scalars['String']>;
  parcel_lte?: InputMaybe<Scalars['String']>;
  parcel_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']>>;
  parcel_contains?: InputMaybe<Scalars['String']>;
  parcel_contains_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_contains?: InputMaybe<Scalars['String']>;
  parcel_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parcel_starts_with?: InputMaybe<Scalars['String']>;
  parcel_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']>;
  parcel_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_ends_with?: InputMaybe<Scalars['String']>;
  parcel_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']>;
  parcel_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  wearable?: InputMaybe<Scalars['String']>;
  wearable_not?: InputMaybe<Scalars['String']>;
  wearable_gt?: InputMaybe<Scalars['String']>;
  wearable_lt?: InputMaybe<Scalars['String']>;
  wearable_gte?: InputMaybe<Scalars['String']>;
  wearable_lte?: InputMaybe<Scalars['String']>;
  wearable_in?: InputMaybe<Array<Scalars['String']>>;
  wearable_not_in?: InputMaybe<Array<Scalars['String']>>;
  wearable_contains?: InputMaybe<Scalars['String']>;
  wearable_contains_nocase?: InputMaybe<Scalars['String']>;
  wearable_not_contains?: InputMaybe<Scalars['String']>;
  wearable_not_contains_nocase?: InputMaybe<Scalars['String']>;
  wearable_starts_with?: InputMaybe<Scalars['String']>;
  wearable_starts_with_nocase?: InputMaybe<Scalars['String']>;
  wearable_not_starts_with?: InputMaybe<Scalars['String']>;
  wearable_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  wearable_ends_with?: InputMaybe<Scalars['String']>;
  wearable_ends_with_nocase?: InputMaybe<Scalars['String']>;
  wearable_not_ends_with?: InputMaybe<Scalars['String']>;
  wearable_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ens?: InputMaybe<Scalars['String']>;
  ens_not?: InputMaybe<Scalars['String']>;
  ens_gt?: InputMaybe<Scalars['String']>;
  ens_lt?: InputMaybe<Scalars['String']>;
  ens_gte?: InputMaybe<Scalars['String']>;
  ens_lte?: InputMaybe<Scalars['String']>;
  ens_in?: InputMaybe<Array<Scalars['String']>>;
  ens_not_in?: InputMaybe<Array<Scalars['String']>>;
  ens_contains?: InputMaybe<Scalars['String']>;
  ens_contains_nocase?: InputMaybe<Scalars['String']>;
  ens_not_contains?: InputMaybe<Scalars['String']>;
  ens_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ens_starts_with?: InputMaybe<Scalars['String']>;
  ens_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ens_not_starts_with?: InputMaybe<Scalars['String']>;
  ens_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ens_ends_with?: InputMaybe<Scalars['String']>;
  ens_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ens_not_ends_with?: InputMaybe<Scalars['String']>;
  ens_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soldAt?: InputMaybe<Scalars['BigInt']>;
  soldAt_not?: InputMaybe<Scalars['BigInt']>;
  soldAt_gt?: InputMaybe<Scalars['BigInt']>;
  soldAt_lt?: InputMaybe<Scalars['BigInt']>;
  soldAt_gte?: InputMaybe<Scalars['BigInt']>;
  soldAt_lte?: InputMaybe<Scalars['BigInt']>;
  soldAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soldAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sales?: InputMaybe<Scalars['Int']>;
  sales_not?: InputMaybe<Scalars['Int']>;
  sales_gt?: InputMaybe<Scalars['Int']>;
  sales_lt?: InputMaybe<Scalars['Int']>;
  sales_gte?: InputMaybe<Scalars['Int']>;
  sales_lte?: InputMaybe<Scalars['Int']>;
  sales_in?: InputMaybe<Array<Scalars['Int']>>;
  sales_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderStatus?: InputMaybe<OrderStatus>;
  searchOrderStatus_not?: InputMaybe<OrderStatus>;
  searchOrderStatus_in?: InputMaybe<Array<OrderStatus>>;
  searchOrderStatus_not_in?: InputMaybe<Array<OrderStatus>>;
  searchOrderPrice?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_not?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_gt?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_lt?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_gte?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_lte?: InputMaybe<Scalars['BigInt']>;
  searchOrderPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderExpiresAt?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_not?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_gt?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_lt?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_gte?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_lte?: InputMaybe<Scalars['BigInt']>;
  searchOrderExpiresAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderExpiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderCreatedAt?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_not?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  searchOrderCreatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchOrderCreatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchIsLand?: InputMaybe<Scalars['Boolean']>;
  searchIsLand_not?: InputMaybe<Scalars['Boolean']>;
  searchIsLand_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchIsLand_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchText?: InputMaybe<Scalars['String']>;
  searchText_not?: InputMaybe<Scalars['String']>;
  searchText_gt?: InputMaybe<Scalars['String']>;
  searchText_lt?: InputMaybe<Scalars['String']>;
  searchText_gte?: InputMaybe<Scalars['String']>;
  searchText_lte?: InputMaybe<Scalars['String']>;
  searchText_in?: InputMaybe<Array<Scalars['String']>>;
  searchText_not_in?: InputMaybe<Array<Scalars['String']>>;
  searchText_contains?: InputMaybe<Scalars['String']>;
  searchText_contains_nocase?: InputMaybe<Scalars['String']>;
  searchText_not_contains?: InputMaybe<Scalars['String']>;
  searchText_not_contains_nocase?: InputMaybe<Scalars['String']>;
  searchText_starts_with?: InputMaybe<Scalars['String']>;
  searchText_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchText_not_starts_with?: InputMaybe<Scalars['String']>;
  searchText_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchText_ends_with?: InputMaybe<Scalars['String']>;
  searchText_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchText_not_ends_with?: InputMaybe<Scalars['String']>;
  searchText_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchParcelIsInBounds?: InputMaybe<Scalars['Boolean']>;
  searchParcelIsInBounds_not?: InputMaybe<Scalars['Boolean']>;
  searchParcelIsInBounds_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchParcelIsInBounds_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchParcelX?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_not?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_gt?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_lt?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_gte?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_lte?: InputMaybe<Scalars['BigInt']>;
  searchParcelX_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchParcelX_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchParcelY?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_not?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_gt?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_lt?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_gte?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_lte?: InputMaybe<Scalars['BigInt']>;
  searchParcelY_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchParcelY_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchParcelEstateId?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_gt?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_lt?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_gte?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_lte?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_in?: InputMaybe<Array<Scalars['String']>>;
  searchParcelEstateId_not_in?: InputMaybe<Array<Scalars['String']>>;
  searchParcelEstateId_contains?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_contains_nocase?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_contains?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_starts_with?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_starts_with?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_ends_with?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_ends_with?: InputMaybe<Scalars['String']>;
  searchParcelEstateId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchEstateSize?: InputMaybe<Scalars['Int']>;
  searchEstateSize_not?: InputMaybe<Scalars['Int']>;
  searchEstateSize_gt?: InputMaybe<Scalars['Int']>;
  searchEstateSize_lt?: InputMaybe<Scalars['Int']>;
  searchEstateSize_gte?: InputMaybe<Scalars['Int']>;
  searchEstateSize_lte?: InputMaybe<Scalars['Int']>;
  searchEstateSize_in?: InputMaybe<Array<Scalars['Int']>>;
  searchEstateSize_not_in?: InputMaybe<Array<Scalars['Int']>>;
  searchIsWearableHead?: InputMaybe<Scalars['Boolean']>;
  searchIsWearableHead_not?: InputMaybe<Scalars['Boolean']>;
  searchIsWearableHead_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchIsWearableHead_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchIsWearableAccessory?: InputMaybe<Scalars['Boolean']>;
  searchIsWearableAccessory_not?: InputMaybe<Scalars['Boolean']>;
  searchIsWearableAccessory_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchIsWearableAccessory_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  searchWearableRarity?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not?: InputMaybe<Scalars['String']>;
  searchWearableRarity_gt?: InputMaybe<Scalars['String']>;
  searchWearableRarity_lt?: InputMaybe<Scalars['String']>;
  searchWearableRarity_gte?: InputMaybe<Scalars['String']>;
  searchWearableRarity_lte?: InputMaybe<Scalars['String']>;
  searchWearableRarity_in?: InputMaybe<Array<Scalars['String']>>;
  searchWearableRarity_not_in?: InputMaybe<Array<Scalars['String']>>;
  searchWearableRarity_contains?: InputMaybe<Scalars['String']>;
  searchWearableRarity_contains_nocase?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_contains?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_contains_nocase?: InputMaybe<Scalars['String']>;
  searchWearableRarity_starts_with?: InputMaybe<Scalars['String']>;
  searchWearableRarity_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_starts_with?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  searchWearableRarity_ends_with?: InputMaybe<Scalars['String']>;
  searchWearableRarity_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_ends_with?: InputMaybe<Scalars['String']>;
  searchWearableRarity_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  searchWearableCategory?: InputMaybe<WearableCategory>;
  searchWearableCategory_not?: InputMaybe<WearableCategory>;
  searchWearableCategory_in?: InputMaybe<Array<WearableCategory>>;
  searchWearableCategory_not_in?: InputMaybe<Array<WearableCategory>>;
  searchWearableBodyShapes?: InputMaybe<Array<WearableBodyShape>>;
  searchWearableBodyShapes_not?: InputMaybe<Array<WearableBodyShape>>;
  searchWearableBodyShapes_contains?: InputMaybe<Array<WearableBodyShape>>;
  searchWearableBodyShapes_contains_nocase?: InputMaybe<Array<WearableBodyShape>>;
  searchWearableBodyShapes_not_contains?: InputMaybe<Array<WearableBodyShape>>;
  searchWearableBodyShapes_not_contains_nocase?: InputMaybe<Array<WearableBodyShape>>;
};

export type NFT_orderBy =
  | 'id'
  | 'tokenId'
  | 'contractAddress'
  | 'category'
  | 'owner'
  | 'tokenURI'
  | 'orders'
  | 'bids'
  | 'activeOrder'
  | 'name'
  | 'image'
  | 'parcel'
  | 'estate'
  | 'wearable'
  | 'ens'
  | 'createdAt'
  | 'updatedAt'
  | 'soldAt'
  | 'sales'
  | 'volume'
  | 'searchOrderStatus'
  | 'searchOrderPrice'
  | 'searchOrderExpiresAt'
  | 'searchOrderCreatedAt'
  | 'searchIsLand'
  | 'searchText'
  | 'searchParcelIsInBounds'
  | 'searchParcelX'
  | 'searchParcelY'
  | 'searchParcelEstateId'
  | 'searchEstateSize'
  | 'searchIsWearableHead'
  | 'searchIsWearableAccessory'
  | 'searchWearableRarity'
  | 'searchWearableCategory'
  | 'searchWearableBodyShapes';

export type Order = {
  id: Scalars['ID'];
  marketplaceAddress: Scalars['Bytes'];
  category: Category;
  nft?: Maybe<NFT>;
  nftAddress: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  txHash: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  buyer?: Maybe<Scalars['Bytes']>;
  price: Scalars['BigInt'];
  status: OrderStatus;
  blockNumber: Scalars['BigInt'];
  expiresAt: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type OrderStatus =
  | 'open'
  | 'sold'
  | 'cancelled';

export type Order_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketplaceAddress?: InputMaybe<Scalars['Bytes']>;
  marketplaceAddress_not?: InputMaybe<Scalars['Bytes']>;
  marketplaceAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  marketplaceAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  marketplaceAddress_contains?: InputMaybe<Scalars['Bytes']>;
  marketplaceAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  category?: InputMaybe<Category>;
  category_not?: InputMaybe<Category>;
  category_in?: InputMaybe<Array<Category>>;
  category_not_in?: InputMaybe<Array<Category>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nftAddress?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not?: InputMaybe<Scalars['Bytes']>;
  nftAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftAddress_contains?: InputMaybe<Scalars['Bytes']>;
  nftAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  buyer?: InputMaybe<Scalars['Bytes']>;
  buyer_not?: InputMaybe<Scalars['Bytes']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_contains?: InputMaybe<Scalars['Bytes']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<OrderStatus>;
  status_not?: InputMaybe<OrderStatus>;
  status_in?: InputMaybe<Array<OrderStatus>>;
  status_not_in?: InputMaybe<Array<OrderStatus>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_not?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lt?: InputMaybe<Scalars['BigInt']>;
  expiresAt_gte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_lte?: InputMaybe<Scalars['BigInt']>;
  expiresAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiresAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Order_orderBy =
  | 'id'
  | 'marketplaceAddress'
  | 'category'
  | 'nft'
  | 'nftAddress'
  | 'tokenId'
  | 'txHash'
  | 'owner'
  | 'buyer'
  | 'price'
  | 'status'
  | 'blockNumber'
  | 'expiresAt'
  | 'createdAt'
  | 'updatedAt';

export type Parcel = {
  id: Scalars['ID'];
  tokenId: Scalars['BigInt'];
  owner: Account;
  x: Scalars['BigInt'];
  y: Scalars['BigInt'];
  estate?: Maybe<Estate>;
  data?: Maybe<Data>;
  rawData?: Maybe<Scalars['String']>;
  nft?: Maybe<NFT>;
};

export type Parcel_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['BigInt']>;
  x_not?: InputMaybe<Scalars['BigInt']>;
  x_gt?: InputMaybe<Scalars['BigInt']>;
  x_lt?: InputMaybe<Scalars['BigInt']>;
  x_gte?: InputMaybe<Scalars['BigInt']>;
  x_lte?: InputMaybe<Scalars['BigInt']>;
  x_in?: InputMaybe<Array<Scalars['BigInt']>>;
  x_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  y?: InputMaybe<Scalars['BigInt']>;
  y_not?: InputMaybe<Scalars['BigInt']>;
  y_gt?: InputMaybe<Scalars['BigInt']>;
  y_lt?: InputMaybe<Scalars['BigInt']>;
  y_gte?: InputMaybe<Scalars['BigInt']>;
  y_lte?: InputMaybe<Scalars['BigInt']>;
  y_in?: InputMaybe<Array<Scalars['BigInt']>>;
  y_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  estate?: InputMaybe<Scalars['String']>;
  estate_not?: InputMaybe<Scalars['String']>;
  estate_gt?: InputMaybe<Scalars['String']>;
  estate_lt?: InputMaybe<Scalars['String']>;
  estate_gte?: InputMaybe<Scalars['String']>;
  estate_lte?: InputMaybe<Scalars['String']>;
  estate_in?: InputMaybe<Array<Scalars['String']>>;
  estate_not_in?: InputMaybe<Array<Scalars['String']>>;
  estate_contains?: InputMaybe<Scalars['String']>;
  estate_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_not_contains?: InputMaybe<Scalars['String']>;
  estate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  estate_starts_with?: InputMaybe<Scalars['String']>;
  estate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_starts_with?: InputMaybe<Scalars['String']>;
  estate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  estate_ends_with?: InputMaybe<Scalars['String']>;
  estate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  estate_not_ends_with?: InputMaybe<Scalars['String']>;
  estate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_contains_nocase?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rawData?: InputMaybe<Scalars['String']>;
  rawData_not?: InputMaybe<Scalars['String']>;
  rawData_gt?: InputMaybe<Scalars['String']>;
  rawData_lt?: InputMaybe<Scalars['String']>;
  rawData_gte?: InputMaybe<Scalars['String']>;
  rawData_lte?: InputMaybe<Scalars['String']>;
  rawData_in?: InputMaybe<Array<Scalars['String']>>;
  rawData_not_in?: InputMaybe<Array<Scalars['String']>>;
  rawData_contains?: InputMaybe<Scalars['String']>;
  rawData_contains_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_contains?: InputMaybe<Scalars['String']>;
  rawData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rawData_starts_with?: InputMaybe<Scalars['String']>;
  rawData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_starts_with?: InputMaybe<Scalars['String']>;
  rawData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_ends_with?: InputMaybe<Scalars['String']>;
  rawData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rawData_not_ends_with?: InputMaybe<Scalars['String']>;
  rawData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type Parcel_orderBy =
  | 'id'
  | 'tokenId'
  | 'owner'
  | 'x'
  | 'y'
  | 'estate'
  | 'data'
  | 'rawData'
  | 'nft';

export type Query = {
  count?: Maybe<Count>;
  counts: Array<Count>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  parcel?: Maybe<Parcel>;
  parcels: Array<Parcel>;
  estate?: Maybe<Estate>;
  estates: Array<Estate>;
  data?: Maybe<Data>;
  datas: Array<Data>;
  wearable?: Maybe<Wearable>;
  wearables: Array<Wearable>;
  ens?: Maybe<ENS>;
  enss: Array<ENS>;
  nft?: Maybe<NFT>;
  nfts: Array<NFT>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  analyticsDayData?: Maybe<AnalyticsDayData>;
  analyticsDayDatas: Array<AnalyticsDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerycountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Count_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Count_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryorderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybidArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryestateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryestatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Estate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Estate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Data_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Data_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywearableArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywearablesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wearable_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Wearable_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryensArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryenssArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ENS_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFT_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysaleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysalesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sale_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryanalyticsDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryanalyticsDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnalyticsDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AnalyticsDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Sale = {
  id: Scalars['ID'];
  type: SaleType;
  buyer: Scalars['Bytes'];
  seller: Scalars['Bytes'];
  price: Scalars['BigInt'];
  nft: NFT;
  timestamp: Scalars['BigInt'];
  txHash: Scalars['Bytes'];
  searchTokenId: Scalars['BigInt'];
  searchContractAddress: Scalars['Bytes'];
};

export type SaleType =
  | 'bid'
  | 'order';

export type Sale_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<SaleType>;
  type_not?: InputMaybe<SaleType>;
  type_in?: InputMaybe<Array<SaleType>>;
  type_not_in?: InputMaybe<Array<SaleType>>;
  buyer?: InputMaybe<Scalars['Bytes']>;
  buyer_not?: InputMaybe<Scalars['Bytes']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_contains?: InputMaybe<Scalars['Bytes']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']>;
  seller?: InputMaybe<Scalars['Bytes']>;
  seller_not?: InputMaybe<Scalars['Bytes']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  seller_contains?: InputMaybe<Scalars['Bytes']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  searchTokenId?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_not?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_gt?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_lt?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_gte?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_lte?: InputMaybe<Scalars['BigInt']>;
  searchTokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  searchContractAddress?: InputMaybe<Scalars['Bytes']>;
  searchContractAddress_not?: InputMaybe<Scalars['Bytes']>;
  searchContractAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  searchContractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  searchContractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  searchContractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
};

export type Sale_orderBy =
  | 'id'
  | 'type'
  | 'buyer'
  | 'seller'
  | 'price'
  | 'nft'
  | 'timestamp'
  | 'txHash'
  | 'searchTokenId'
  | 'searchContractAddress';

export type Subscription = {
  count?: Maybe<Count>;
  counts: Array<Count>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  parcel?: Maybe<Parcel>;
  parcels: Array<Parcel>;
  estate?: Maybe<Estate>;
  estates: Array<Estate>;
  data?: Maybe<Data>;
  datas: Array<Data>;
  wearable?: Maybe<Wearable>;
  wearables: Array<Wearable>;
  ens?: Maybe<ENS>;
  enss: Array<ENS>;
  nft?: Maybe<NFT>;
  nfts: Array<NFT>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  analyticsDayData?: Maybe<AnalyticsDayData>;
  analyticsDayDatas: Array<AnalyticsDayData>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptioncountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Count_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Count_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionorderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbidArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbidsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparcelsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Parcel_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Parcel_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionestateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionestatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Estate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Estate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Data_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Data_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwearableArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwearablesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wearable_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Wearable_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionensArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionenssArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENS_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ENS_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnftsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NFT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NFT_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsaleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsalesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sale_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionanalyticsDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionanalyticsDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AnalyticsDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AnalyticsDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Wearable = {
  id: Scalars['ID'];
  owner: Account;
  representationId: Scalars['String'];
  collection: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  category: WearableCategory;
  rarity: WearableRarity;
  bodyShapes?: Maybe<Array<WearableBodyShape>>;
  nft?: Maybe<NFT>;
};

export type WearableBodyShape =
  | 'BaseFemale'
  | 'BaseMale';

export type WearableCategory =
  | 'eyebrows'
  | 'eyes'
  | 'facial_hair'
  | 'hair'
  | 'mouth'
  | 'upper_body'
  | 'lower_body'
  | 'feet'
  | 'earring'
  | 'eyewear'
  | 'hat'
  | 'helmet'
  | 'mask'
  | 'tiara'
  | 'top_head'
  | 'skin';

export type WearableRarity =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'mythic'
  | 'unique';

export type Wearable_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  representationId?: InputMaybe<Scalars['String']>;
  representationId_not?: InputMaybe<Scalars['String']>;
  representationId_gt?: InputMaybe<Scalars['String']>;
  representationId_lt?: InputMaybe<Scalars['String']>;
  representationId_gte?: InputMaybe<Scalars['String']>;
  representationId_lte?: InputMaybe<Scalars['String']>;
  representationId_in?: InputMaybe<Array<Scalars['String']>>;
  representationId_not_in?: InputMaybe<Array<Scalars['String']>>;
  representationId_contains?: InputMaybe<Scalars['String']>;
  representationId_contains_nocase?: InputMaybe<Scalars['String']>;
  representationId_not_contains?: InputMaybe<Scalars['String']>;
  representationId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  representationId_starts_with?: InputMaybe<Scalars['String']>;
  representationId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  representationId_not_starts_with?: InputMaybe<Scalars['String']>;
  representationId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  representationId_ends_with?: InputMaybe<Scalars['String']>;
  representationId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  representationId_not_ends_with?: InputMaybe<Scalars['String']>;
  representationId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection?: InputMaybe<Scalars['String']>;
  collection_not?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collection_starts_with?: InputMaybe<Scalars['String']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collection_ends_with?: InputMaybe<Scalars['String']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<WearableCategory>;
  category_not?: InputMaybe<WearableCategory>;
  category_in?: InputMaybe<Array<WearableCategory>>;
  category_not_in?: InputMaybe<Array<WearableCategory>>;
  rarity?: InputMaybe<WearableRarity>;
  rarity_not?: InputMaybe<WearableRarity>;
  rarity_in?: InputMaybe<Array<WearableRarity>>;
  rarity_not_in?: InputMaybe<Array<WearableRarity>>;
  bodyShapes?: InputMaybe<Array<WearableBodyShape>>;
  bodyShapes_not?: InputMaybe<Array<WearableBodyShape>>;
  bodyShapes_contains?: InputMaybe<Array<WearableBodyShape>>;
  bodyShapes_contains_nocase?: InputMaybe<Array<WearableBodyShape>>;
  bodyShapes_not_contains?: InputMaybe<Array<WearableBodyShape>>;
  bodyShapes_not_contains_nocase?: InputMaybe<Array<WearableBodyShape>>;
};

export type Wearable_orderBy =
  | 'id'
  | 'owner'
  | 'representationId'
  | 'collection'
  | 'name'
  | 'description'
  | 'category'
  | 'rarity'
  | 'bodyShapes'
  | 'nft';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

    }
    export type QueryDclMarketplaceSdk = {
  /** null **/
  count: InContextSdkMethod<DclMarketplaceTypes.Query['count'], DclMarketplaceTypes.QuerycountArgs, MeshContext>,
  /** null **/
  counts: InContextSdkMethod<DclMarketplaceTypes.Query['counts'], DclMarketplaceTypes.QuerycountsArgs, MeshContext>,
  /** null **/
  order: InContextSdkMethod<DclMarketplaceTypes.Query['order'], DclMarketplaceTypes.QueryorderArgs, MeshContext>,
  /** null **/
  orders: InContextSdkMethod<DclMarketplaceTypes.Query['orders'], DclMarketplaceTypes.QueryordersArgs, MeshContext>,
  /** null **/
  bid: InContextSdkMethod<DclMarketplaceTypes.Query['bid'], DclMarketplaceTypes.QuerybidArgs, MeshContext>,
  /** null **/
  bids: InContextSdkMethod<DclMarketplaceTypes.Query['bids'], DclMarketplaceTypes.QuerybidsArgs, MeshContext>,
  /** null **/
  parcel: InContextSdkMethod<DclMarketplaceTypes.Query['parcel'], DclMarketplaceTypes.QueryparcelArgs, MeshContext>,
  /** null **/
  parcels: InContextSdkMethod<DclMarketplaceTypes.Query['parcels'], DclMarketplaceTypes.QueryparcelsArgs, MeshContext>,
  /** null **/
  estate: InContextSdkMethod<DclMarketplaceTypes.Query['estate'], DclMarketplaceTypes.QueryestateArgs, MeshContext>,
  /** null **/
  estates: InContextSdkMethod<DclMarketplaceTypes.Query['estates'], DclMarketplaceTypes.QueryestatesArgs, MeshContext>,
  /** null **/
  data: InContextSdkMethod<DclMarketplaceTypes.Query['data'], DclMarketplaceTypes.QuerydataArgs, MeshContext>,
  /** null **/
  datas: InContextSdkMethod<DclMarketplaceTypes.Query['datas'], DclMarketplaceTypes.QuerydatasArgs, MeshContext>,
  /** null **/
  wearable: InContextSdkMethod<DclMarketplaceTypes.Query['wearable'], DclMarketplaceTypes.QuerywearableArgs, MeshContext>,
  /** null **/
  wearables: InContextSdkMethod<DclMarketplaceTypes.Query['wearables'], DclMarketplaceTypes.QuerywearablesArgs, MeshContext>,
  /** null **/
  ens: InContextSdkMethod<DclMarketplaceTypes.Query['ens'], DclMarketplaceTypes.QueryensArgs, MeshContext>,
  /** null **/
  enss: InContextSdkMethod<DclMarketplaceTypes.Query['enss'], DclMarketplaceTypes.QueryenssArgs, MeshContext>,
  /** null **/
  nft: InContextSdkMethod<DclMarketplaceTypes.Query['nft'], DclMarketplaceTypes.QuerynftArgs, MeshContext>,
  /** null **/
  nfts: InContextSdkMethod<DclMarketplaceTypes.Query['nfts'], DclMarketplaceTypes.QuerynftsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<DclMarketplaceTypes.Query['account'], DclMarketplaceTypes.QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<DclMarketplaceTypes.Query['accounts'], DclMarketplaceTypes.QueryaccountsArgs, MeshContext>,
  /** null **/
  sale: InContextSdkMethod<DclMarketplaceTypes.Query['sale'], DclMarketplaceTypes.QuerysaleArgs, MeshContext>,
  /** null **/
  sales: InContextSdkMethod<DclMarketplaceTypes.Query['sales'], DclMarketplaceTypes.QuerysalesArgs, MeshContext>,
  /** null **/
  analyticsDayData: InContextSdkMethod<DclMarketplaceTypes.Query['analyticsDayData'], DclMarketplaceTypes.QueryanalyticsDayDataArgs, MeshContext>,
  /** null **/
  analyticsDayDatas: InContextSdkMethod<DclMarketplaceTypes.Query['analyticsDayDatas'], DclMarketplaceTypes.QueryanalyticsDayDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<DclMarketplaceTypes.Query['_meta'], DclMarketplaceTypes.Query_metaArgs, MeshContext>
};

export type MutationDclMarketplaceSdk = {

};

export type SubscriptionDclMarketplaceSdk = {
  /** null **/
  count: InContextSdkMethod<DclMarketplaceTypes.Subscription['count'], DclMarketplaceTypes.SubscriptioncountArgs, MeshContext>,
  /** null **/
  counts: InContextSdkMethod<DclMarketplaceTypes.Subscription['counts'], DclMarketplaceTypes.SubscriptioncountsArgs, MeshContext>,
  /** null **/
  order: InContextSdkMethod<DclMarketplaceTypes.Subscription['order'], DclMarketplaceTypes.SubscriptionorderArgs, MeshContext>,
  /** null **/
  orders: InContextSdkMethod<DclMarketplaceTypes.Subscription['orders'], DclMarketplaceTypes.SubscriptionordersArgs, MeshContext>,
  /** null **/
  bid: InContextSdkMethod<DclMarketplaceTypes.Subscription['bid'], DclMarketplaceTypes.SubscriptionbidArgs, MeshContext>,
  /** null **/
  bids: InContextSdkMethod<DclMarketplaceTypes.Subscription['bids'], DclMarketplaceTypes.SubscriptionbidsArgs, MeshContext>,
  /** null **/
  parcel: InContextSdkMethod<DclMarketplaceTypes.Subscription['parcel'], DclMarketplaceTypes.SubscriptionparcelArgs, MeshContext>,
  /** null **/
  parcels: InContextSdkMethod<DclMarketplaceTypes.Subscription['parcels'], DclMarketplaceTypes.SubscriptionparcelsArgs, MeshContext>,
  /** null **/
  estate: InContextSdkMethod<DclMarketplaceTypes.Subscription['estate'], DclMarketplaceTypes.SubscriptionestateArgs, MeshContext>,
  /** null **/
  estates: InContextSdkMethod<DclMarketplaceTypes.Subscription['estates'], DclMarketplaceTypes.SubscriptionestatesArgs, MeshContext>,
  /** null **/
  data: InContextSdkMethod<DclMarketplaceTypes.Subscription['data'], DclMarketplaceTypes.SubscriptiondataArgs, MeshContext>,
  /** null **/
  datas: InContextSdkMethod<DclMarketplaceTypes.Subscription['datas'], DclMarketplaceTypes.SubscriptiondatasArgs, MeshContext>,
  /** null **/
  wearable: InContextSdkMethod<DclMarketplaceTypes.Subscription['wearable'], DclMarketplaceTypes.SubscriptionwearableArgs, MeshContext>,
  /** null **/
  wearables: InContextSdkMethod<DclMarketplaceTypes.Subscription['wearables'], DclMarketplaceTypes.SubscriptionwearablesArgs, MeshContext>,
  /** null **/
  ens: InContextSdkMethod<DclMarketplaceTypes.Subscription['ens'], DclMarketplaceTypes.SubscriptionensArgs, MeshContext>,
  /** null **/
  enss: InContextSdkMethod<DclMarketplaceTypes.Subscription['enss'], DclMarketplaceTypes.SubscriptionenssArgs, MeshContext>,
  /** null **/
  nft: InContextSdkMethod<DclMarketplaceTypes.Subscription['nft'], DclMarketplaceTypes.SubscriptionnftArgs, MeshContext>,
  /** null **/
  nfts: InContextSdkMethod<DclMarketplaceTypes.Subscription['nfts'], DclMarketplaceTypes.SubscriptionnftsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<DclMarketplaceTypes.Subscription['account'], DclMarketplaceTypes.SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<DclMarketplaceTypes.Subscription['accounts'], DclMarketplaceTypes.SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  sale: InContextSdkMethod<DclMarketplaceTypes.Subscription['sale'], DclMarketplaceTypes.SubscriptionsaleArgs, MeshContext>,
  /** null **/
  sales: InContextSdkMethod<DclMarketplaceTypes.Subscription['sales'], DclMarketplaceTypes.SubscriptionsalesArgs, MeshContext>,
  /** null **/
  analyticsDayData: InContextSdkMethod<DclMarketplaceTypes.Subscription['analyticsDayData'], DclMarketplaceTypes.SubscriptionanalyticsDayDataArgs, MeshContext>,
  /** null **/
  analyticsDayDatas: InContextSdkMethod<DclMarketplaceTypes.Subscription['analyticsDayDatas'], DclMarketplaceTypes.SubscriptionanalyticsDayDatasArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<DclMarketplaceTypes.Subscription['_meta'], DclMarketplaceTypes.Subscription_metaArgs, MeshContext>
};

export type DclMarketplaceContext = {
      ["dcl-marketplace"]: { Query: QueryDclMarketplaceSdk, Mutation: MutationDclMarketplaceSdk, Subscription: SubscriptionDclMarketplaceSdk },
      
    };

export type MeshContext = DclMarketplaceContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/dcl-marketplace/introspectionSchema":
      return import("./sources/dcl-marketplace/introspectionSchema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetchFactory } from 'fetchache';
import { fetch, Request, Response } from 'cross-undici-fetch';
import { DefaultLogger } from '@graphql-mesh/utils';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
    } as any)
const fetchFn = fetchFactory({ cache, fetch, Request, Response });
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const dclMarketplaceTransforms = [];
const additionalTypeDefs = [] as any[];
const dclMarketplaceHandler = new GraphqlHandler({
              name: "dcl-marketplace",
              config: {"endpoint":"https://gateway.thegraph.com/api/f11bf4f437492b53b23d31bc5e146a22/subgraphs/id/GnwyhKp8uQkktC3vgMxWpg9f9qea75WQ6GXTxjW6BbZq"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("dcl-marketplace"),
              logger: logger.child("dcl-marketplace"),
              importFn,
              fetchFn,
            });
sources[0] = {
          name: 'dcl-marketplace',
          handler: dclMarketplaceHandler,
          transforms: dclMarketplaceTransforms
        }
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const additionalResolvers = [] as any[]

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: ParcelOwnersDocument,
        get rawSDL() {
          return printWithCache(ParcelOwnersDocument);
        },
        location: 'ParcelOwnersDocument.graphql'
      }
    ];
    },
  };
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type ParcelOwnersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type ParcelOwnersQuery = { parcels: Array<(
    Pick<Parcel, 'id' | 'x' | 'y'>
    & { owner: Pick<Account, 'id'> }
  )> };


export const ParcelOwnersDocument = gql`
    query ParcelOwners($first: Int, $skip: Int) {
  parcels(first: $first, orderBy: id, skip: $skip) {
    id
    x
    y
    owner {
      id
    }
  }
}
    ` as unknown as DocumentNode<ParcelOwnersQuery, ParcelOwnersQueryVariables>;


export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    ParcelOwners(variables?: ParcelOwnersQueryVariables, options?: C): Promise<ParcelOwnersQuery> {
      return requester<ParcelOwnersQuery, ParcelOwnersQueryVariables>(ParcelOwnersDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;