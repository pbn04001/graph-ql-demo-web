/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProviderPrices
// ====================================================

export interface ProviderPrices_providerPrices {
  __typename: "ProviderPrice";
  id: number;
  price: number;
}

export interface ProviderPrices {
  providerPrices: ProviderPrices_providerPrices[];
}

export interface ProviderPricesVariables {
  uuid: string;
}
