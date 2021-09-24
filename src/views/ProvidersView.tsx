import React from 'react';
import providerQuery from '../graphql/queries/providers'
import { ProvidersQuery } from "../graphql/types/types";
import ProvidersPricingView from "./ProviderPricingView";
import { useQuery } from '@apollo/client';

const ProvidersView = () => {
  const { data: providers, loading } = useQuery<ProvidersQuery>(providerQuery)

  return (
    <>
      <h1>Provides</h1>
      {loading || !providers?.providers ?
        <div>Loading Providers...</div> :
        <ProvidersPricingView providers={providers.providers} />
      }
    </>
  )
}

export default ProvidersView
