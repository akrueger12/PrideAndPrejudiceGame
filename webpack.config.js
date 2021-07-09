const path = require('path');

module.exports = {
    entry: {
        index: './client/landingPage/index.js',
        register: './client/register/register.js',
        tutorial: './client/tutorial/tutorial.js'
    },
    output: {
        path: path.resolve(__dirname, 'client/dist'),
        filename: "[name].bundle.js"
    }, 
    externals: {
        bcrypt:'bcryptjs'
    },
    resolve: {
        fallback: {
            "crypto": false,
        }
    }
};
