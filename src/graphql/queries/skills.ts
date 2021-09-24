import { gql } from '@apollo/client';

export default gql`
  query Skills($type: SkillType) {
    skills(type: $type) {
      name
      type
    }
  }
`
