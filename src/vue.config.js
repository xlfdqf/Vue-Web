// vue.config.js
module.exports = {
    baseUrl:"/home",
    chainWebpack:config=>{
      config.module.rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
        .loader('px2rem-loader')
        .options({
          remUnit: 192
        })
    },
    devServer:{
      port:8080,
    },
  }