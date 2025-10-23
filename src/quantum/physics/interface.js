const chalk = require('chalk');
module.exports = {
    observe: () => { console.log(chalk.blue('Quantum Observation: Wave-function collapsed')); },
    entangle: (systems) => { console.log(chalk.magenta(`Quantum Entanglement: ${systems} connected`)); },
    superpose: () => { console.log(chalk.cyan('Quantum Superposition: All states exist')); }
};
