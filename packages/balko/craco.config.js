const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');
const { default: postcss } = require('postcss');

const packages = [];
packages.push(path.join(__dirname, '../lotus'));
packages.push(path.join(__dirname, '../piccaso'));
packages.push(path.join(__dirname, '../manatee'));
console.log('packages ', packages);
module.exports = {
    webpack: {
        configure: (webpackConfig, arg) => {
            const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));
            if (isFound) {
                const include = Array.isArray(match.loader.include)
                    ? match.loader.include
                    : [match.loader.include];

                match.loader.include = include.concat(packages);
            }
            return webpackConfig;
        }
    }
};
