import { execSync } from 'node:child_process';

export const onPostBuild = function(options) {
    console.log("netlify-plugin-post-script: Attempting to run 'post-build' script")
    console.log(JSON.stringify(options))
    execSync(`npm run post-build`);
}