<template>
  <div id="app">
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
  </div>
</template>

<script>
  import QTabsBar from './lib'
  export default {
    name: 'app',
    components:{QTabsBar},
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
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
