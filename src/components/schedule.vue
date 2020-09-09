<template>
    <div class="scheduleContent">
      <schedule-head></schedule-head>
      <div class="scheduleMain">
        <!--搜索-->
        <div class="searchContent">
          <form>
            <input v-model="course" type="text" placeholder="请输入课程名">
            <i class="el-icon-search"></i>
          </form>
        </div>
        <!--一周课程-->
        <div class="course"></div>
      </div>
    </div>
</template>

<script>
import scheduleHead from '../common/scheduleHead'
export default {
  name: 'schedule',
  components: {
    scheduleHead
  },
  data () {
    return {
      course: ''
    }
  }
}
</script>

<style scoped>
  .scheduleContent{
    width: 100%;
    position: relative;
  }
  .scheduleMain{
    padding-top: 60px;
    height: calc(100% - 60px);
  }
  /*搜索部分*/
  .searchContent{
    opacity:.5;
    margin: 20px;
    width: 500px;
  }
  .searchContent form {
    position: relative;
    margin: 0 auto;
  }
  .searchContent input, .searchContent i {
    border: none;
    outline: none;
    font-size: 20px
  }
  .searchContent input {
    padding-left: 13px;
    padding-right:46px;
    width: 350px;
    border-radius: 42px;
    border: 1px solid #dcdfe6;
    float: right;
    height: 50px;
  }
  .searchContent i {
    width: 42px;
    cursor: pointer;
    position: absolute;
    background: none;
    top: 16px;
    right: 0;
  }

</style>
