import fs from 'node:fs';


export const onPostBuild = function(options) {
    const fileData = fs.readdirSync('/opt/build/repo', 'utf-8');
    console.log("Data from file: ", fileData);
};