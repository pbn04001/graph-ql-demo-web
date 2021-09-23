import React from 'react';
import { Query } from 'react-apollo'

import skillsQuery from '../graphql/queries/skills'
import jobsQuery from '../graphql/queries/jobs'
import {SkillsQuery, SkillsQueryVariables, JobsQuery, JobsQueryVariables, SkillType, State} from '../graphql/types/types'

const JobsView: React.FC = () => {

  return (
    <div className="App">
      <Query<SkillsQuery, SkillsQueryVariables>
        query={skillsQuery}
        variables={{ type: SkillType.Database }}
      >
        {({data}) => (
          <>
            <h1>Skills</h1>
            {data && data.skills && data.skills.map(skill => {
              return (
                <div className="skill" key={skill.name}>{skill.name} - {skill.type}</div>
              );
            })}
          </>
        )}
      </Query>
      <Query<JobsQuery, JobsQueryVariables>
        query={jobsQuery}
        variables={{ state: State.Co }}
      >
        {({data}) => (
          <>
            <h1>Jobs</h1>
            {data && data.jobs && data.jobs.map(job => (
              <div key={job.company} className="job">
                <div className="job__title">{job.title}</div>
                <div className="job_company">{job.company}</div>
              </div>
            ))}
          </>
        )}
      </Query>
    </div>
  );
}

export default JobsView;
