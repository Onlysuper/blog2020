const path = require("path");
console.log(__dirname);
console.log(path.resolve(__dirname, "src"));
module.exports = {
  configureWebpack: config => {
    // webpack 配置
    return {
      resolve: {
        alias: {
          "@src": path.resolve(__dirname, "src/")
          //   vue$: "vue/dist/vue.esm.js"
        }
      }
    };
  },
  //配置全局样式变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `
				import "~@/assets/style/common/variables.scss"
				import "~@/assets/style/common/common.scss"
				`
      },
      scss: {
        prependData: `
				@import "~@/assets/style/common/variables.scss";
				@import "~@/assets/style/common/common.scss";
				`
      }
    }
  }
};
