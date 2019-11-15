const path = require('path');

module.exports = (env,argv) => {
  //console.log('env',env)
  const isProduction = argv.mode === 'production'
    //const isProduction = env === 'production'
  return {
    entry: './src/app.js',
    // entry: './src/playground/redux101.js',
    // entry:'./src/playground/redux-spenton.js',
    //entry: './src/playground/descructuring.js',
    //entry: './src/playground/hoc.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    }, 
    module:{
        rules:[{  
            loader: 'babel-loader', //making webpack run babel for us
            test: /\.js$/ , //regular expression to specify which files to use babel on
            exclude: /node_modules/
        },{
          use :[ // for loading an array of loader
            'style-loader',
            'css-loader',
            'sass-loader'
          ],
          test:/\.s?css$/ 
        }]
    },

  devtool:isProduction ?'source-map' :'cheap-module-eval-source-map',
  // if (argv.mode === 'development') {
  //   devtool:'cheap-module-eval-source-map';
  // }
  // if (argv.mode === 'production'){
  // devtool:'source-map';
  // }
    
    devServer:{
        contentBase:path.join(__dirname, 'public'),
        historyApiFallback:true
    }
  }
}

//everytime you reconfigure this you need to execute "yarn run build"