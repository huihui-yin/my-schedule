<template>
    <div class="headContent">
      <div class="headMain">
        <div class="title">
          <img src="../assets/img/schedule2.png" alt="">
          Class Schedule
        </div>
        <div class="user">
          <img src="../assets/img/user.png" alt="">
          {{username}}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'scheduleHead',
  data () {
    return {
      username: ''
    }
  },
  created () {
    this.username = localStorage.username
  }
}
</script>

<style scoped>
  .headContent{
    width: 100%;
    height: 60px;
    box-shadow: 0 2px 2px 0 rgba(235,235,235,.1);
    position: fixed;
    top: 0;
    z-index: 9;
  }
  .headMain{
    display: flex;
    justify-content: space-between;
    margin:0 10%;
    line-height: 60px;
    font-size: 40px;
    color: #dfd8d2
  }
  .title img{width: 50px;height: 50px;vertical-align: middle}
  .user img{width: 40px; height: 40px;vertical-align: middle;}
  .user{font-size: 25px;}
</style>
