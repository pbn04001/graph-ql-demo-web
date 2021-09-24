import { gql } from '@apollo/client';

export default gql`
  fragment provider on Provider {
      id
      name
      location
  }
  
  fragment providerList on ProviderList {
      uuid
      providers {
          ...provider
      }
  }
  query Providers {
    providers {
      ...providerList
    }
  }
`
