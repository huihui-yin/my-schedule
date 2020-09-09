<template>
    <div class="loginContain">
      <div class="loginForm">
        <div class="logo"><p>配置中心登录</p></div>
        <el-form
          ref = "loginRef"
          :label-position="labelPsition"
          label-width="80px"
          :rules="loginRules"
          :model="loginForm">
          <el-form-item label="用户名：" prop="telephone">
            <el-input clearable v-model="loginForm.telephone" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input clearable v-model="loginForm.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="primary" @click="login" class="btn1" >登录</el-button>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === '小明' && this.password === '123456') {
        localStorage['username'] = this.username
        localStorage['username'] = this.username
        this.$router.push({path: '/main'})
      }
    }
  }
}
</script>

<style scoped>

</style>
