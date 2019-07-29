const ora = require('ora');
const ActionSequence = require('action-sequence');

module.exports = ({ params, props }) => {
    const spinner = ora({
        spinner: 'dots',
        color: 'cyan',
    });

    console.log('');
    spinner.start();

    const actions = require('./actions')(spinner);

    return ActionSequence({
        actions,
        options: { params, props },
    })
        .then(success => {
            console.log('');
            return success;
        })
        .catch(error => {
            spinner.fail('error!');
            console.log('');
            return error;
        });
};
