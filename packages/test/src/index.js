import fsextra from 'fs-extra';

//read package.json
const packageJson = fsextra.readJsonSync('./package.json');
console.log(`package.json: ${packageJson.name} ${packageJson.version}`);