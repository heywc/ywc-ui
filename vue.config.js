// 开发环境
const devConfig = require('./config/config.dev');
// 生产环境
const buildConfig = require('./config/config.build');
module.exports = process.env.NODE_ENV === 'production' ? buildConfig : devConfig;