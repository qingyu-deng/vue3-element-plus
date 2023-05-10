module.exports = {
  lintOnSave: false,
  devServer: {
    open: true, //自动访问
    // host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://1.116.64.64:5004/api2/',
        changeOrigin: true,  //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
