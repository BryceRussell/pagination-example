import fs from 'node:fs';

export const onPostBuild = function() {
    console.log("Running: netlify-plugin")
    const fileData = fs.readFile('/opt/build/repo/dist/_redirects', 'utf-8')
    console.log(fileData)
    fs.readFile('/opt/build/repo/_redirects', 'utf-8', function (err, data) {
        if (err) throw err
        console.log("Read _redirect file")
        fs.appendFile('/opt/build/repo/dist/_redirects', data, function (err) {
            if (err) throw err
            console.log('appended _redirect to dist/_redirect');
        });
    });
}