---
title: npm模块
date: 2021/7/20 17:25:13
path: \npm模块.md
---


### http-server
开启一个http服务器
``` cmd
http-server .
http-server ./src --port 8080
```
如果要开启https服务器, 需要先有ssl证书, 可以自行生成, 在git bash中执行以下相应代码即可
``` 
1、生成RSA密钥 
openssl genrsa -out key.pem 2048 

2、生成证书 
openssl req -new -key key.pem -out cert.csr 
openssl req -new -x509 -key key.pem -out cert.pem -days 1095
```
开启https服务器
``` cmd 
http-server ./src --port 8080 -S
```

### history-server
开启一个单页应用http服务器
``` cmd
history-server .
history-server ./src --port 8080
```

### asar
压缩/解压asar文件
``` cmd
asar p app app.asar
asar e app.asar app 
```

### obj2gltf
obj格式文件转glb, gltf文件
``` cmd
obj2gltf -i model.obj -o model.glb
obj2gltf -i model.obj -o model.gltf
```

### nrm
npm仓库管理
``` cmd
# 查看列表
nrm ls
# 添加
npm add <registry> <url>
# 使用
npm use <registry>
# 删除
npm del <registry>
```

### verdaccio
私有npm仓库
``` cmd
# 开启服务
verdaccio
# 添加verdaccio私有仓库
nrm add verdaccio http://localhost:4873/
# 使用
nrm use verdaccio
```

### hexo-cli
hexo博客脚手架
```
# 初始化
hexo init blog
# 启动服务器
hexo s
# 生成博客
hexo g
```