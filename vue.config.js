module.exports = {
	//配置全局样式变量
	css: {
		loaderOptions: {
			sass: {
				prependData: `
				import "~@/assets/style/common/variables.scss"
				import "~@/assets/style/common/common.scss"
				`,
            },
            scss: {
				prependData: `
				@import "~@/assets/style/common/variables.scss";
				@import "~@/assets/style/common/common.scss";
				`,
			}
		}
	}
}