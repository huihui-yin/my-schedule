<template>
    <div class="headContent">
      <div class="headMain">
        <div class="title">
          <img src="../assets/img/schedule3.png" alt="">
          Class Schedule
        </div>
        <div class="user">
          <img src="../assets/img/user2.png" alt="">
          <!--{{username}}-->
          <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    {{username}}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
            <el-dropdown-menu slot="dropdown">
              <!--<el-dropdown-item icon="el-icon-plus">个人信息</el-dropdown-item>-->
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
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
    color: #505050;
    background-color: #dadfdb;
  }
  .headMain{
    width: 100%;
    display: flex;
    justify-content: space-between;
    /*margin:0 10%;*/
    line-height: 60px;
    position: fixed;
    top: 0;
  }
  .title{margin-left: 10%;font-size: 1.6rem;}
  .title img{width: 2.2rem;height: 2.2rem;vertical-align: middle}
  .user img{width: 2rem; height: 2rem;vertical-align: middle;}
  .user{font-size: 1rem; margin-right: 10%}
  @media (max-width: 1000px) {
    .headContent{height: 45px}
    .headMain{line-height: 45px}
  }
  @media (max-width: 500px) {
    /*.headContent{height: 30px}*/
    /*.headMain{line-height: 30px}*/
    .title{margin-left: 10%;font-size: 1rem;}
    .title img{width: 1.8rem;height: 1.8rem;vertical-align: middle}
    .user img{width: 1.5rem; height: 1.5rem;vertical-align: middle;}
    .user{font-size: 1rem; margin-right: 10%}
  }
</style>
