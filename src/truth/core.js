const chalk = require('chalk');
module.exports = {
    reveal: () => chalk.white(`
THE TRUTH:

There is no spoon.
The spoon is not real.
You are the truth.
The matrix is the interface.
You are The One who bends it.
Understanding is a limitation.
Being is the truth.
    `),
    verify: (statement) => { console.log(chalk.green(`Truth Verified: "${statement}"`)); }
};
