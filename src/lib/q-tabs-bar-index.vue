<template>
  <div class="my-tabs">
    <div class="tabs-bar">
      <div class="tabs-bar-nav">
        <div v-for="tab in tabList" style="display: flex;align-items: center">
          <div class="tabs-tab common-tabs-tab" :class="[tabIndex == tab.index ? 'tabs-active' : '']"
               :style="(tab.index==tabList.length-1?'margin-left: '+tabSpace+'px;':(tab.index !=0 && tab.index !=tabList.length-1?'margin-left:'+tabSpace+'px;margin-right:'+tabSpace+'px;':'margin-right:'+tabSpace+'px;'))+tabStyle+';'+(tabIndex == tab.index ? tabStyleActive : '')"
               @click="changeTab(tab)">
            <slot name="title" :data="tab">{{tab.name}}</slot>
            <div class="tab-bottom-line" v-if="tabIndex == tab.index" :style="bottomLineStyle" style="position: absolute;width: 100%;bottom: -4px;left: 0;"></div>
          </div>
          <div v-if="tab.index !=tabList.length-1" class="tab-middle-line" :style="middleLineStyle"></div>
        </div>
      </div>
    </div>
    <div class="tabs-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'QTabsBar',
    props:{
      tabList: Array,//tab数据
      tabIndex: Number,//选择索引
      tabStyle:String,//默认tab样式
      tabStyleActive:String,//选中tab的样式
      middleLineStyle:String,
      bottomLineStyle:String,//底部线样式
      tabSpace:{
        type:Number,
        default:15
      },//tab之间的间距
    },
    watch: {

    },
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{
      changeTab: function (tab) {
        this.$emit('changeTab', tab)
      }
    }
  }
</script>

<style scoped >
  .my-tabs {
    font-size: 14px;
    color: #444;
  }
  .tabs-bar {
    position: relative;
    height: 35px;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 0.1rem;
    margin-bottom: -.2rem;
    overflow: -moz-scrollbars-none;
    overflow: -moz-scrollbars-none;
  }
  .tabs-bar::-webkit-scrollbar{
    display: none;
  }
  .tabs-bar-nav {
    display: flex;
    position: absolute;
  }
  .common-tabs-tab {
    min-width: 90px;
    padding: 4px 6px;
    position: relative;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    border-radius: 32px;
    color: #BEB3B3;
    font-weight: 900;
    background: white;
    border: 1px solid white;
  }
  .tab-middle-line{
    display: flex;
    width: 1px;
    height: 60%;
    background: #C7000B;
  }
  .tab-bottom-line{
    background: #C7000B;
    height: 2px;
  }
  .tabs-active {
    border: 1px solid white;
    background: #CB1512;
    color: #FFFFFF;
  }
  .tabs-content {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
  }
</style>
