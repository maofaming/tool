const express = require('express')
const bodyParser = require('body-parser');
const Bundler = require('parcel-bundler');
const shell = require('shelljs');
const Path = require('path');
const fs = require('fs')
const rfs = require('rotating-file-stream')
const morgan = require('morgan')

const api = require('./api')

const app = express()
const port = 9900

// 入口文件路径
const file = Path.join(__dirname, './src/index.html');

const env = process.env.NODE_ENV || 'development'

console.log('node env:', env)

function pad(num) {
    return (num > 9 ? "" : "0") + num;
}
 
function generator() {
    let time = new Date()
    let month  = time.getFullYear() + "" + pad(time.getMonth() + 1);
    let day    = pad(time.getDate());
    let hour   = pad(time.getHours());
    let minute = pad(time.getMinutes());
 
    return month + day + "-file.log";
}

// Bundler 选项
const options = {
    outDir: './public', // 将生成的文件放入输出目录下，默认为 dist
    outFile: 'index.html', // 输出文件的名称
    publicUrl: './', // 静态资源的 url ，默认为 dist
    // watch: true, // 是否需要监听文件并在发生改变时重新编译它们，默认为 process.env.NODE_ENV !== 'production'
    // cache: true, // 启用或禁用缓存，默认为 true
    // cacheDir: '.cache', // 存放缓存的目录，默认为 .cache
    // minify: false, // 压缩文件，当 process.env.NODE_ENV === 'production' 时，会启用
    // target: 'browser', // 浏览器/node/electron, 默认为 browser
    // https: false, // 服务器文件使用 https 或者 http，默认为 false
    // logLevel: 3, // 3 = 输出所有内容，2 = 输出警告和错误, 1 = 输出错误
    // hmrPort: 0, // hmr socket 运行的端口，默认为随机空闲端口(在 Node.js 中，0 会被解析为随机空闲端口)
    // sourceMaps: true, // 启用或禁用 sourcemaps，默认为启用(在精简版本中不支持)
    // hmrHostname: '', // 热模块重载的主机名，默认为 ''
    // detailedReport: false // 打印 bundles、资源、文件大小和使用时间的详细报告，默认为 false，只有在禁用监听状态时才打印报告
};

// 使用提供的入口文件路径和选项初始化 bundler
const bundler = new Bundler(file, options);

// curl -H "Content-Type:application/json" -X POST -d '{"content": "<span>12345678</span>"}' http://127.0.0.1:9900/api/clean/html  
// app.use(morgan('combined')) // 日志系统
if (env === 'development') {
    app.use(morgan('combined')) // 日志系统
} else {
    let logDirectory = Path.join(__dirname, 'log')

    // ensure log directory exists
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

    // create a rotating write stream
    let accessLogStream = rfs(generator, {
        interval: '1d', // rotate daily
        path: logDirectory
    })

    // setup the logger
    app.use(morgan('combined', {
        stream: accessLogStream
    }))
}

// 静态资源文件
app.use('/static', express.static('static'))

// parcel打包输出目录， 编译时清空之前生成文件
shell.rm('-rf', './public')
app.use(express.static('public'))

app.use(bodyParser.json());

app.use('/api', api)

// 让 express 使用 bundler 中间件，这将让 parcel 处理你 express 服务器上的每个请求
app.use(bundler.middleware());

app.listen(port, () => console.log('app listening on port ' + port + '!'))
