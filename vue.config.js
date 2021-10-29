const path = require('path')

module.exports = {
  // 1、配置方式一：CLI提供的属性
  outputDir: './build',
  // 2、配置方式二：和webpack属性完全一致，最后会进行合并
  // 对象的方式，最后会merge
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/conponents'
  //     }
  //   }
  // }
  // 函数的方式传入cli的config配置，覆盖修改
  // configureWebpack: config => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3、配置方式三：
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
