import { gql } from '@apollo/client';

export default gql`
  query Jobs($state: State) {
    jobs(state: $state) {
        title
        company
        location {
          city
          state
        }
      }
} 
 `
