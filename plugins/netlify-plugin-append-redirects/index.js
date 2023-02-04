import { execSync } from 'node:child_process';

export const onPostBuild = function() {
    execSync(`cat _redirect >> dist/_redirect`);
}