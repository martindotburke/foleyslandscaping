/*Just put it on GitLab public folder for now, for previewing*/

const { execSync } = require('child_process');
const fs = require('fs');
const exec = require('child_process').exec;
const process = require('process');

console.log("Copying build to submodule...");
fs.cp('./build', 'martindotburke.github.io',{ recursive: true }, async err => {
    if(err) {
        console.log(err);
        return;
    }

    console.log("Staging changes for commit...");
    process.chdir('./martindotburke.github.io');
    await execSync('git add .', execHandler);
    console.log("Commping changes ...");
    await execSync('git commit -m "Foleys update"', execHandler);
    console.log("Pushing changes ...");
    await execSync('git push', execHandler);
    process.chdir('..');
    console.log("Done!");
});

execHandler = (err, stdOut, stdErr) => {
    if(err) {
        console.log("Error: ", err);
    }
    if(stdErr) {
        console.log("Error: ", stdErr);
    }
    console.log(stdOut);
}