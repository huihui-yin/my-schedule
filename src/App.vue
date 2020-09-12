<template>
    <div id="app"  onresize="setRem()">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // setRem () {
    //   // 设置rem的值
    //   document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px';
    // }
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family:'Gotham-Bold', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background: url("assets/img/bg5.jpg") no-repeat;
  /*background-color: #f7f6f4;*/
  background-size: 100%100%;
}
*{
  padding: 0;
  margin: 0;
}
body,html,#app {
  width: 100%;
  height: 100%;
  /*font-size: 1vw;*/
  font-size: 16px;
  overflow: auto;
}
/*设置滚动条*/
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #eeeeee;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0,0,0,0.06);
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0,0,0,0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}
</style>
