module.exports = {
       entry: './src/app.js',
       output: {
           path: path.resolve(__dirname, 'dist'),
           filename: 'main.js'
       },
       mode: 'development' // 设置mode
   }