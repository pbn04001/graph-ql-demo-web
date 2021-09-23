const exec = require('await-exec');
const path = require('path');

const GRAPHQL_SERVER = 'http://localhost:3000/graphql';

// Will need to have a graphql auth token, and set it in your local environment
// export GRAPHQL_TOKEN=your_token_here

async function buildGraphql() {
  // Retrieve the full schema from our graphql endpoint
  await exec(`apollo client:download-schema --endpoint=${GRAPHQL_SERVER} ./schema.graphql`); // eslint-disable-line
  // Dynamically generate Typescript objects based on our application queries
  await exec(`graphql-codegen --config codegen.yml`);
}

buildGraphql()
    .then(value => {
      if (value) {
        console.log('Successfully build graphql queries'); // eslint-disable-line
      }
    }).catch(e => {
  console.log(e); // eslint-disable-line
  process.exit(1);
});
