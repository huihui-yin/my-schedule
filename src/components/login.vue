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
           class="form"
          ref = "loginRef"
          :label-position="labelPsition"
          label-width="80px"
          :rules="loginRules"
          :model="loginForm">
          <el-form-item prop="username" label-width="0">
            <el-input  clearable v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password" label-width="0">
            <el-input clearable v-model="loginForm.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="primary" @click="login" class="btn1" round>登录</el-button>
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
<style>
  /*lable*/
  .el-form-item__label{font-size: 18px !important;}
  @media (max-width: 1200px){
    .el-form-item__label{font-size: 14px !important;}
  }
</style>
<style lang="less" scoped>
  .loginContain{
    position: relative;
    background: url("../assets/img/bg1.jpg") no-repeat;
    background-size: 100% 100%;
    display: flex;
    /*flex-direction: row;*/
    height: 100%;
  }
  .titleContent{
    flex: 1;
    position: relative;
    font-size: 140px;
    color: #d0d0d0;
    @media (max-width: 1200px){
      font-size: 120px;
    }
    @media (max-width: 1000px){
      display: none;
    }
    p{
      margin: 0 10px;
      position: absolute;
      top: 20%;
      left: 10%;
      transform: translate(-50% -50%,0);
  }
  }
  /*表单区*/
  .loginForm{
    flex: 1;
    opacity: .9;
    height: 100%;
    position: relative;
    font-size: 18px;
  }
  .formMain{
    position: absolute;
    top: 20%;
    left: 10%;
    right: 10%;
    transform: translate(-50% -50%,0);
    /*height: 60%;*/
    height: 30rem;
    background-color: #fff;
    .form{
      padding:0 10%;
      margin-top: 80px;
    }
    .btn1{
      width:100%;
      margin-top: 50px;
    }
  }
</style>
