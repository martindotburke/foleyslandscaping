const { execSync } = require('child_process');
const fs = require('fs');
const exec = require('child_process').exec;
const process = require('process');

fs.cp('./build', 'martindotburke.github.io',{ recursive: true }, async err => {
    if(err) {
        console.log(err);
        return;
    }

    process.chdir('./martindotburke.github.io');
    await execSync('git add .', execHandler);
    await execSync('git commit -m "Foleys update"', execHandler);
    await execSync('git push', execHandler);
    process.chdir('..');
});

execHandler = (err, stdOut, stdErr) => {
    console.log(stdOut);
}