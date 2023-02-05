import fs from 'node:fs';

export const onPostBuild = function() {
    console.log("Running: netlify-plugin")
    const fileData = fs.readFileSync('/opt/build/repo/dist/_redirects', 'utf-8')
    fs.readFile('/opt/build/repo/_redirects', 'utf-8', function (err, data) {
        if (err) throw err
        console.log(fileData + '\n', data)
        console.log("Read contents of _redirect")
        fs.appendFile('/opt/build/repo/dist/_redirects', '\n' + data, function (err) {
            if (err) throw err
            console.log('Appended _redirect to dist/_redirect');
        });
    });
}