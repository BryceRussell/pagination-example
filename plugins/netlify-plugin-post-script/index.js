import fs from 'node:fs';


exports.onPostBuild = async function() {
    const fileData = fs.readFileSync('/opt/build/repo/_redirect', 'utf-8');
    console.log("Data from file: ", fileData);
};