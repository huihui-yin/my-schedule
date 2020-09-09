<template>
    <div class="loginContain">
      <div class="titleContent">
        <p>开启你的课堂之旅吧</p>
      </div>
      <!--登录表单-->
      <div class="loginForm">
        <div class="formMain">
        <!--<div class="logo"><p>登录</p></div>-->
         <el-form
          ref = "loginRef"
          :label-position="labelPsition"
          label-width="80px"
          :rules="loginRules"
          :model="loginForm">
          <el-form-item label="用户名：" prop="username">
            <el-input  clearable v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input clearable v-model="loginForm.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="primary" @click="login" class="btn1" >登录</el-button>
        </el-form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      labelPsition: 'left',
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login () {
      console.log('登录函数')
      this.$refs.loginRef.validate((valid) => {
        if (!valid) {
          return false
        } else {
          if (this.loginForm.username === '小明' && this.loginForm.password === '123456') {
            localStorage['username'] = this.loginForm.username
            localStorage['password'] = this.loginForm.password
            this.$router.push({path: '/main'})
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.loginContain{
  position: relative;
  background: url("../assets/img/bg1.jpg") no-repeat;
  background-size: 100% 100%;
}
.titleContent{
  position: absolute;
  left: 5%;
  width: 50%;
  font-size: 200px;
  color: #dfd8d2;
  line-height: 25vh;
}
.titleContent p{margin: 0 10px}
/*表单区*/
.loginForm{
  margin: 40px;
  position: absolute;
  width: 500px;
  height: 800px;
  right: 20%;
  background-color: #fff;
}
  .formMain{
    padding: 20px;
  }
</style>
