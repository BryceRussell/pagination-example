import { fs } from 'node:fs';
import { execSync } from 'node:child_process';

export const onPostBuild = function(options) {
    console.log("Running: netlify-plugin");

    var w = fs.createWriteStream("dist/_redirect", {flags: 'a'});

    var r = fs.createReadStream("_redirect");
    
    w.on('close', function() {
        console.log("done writing");
    });

    r.pipe(w);

    execSync(`npm run post-build`);
}