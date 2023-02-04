import fs from 'node:fs';

export const onPostBuild = function({ constants }) {
    fs.readFile('_redirect', 'utf8', (err, data) => {
        if (err) {
            console.log("Failed to read _redirect")
            throw err
        }
        fs.appendFile(`${constants.PUBLISH_DIR}/_redirect`, data, (err) => {
            if (err) {
                console.log("Failed to append _redirect to dist/_redirect")
                throw err
            }
            console.log('Successfully appened _redirect to dist/_redirect');
        });
    });
}