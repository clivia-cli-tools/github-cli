const https = require('https');
const yargs = require('yargs');
const chalk = require('chalk');
// const keys = require('./keys.js');
const inquirer = require('inquirer');

const notEmpty = value => {
  if (value) return true;

  return "Cannot be blank."
}

inquirer
.prompt([
  {
    type: 'password',
    message: 'Please enter your Github Personal Access Token: ',
    name: 'token',
    mask: '*',
    validate: notEmpty
  }
])
.then(answers => console.log(`
  Personal Token added. It's ${JSON.stringify(answers.token, null, '  ')}

  Now you can use the app normally by running:

  ${chalk.bold(`repoman ${chalk.italic("repo-name")}`)}

  `));




  const url = "https://api.github.com"




  const appIntro = () => {
    console.log("\n", chalk.bold.greenBright("REPOMAN CLI UTILITY"), "\n");
    console.log("A CLI utility for creating Github repos remotely.", "\n");
    console.log(`
      If this is your first time running the app, please re-run it with
      the --config flag:

      ${chalk.bold("repoman --config")}

      You'll then be prompted to enter your Github Personal Access Token.
      For more information, see:

      ${chalk.blueBright("https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line")}

      Otherwise, typical operation of the app is with a single flag
      to stand for the name of the Github repository you want to create:

      ${chalk.bold(`repoman ${chalk.italic("repo-name")}`)}
      `);

    }


    const getOptions = {
      hostname: 'api.github.com',
      port: 443,
      path: '/',
      method: 'GET',
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Github-Repo-CLI"
      }
    }

    // const req = https.request(getOptions, (res) => {
    //   console.log(`statusCode: ${res.statusCode}`)
    //
    //   res.on('data', (d) => {
    //     process.stdout.write((d))
    //   })
    // })
    //
    // req.on('error', (error) => {
    //   console.error(error)
    // })
    //
    // req.end()

    // appIntro();
