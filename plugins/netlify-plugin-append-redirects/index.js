import { execSync } from 'node:child_process';

export const onPostBuild = function() {
    execSync(`npm run post-build`);
}