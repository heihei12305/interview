#!/usr/bin/env node
//本地node安装路径

//然后 修改index权限
//在package.json中加入
/*
"bin": {
    "google": "index.js"
  },
*/
//运行 npm link 
//然后可以命令行直接运行google

const open = require("open");
//利用node的open开启搜索

// console.log(process.argv[2])

let s = 'https://www.google.com/search?q='+process.argv[2]+'&rlz=1C1NHXL_zh-CN__824__824&oq='+process.argv[2]+'&aqs=chrome..69i57j0l5.2164j0j9&sourceid=chrome&ie=UTF-8';
// console.log(s);
open(s,'chrome')

