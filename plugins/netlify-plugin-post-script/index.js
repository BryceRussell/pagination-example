import fs from 'node:fs';
import { execSync } from 'node:child_process';

export const onPostBuild = function(options) {
    console.log("Running: netlify-plugin")
    fs.readFile('/opt/build/repo/_redirect', 'utf-8', function (err, data) {
        console.log('DATA: ', data)
        if (err) { console.log(err); throw err}
        console.log("Read _redirect file")
        fs.appendFile('/opt/build/repo/dist/_redirect', data, function (err) {
            if (err) { console.log(err); throw err}
            console.log('appended _redirect to dist/_redirect');
        });
    });

    // execSync(`npm run post-build`);
}