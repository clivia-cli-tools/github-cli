const keytar = require('keytar');

const setPass = keytar.setPassword('repoman', 'alextoken', 'test1234')

const pass = keytar.getPassword("repoman", "PAT")

setPass.then(
  result => console.log("Token added", result),
  error => console.log(error)
);

// console.log("password set");
pass.then(
  result => console.log(result),
  error => console.log(error)
)

// export module.
