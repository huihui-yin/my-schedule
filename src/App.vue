<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family:'Gotham-Bold', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("assets/img/bg1.jpg") no-repeat;
  background-size: 100%100%;
}
*{
  padding: 0;
  margin: 0;
}
body,html,#app {
  width: 100%;
  height: 100%;
  /*overflow: hidden;*/
  /*min-height: 615px;*/
  /*min-width: 950px;*/
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
