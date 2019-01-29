const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

dotenv.config();

const inDevelopmentMode = process.env.NODE_ENV === 'development';

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, './build/js'),
    filename: `[name]${inDevelopmentMode ? '' : '.min'}.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, './src/client')],
        options: {
          configFile: './.eslintrc.json',
          // eslint-disable-next-line global-require
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 2 versions'],
                  },
                  modules: false,
                },
              ],
              '@babel/preset-react',
            ],
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            plugins: [
              '@babel/plugin-transform-react-jsx',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-spread',
              '@babel/proposal-object-rest-spread',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TDD with React + Enzyme Demo',
      template: './src/client/templates/index.html',
    }),
  ],
  devServer: {
    port: 3000,
  },
};
