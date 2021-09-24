import React from 'react';

import skillsQuery from '../graphql/queries/skills'
import jobsQuery from '../graphql/queries/jobs'
import {
  JobsQuery,
  JobsQueryVariables,
  SkillsQuery,
  SkillsQueryVariables, SkillType, State,
} from '../graphql/types/types'
import { useQuery } from '@apollo/react-hooks';

const JobsView = () => {
  const { data: skills } = useQuery<SkillsQuery, SkillsQueryVariables>(skillsQuery, {
    variables: { type: SkillType.Database }
  })

  const { data: jobs } = useQuery<JobsQuery, JobsQueryVariables>(jobsQuery, {
    variables: { state: State.Co }
  })

  return (
    <div className="App">
      {skills?.skills && (
        <>
          <h1>Skills</h1>
          {skills.skills.map(skill => {
            return (
            <div className="skill" key={skill.name}>{skill.name} - {skill.type}</div>
            );
          })}
        </>
      )}
      {jobs?.jobs && (
        <>
          <h1>Jobs</h1>
          {jobs.jobs.map(job => (
            <div key={job.company} className="job">
              <div className="job__title">{job.title}</div>
              <div className="job_company">{job.company}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default JobsView;
