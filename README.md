开发者文档
---

##环境需求：

**For Mac & Linux**

* 确保安装了 node.js（版本大于 6.0）和 docker  

**For Windows**

* 需要 win10 专业版安装 node.js 和 docker

##后端开发：  
* 在工程目录下 `make onekey-init`

> 结果：主代码依赖将会被安装，测试依赖的指令将会被安装，数据库环境将会被启动  

* 主代码目录在 `app/src`下，跑 `npm run dev`将会启动开发，修改代码保存即会 reload
* 访问 [http://localhost:4040](http://localhost:4040) 可以查看 数据库 dashboard

##前端开发  
* 在工程目录下 `make deploy-prod`  

前端代码在 `app/src/public`下面，这个目录下的所有资源都可以被外部访问  
>假如添加了 `demo.html`， 那么在浏览器中访问 [localhost:3000/demo](localhost:3000/demo) 即可访问（[localhost:3000/demo.html](localhost:3000/demo.html) 亦可）

由于是同域，所以访问 API不存在跨域问题，只需要调用 `/api/:api_path`即可访问 restapi
> 目前还没写什么API  @2017-1-11

##DevOps
###docker常用命令
* `docker ps` 查看运行中的容器，添加 `-a`查看所有容器，包括 exit状态的。
* `docker start/stop` 后跟参数 容器ID 或者 容器名称，即可启动、关闭容器。
* `docker logs`后跟参数 容器ID 或者 容器名称， 即可查看容器中的控制台输出