import fs from 'node:fs';

export const onPostBuild = function() {
    console.log("Attempting to append _redirects to dist/_redirects...")
    fs.readFile('/opt/build/repo/_redirects', 'utf-8', function (err, data) {
        if (err) {
            console.log("Could not read _redirects")
            throw err
        }
        fs.appendFile('/opt/build/repo/dist/_redirects', '\n' + data, function (err) {
            if (err) {
                console.log("Could not append _redirects to dist/_redirects")
                throw err
            }
            console.log('Successfully appended _redirects to dist/_redirects');
        });
    });
}