import fs from 'node:fs';

export const onPostBuild = function() {
    console.log("Running: netlify-plugin")
    fs.readFile('/opt/build/repo/_redirects', 'utf-8', function (err, data) {
        if (err) throw err
        console.log("Read contents of _redirect")
        fs.appendFile('/opt/build/repo/dist/_redirects', data + '\n', function (err) {
            if (err) throw err
            console.log('Appended _redirect to dist/_redirect');
        });
    });
}