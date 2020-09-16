/**
 *
 *mac
 *2020/9/4
 *495301515@qq.com
 */
import QTabsBar from './q-tabs-bar-index.vue'

// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('q-tabs-bar', QTabsBar)
}
//这样就可以使用Vue.use进行全局安装了。
QTabsBar.install = function(Vue){
  Vue.component(QTabsBar.name, QTabsBar)
};

export default QTabsBar
