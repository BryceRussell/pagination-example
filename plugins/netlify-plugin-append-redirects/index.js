const fs = require('fs');

export const onPostBuild = function({ constants }) {
    fs.readFile('_redirect', 'utf8', (err, data) => {
        if (err) throw err;
        fs.appendFile(`${constants.PUBLISH_DIR}/_redirect`, data, (err) => {
            if (err) throw err;
            console.log('Appened _redirect to dist/_redirect');
        });
    });
}