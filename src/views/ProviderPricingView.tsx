import React, { useState, useEffect } from 'react';

import {
  ProviderListFragment,
  ProviderPricesQuery,
  ProviderPricesQueryVariables
} from "../graphql/types/types";
import providerPricesQuery from "../graphql/queries/providerPrices";
import { useQuery } from '@apollo/client';

const renderPrice = (count: number, price?: number) => {
  if (price) {
    return <div className="provider__price">${price}</div>
  }
  const dotsCount = count % 3 + 1
  const dots = Array(dotsCount).fill(dotsCount)
  return <div className="provider__price">{dots.map(() => '.').join('')}</div>;
}

type ProvidersPricingViewProps = {
  providers: ProviderListFragment,
}

const ProvidersPricingView: React.FC<ProvidersPricingViewProps> = ({
 providers,
}: ProvidersPricingViewProps) => {
  const [count, setCount ] = useState<number>(0)
  const [prices, updatePrices ] = useState<{ [key: number]: number }>({})
  const { data: newPrices, stopPolling } = useQuery<ProviderPricesQuery, ProviderPricesQueryVariables>(providerPricesQuery, {
    pollInterval: 1000,
    variables: { uuid: providers.uuid }
  })

  useEffect(() => {
    console.log(`Polled ${count} times`)
    if (count >= 20) {
      stopPolling()
      console.log('Done Polling')
    } else {
      setTimeout(() => { setCount(count + 1) }, 1000);
    }
  }, [count])

  useEffect(() => {
    if (newPrices?.providerPrices && newPrices.providerPrices.length > 0) {
      const updatedPrices: { [key: number]: number } = {
        ...prices,
      }
      for (const price of newPrices.providerPrices) {
        updatedPrices[price.id] = price.price
      }
      updatePrices(updatedPrices)
    }
  }, [newPrices])

  if (count === 0) {
    setTimeout(() => { setCount(1) })
  }

  return (
    <>
      {providers.providers.map(provider => (
        <div key={provider.id}>
          <div className="provider">{provider.name}</div>
          <div className="provider__location">{provider.location}</div>
          {renderPrice(count, prices[provider.id])}
          <br/>
        </div>
      ))}
    </>
  )
}

export default ProvidersPricingView
