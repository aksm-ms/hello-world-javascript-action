const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  console.log(`get steps context: ${JSON.stringify(github.context)}`);
//   console.log(`prev step output: webapp-url: ${github.steps.context.webapps-deploy.outputs.webapp-url}`);
} catch (error) {
  core.setFailed(error.message);
}
