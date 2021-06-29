// // const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// // let htmlPageNames = ['register'];
// // let multipleHtmlPlugins = htmlPageNames.map(name => {
// //   return new HtmlWebpackPlugin({
// //     template: `./client/${name}/${name}.html`, // relative path to the HTML files
// //     filename: `${name}.html`, // output HTML files
// //     chunks: [`${name}`] // respective JS files
// //   })
// // });

// module.exports = {
//   entry: {
//       index: './index.js',
//       register: './client/register/register.js'
//     },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//   },
//   mode: 'development',
//   resolve: {
//     modules: [
//       path.resolve('./node_modules')
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//         template: "./index.html",
//         chunks: ['main']
//     })
//   ].concat(multipleHtmlPlugins),
// };

module.exports = {
    entry: {
        index: './client/landingPage/index.js',
        register: './client/register/register.js'
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
