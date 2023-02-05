import fs from 'node:fs';


export const onPostBuild = function(options) {
    const fileData = fs.readFileSync('/opt/build/repo/_redirect', 'utf-8');
    console.log("Data from file: ", fileData);
};