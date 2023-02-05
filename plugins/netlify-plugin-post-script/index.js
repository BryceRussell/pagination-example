import { execSync } from 'node:child_process';

export const onPostBuild = function() {
    console.log("netlify-plugin-post-script: Attempting to run 'post-build' script")
    execSync(`npm run post-build`);
}