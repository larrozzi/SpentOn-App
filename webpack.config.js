const path = require('path');
const miniCssExtractPlugin = require.ensure('mini-css-extract-plugin');
const resolve = require('path').resolve;
const devMode = process.env.NODE_ENV !== 'production'

module.exports = (env,argv) => {
  //console.log('env',env)
  const isProduction = argv.mode === 'production'
  const isDev = argv.mode !== 'production'
  //const isProduction = env === 'production'
  return {
    entry: ['babel-polyfill','./src/app.js'],
    output: {
      path: path.join(__dirname, 'public','dist'),
      filename: 'bundle.js'
    }, 
    module:{
        rules:[
      {
            loader: 'babel-loader', //making webpack run babel for us
            test: /\.js$/ , //regular expression to specify which files to use babel on
            exclude: /node_modules/
      },{
      // Compile CSS files
        test: /\.css$/, 
        use: [miniCssExtractPlugin.loader, "css-loader"] 
      },{
			// Compile SCSS files
				test: /\.scss$/,
				use: [
					isDev ? 'style-loader' : miniCssExtractPlugin.loader,
          { loader: 'css-loader', options: {sourceMap: true}},
          { loader: 'sass-loader', options: {sourceMap: true}}
        ],
        	// This compiles styles specific to this app
				include: resolve(__dirname, 'src/styles'),
			}
        // {
        //   use :[ // for loading an array of loader
        //     'style-loader',
        //     'css-loader',
        //     'sass-loader'
        //   ],
        //   test:/\.s?css$/ 
        // }
      ]
    },

  devtool:isProduction ?'source-map' :'eval-source-map',
  // if (argv.mode === 'development') {
  //   devtool:'cheap-module-eval-source-map';
  // }
  // if (argv.mode === 'production'){
  // devtool:'source-map';
  // }
    
    devServer:{
        contentBase:path.join(__dirname, 'public'),
        historyApiFallback:true, // serves up index.html in th public folder everytime there is a 404
        publicPath:'/dist/'
      },

    plugins: [
      new miniCssExtractPlugin({filename:'myStyles.css'})
    ]
  }
}

//everytime you reconfigure this you need to execute "yarn run build"