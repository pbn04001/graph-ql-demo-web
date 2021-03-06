const { exec } = require('child_process');

async function execute(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      } else {
        if (stderr) {
          reject(stderr)
        }
        if (stdout) {
          console.log(`stdout: ${stdout}`);
          resolve(true)
        }
      }
    });
  })
}

(async function() {
  try {
    await execute('apollo schema:download --endpoint=http://localhost:3000/graphql graphql-schema.json')
    await execute('apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --includes=src/**/*.ts --tagName=gql --addTypename --globalTypesFile=src/types/graphql-global-types.ts types')
  } catch (error) {
    console.log(error)
  }
})()

