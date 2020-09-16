# q-tabs-bar

> vue 顶部选项卡，支持自定义

```
# 安装
npm install q-tabs-bar

# 使用
main.js
import QTabsBar from 'q-tabs-bar';
Vue.use(QTabsBar);

//简单使用
<q-tabs-bar
  :tabList="tabList"
  :tabIndex="tabIndex"
  @changeTab="changeTab">
  <div slot="content">{{currentContent}}</div>
</q-tabs-bar>

//自定义使用
<q-tabs-bar
  :tabStyle="'background: gray;'"
  :tabStyleActive="'background: red;'"
  :middleLineStyle="'background: pink;'"
  :bottomLineStyle="'background: red;height:2px'"
  :tabSpace="10"
  :tabList="tabList"
  :tabIndex="tabIndex"
  @changeTab="changeTab">
  <template slot="title" slot-scope="tab">
    <div>{{tab.data.name}}</div>
  </template>
  <div slot="content">{{currentContent}}</div>
</q-tabs-bar>

script-----
data(){
  return {
    tabIndex: 0,
    currentContent: 'one',
    tabList: [
      {index: 0, name: '选项一', component: 'one'},
      {index: 1, name: '选项二', component: 'two'},
      {index: 2, name: '选项三', component: 'three'},
      {index: 3, name: '选项四', component: 'four'},
      {index: 4, name: '选项五', component: 'five'}
    ]
  }
},
methods:{
  changeTab: function (tab) {
    this.tabIndex = tab.index
    this.currentContent = tab.component
  }
}
script-----

tabStyle : 自定义tab样式
tabStyleActive : 自定义选中的样式
middleLineStyle : 自定义tab之间中间线的样式
bottomLineStyle : 自定义tab底部线的样式
tabSpace : tab 之间的距离 默认15
tabList : tab 数据
tabIndex : 选中的tab索引
changeTab : 点击tab返回item事件

如不需要显示tab之间的竖线设置 middleLineStyle="'background: transparent;'" 背景设置为透明即可，tab底部线同理


```

