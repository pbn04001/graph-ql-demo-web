import { gql } from '@apollo/client';

export default gql`
  query ProviderPrices($uuid: String!) {
    providerPrices(uuid: $uuid) {
      id
      price
    }
  }
`
