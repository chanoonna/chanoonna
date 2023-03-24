import 'webpack-dev-server';
import webpack, { Configuration } from 'webpack';
import TsconfigPathsPlugins from 'tsconfig-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import getPublicUrlOrPath from 'react-dev-utils/getPublicUrlOrPath';
import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) =>
  path.resolve(appDirectory, relativePath);

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL
);

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, '../');
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');
const BUILD = path.join(ROOT, 'build');
const isProduction = ENV === 'production';

const webpackConfig: Configuration = {
  stats: 'errors-warnings',
  mode: isProduction ? 'production' : 'development',
  target: ['browserslist'],
  bail: isProduction,
  entry: [
    ...(!isProduction ? ['webpack/hot/only-dev-server'] : []),
    path.join(SRC, 'index.tsx')
  ],
  output: {
    path: BUILD,
    pathinfo: !isProduction,
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
    library: {
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /\.s?(c|a)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1
            }
          },
          'sass-loader'
        ],
        include: /\.module\.s?(c|a)ss$/
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.s?(c|a)ss$/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }]
              },
              titleProp: true,
              ref: true
            }
          },
          'file-loader'
        ]
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              module: 'esnext',
              moduleResolution: 'node'
            }
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [SRC, 'node_modules'],
    plugins: [new TsconfigPathsPlugins()]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(PUBLIC, 'manifest.json'), to: 'manifest.json' },
        { from: path.join(PUBLIC, 'favicon.ico'), to: 'favicon.ico' }
      ]
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: ENV
    }),
    ...(!isProduction ? [new webpack.HotModuleReplacementPlugin()] : []),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: ENV
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(PUBLIC, 'index.html'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      isBrowser: true,
      env: isProduction ? 'production' : 'development',
      isDevelopment: !isProduction,
      inject: true
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: publicUrlOrPath
    }) as any // type doesn't match for some reason
  ],
  optimization: {
    minimize: isProduction,
    sideEffects: true
  },
  ...(!isProduction && {
    devtool: 'inline-source-map',
    devServer: {
      port: PORT,
      open: true,
      compress: true,
      hot: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      static: {
        publicPath: '/public'
      },
      historyApiFallback: {
        verbose: true
      }
    }
  })
};

export default webpackConfig;
