开发环境安装方法
---
###对于开发主工程 API来说只需要如下两步：  
  
* 确保安装了 node.js（版本大于 6）和 docker  
* 在工程目录下 `make onkey-init`

> 结果：主代码依赖将会被安装，测试依赖的指令将会被安装，数据库环境将会被启动  

主代码目录在 `app/src`下，跑 `npm run dev`将会启动开发，修改代码保存即会 reload

###对于前端开发  
* 确保安装了 node.js（版本大于 6）和 docker 
* 在工程目录下 `make deploy-prod`  

前端代码在 `app/src/public`下面，这个目录下的所有资源都可以被外部访问  
>假如添加了 `demo.html`， 那么在浏览器中访问 `localhost:3000/demo`即可访问

由于是同域，所以访问 API不存在跨域问题，只需要调用 `/api/:api_path`即可访问 restapi
> 目前还没写什么API  @2017-1-11
