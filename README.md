开发者文档
---

##环境需求：

**For Mac & Linux**

* 确保安装了 node.js（版本大于 6.0）和 docker  

**For Windows**

* 需要 win10 专业版安装 node.js 和 docker

##clone完项目后
> 在项目根目录下 `make init` 即可安装API代码

##后端开发：  
* 在工程目录下 `make dev-docker`
* 主代码目录在 `app/src`下，跑 `npm run dev`将会启动开发，修改代码保存即会 reload，这是一个独立的项目，代码提交转向[传送门](https://github.com/SummerCMS/API)
* 访问 [http://localhost:4040](http://localhost:4040) 可以查看 数据库 dashboard

##前端开发  
* 在工程目录下 `make deploy-prod`  
* clone [FE项目](https://github.com/SummerCMS/FE)执行开发

##DevOps
###docker常用命令
* `docker ps` 查看运行中的容器，添加 `-a`查看所有容器，包括 exit状态的。
* `docker start/stop` 后跟参数 容器ID 或者 容器名称，即可启动、关闭容器。
* `docker logs`后跟参数 容器ID 或者 容器名称， 即可查看容器中的控制台输出