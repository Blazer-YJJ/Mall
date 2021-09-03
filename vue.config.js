module.exports = {
	devServer:{
		host:'localhost',
		port:8000,
		proxy:{
			'/api':{
				target:'http://mall-pre.springboot.cn',
				changeOrigin:true,
				pathRewrite:{
					'/api':''
				}
			}
		}
	}
}