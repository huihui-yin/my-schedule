<template>
    <div class="scheduleContent">
      <schedule-head></schedule-head>
      <div class="scheduleMain">
        <!--搜索-->
        <div class="searchContent">
          <form @click="getFocus">
            <input class="a" id="in"  type="text" placeholder="请输入课程名"
                   @input="findClass"
                   v-model="courseSearch"
                   @focus="findClass">
            <i @click="findClass" class="el-icon-search"></i>
            <div class="after"></div>
            <div class="searchResult">
              <p @click="searchDetail(index)" v-if="result" v-for="(item, index) in searchResult" v-bind:key="index">
                <span>{{item.name.slice(0, 4) + '...'}}</span>
                <span>周{{item.day}}第{{item.period}}节</span>
              </p>
              <div v-else>{{searchResult[0]}}</div>
            </div>
          </form>
        </div>
        <!--一周课程-->
        <div class="courseContent">
          <!--周几-->
          <div class="week">
            <!--top-text  width: courseWidth + 'px'-->
            <div class="weekTitle">周一</div>
            <div class="weekTitle">周二</div>
            <div class="weekTitle">周三</div>
            <div class="weekTitle">周四</div>
            <div class="weekTitle">周五</div>
            <div class="weekTitle">周六</div>
            <div class="weekTitle">周日</div>
          </div>
          <div class="courseMain">
            <!--左侧时间-->
            <div class="time">
              <div v-for = "(item, index) in time" v-bind:key="index"   class="timeTitle"
                   :style="{height:classHeight + 'px',lineHeight:classHeight + 'px'}">{{item}}</div>
            </div>
            <!--课表-->
            <div class="allClass">
              <!--<div >-->
                <div v-for="(item, index) in allCourse" v-bind:key="index" class="lesson"
                     @click="detail(index)"
                     :style="{
                     left: (item.day - 1) * classAllWidth / 7 + 'rem',
                     height: item.length * (classHeight ) - 2 + 'px',
                     width: classAllWidth / 7.1 + 'rem',
                     top: (item.period - 1) * classHeight + 'px',
                     backgroundColor:allColor[index%9]
                     }">
                  <p class="lessText">{{item.name + '@' + item.room}}</p>
                </div>
              <!--</div>-->
            </div>
          </div>
        </div>
        <!--弹窗-->
        <el-dialog
          :before-close="cancel"
          title="课程信息"
          :visible.sync="classDetail"
          :modal-append-to-body="false"
          width="50%"
          top="30vh"
          style="font-size: 0.6rem;"
        >
          <p>{{classContent.name}}</p>
          <p>{{classContent.teacher}}</p>
          <p>{{classContent.room}}</p>
          <p>周{{classContent.day}}第{{classContent.period}} - {{parseInt(classContent.period) + parseInt(classContent.length)}}节</p>
        </el-dialog>
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
      classHeight: 60,
      courseSearch: '', // 输入的课程
      searchResult: [], // 搜索结果内容
      result: false, // 是否有搜索内容
      classAllWidth: '', // 课程表内容的宽度
      week: ['一', '二', '三', '四', '五', '六', '日'],
      time: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      allCourse: [
        {name: '毛泽东思想理论体系概论', room: '4A - 305', day: '1', period: '3', length: '2', teacher: '吴红伟'},
        {name: 'java程序设计', room: '8 - 316', day: '1', period: '5', length: '2', teacher: '钟建'},
        {name: '操作系统', room: '6B - 303', day: '1', period: '7', length: '2', teacher: '薛开庆'},
        {name: '通信协议', room: '5B - 403', day: '1', period: '9', length: '3', teacher: '周建鸿'},
        {name: 'c#编程与开发', room: '8 - 316', day: '2', period: '3', length: '2', teacher: '柳荣其'},
        {name: 'java程序设计', room: '8 - 316', day: '2', period: '5', length: '2', teacher: '钟建'},
        {name: '操作系统', room: '6B-303', day: '2', period: '7', length: '2', teacher: '薛开庆'},
        {name: 'STL泛型开发技术', room: '5B - 309', day: '3', period: '1', length: '2', teacher: '余文溪'},
        {name: '毛泽东思想理论体系概论', room: '4A - 305', day: '3', period: '3', length: '2', teacher: '吴红伟'},
        {name: 'c#编程与开发', room: '8 - 316', day: '4', period: '3', length: '2', teacher: '柳荣其'},
        {name: '形势与政策', room: '6B - 201', day: '4', period: '5', length: '2', teacher: '乔颖'},
        {name: 'STL泛型开发技术', room: '5B - 309', day: '5', period: '1', length: '2', teacher: '余文溪'},
        {name: '实验', room: '5B - 309', day: '6', period: '5', length: '3', teacher: '哈哈'},
        {name: '实验', room: '5B - 309', day: '7', period: '1', length: '2', teacher: '哈哈'}
      ], // 课表数组
      allColor: ['#ef5b9c', '#f15b6c', '#f26522', '#ffd400', '#8552a1', '#7fb80e', '#65c294', '#78cdd1', '#33a3dc'],
      classIndex: '', // 选择的课的下标
      classContent: '', // 选择的课程详情
      classDetail: false // 课程详情弹窗
    }
  },
  methods: {
    detail (index) {
      this.classIndex = index
      this.classContent = this.allCourse[index]
      if (this.classContent.day === '7') {
        this.classContent.day = '日'
      }
      this.classDetail = true
      // console.log('classIndex: ', this.classIndex)
      // console.log('classContent: ', this.classContent)
    },
    // input框获取焦点
    getFocus () {
      console.log('input框获取焦点')
      var input = document.getElementById('in')
      input.focus() // 目的是点击form之内但input之外也不会失去焦点
    },
    // 搜索课程
    findClass () {
      // console.log('值改变', this.courseSearch)
      var input = document.getElementById('in')
      input.focus() // 目的是点击搜索图标input也不会失去焦点
      var searchValue = this.courseSearch
      this.searchResult = []
      this.result = false
      var res = []
      this.allCourse.forEach((item, index) => {
        if (item.name.indexOf(searchValue) !== -1 && searchValue !== '') {
          // 有匹配结果并且搜索框输入的数据不为空
          // console.log('1')
          this.result = true
          // item.name.slice(0, 4) + '...'
          // if (item.name.length > 6) {
          //   item.name = item.name.slice(0, 6) + '...'
          // }
          res.push(item)
          // 将input的底部boder-radius去掉
          input.classList.add('b')
          input.classList.remove('a')
        } else if (searchValue === '') {
          // 搜索框输入数据为空
          input.classList.add('a')
          input.classList.remove('b')
        }
      })
      if (this.result === false && searchValue !== '') {
        this.result = false
        res = ['** 无结果 **']
        input.classList.add('b')
        input.classList.remove('a')
      }
      this.searchResult = res
      // console.log('this.searchResult: ', this.searchResult)
    },
    // 取消搜索
    outSearch () {
      this.searchResult = []
      var input = document.getElementById('in')
      input.classList.add('a')
      input.classList.remove('b')
    },
    // 点击搜索的结果
    searchDetail (index) {
      // var input = document.getElementById('in')
      // input.focus() // 目的是点击搜索图标input也不会失去焦点
      console.log('点击搜索的结果')
      this.classContent = this.searchResult[index]
      this.classDetail = true
    },
    // 关闭弹窗
    cancel () {
      this.classDetail = false
    },
    // 获取屏幕宽高
    getClent () {
      this.classHeight = 60
      var doWidth = document.documentElement.clientWidth // 视图的宽度
      this.classAllWidth = document.getElementsByClassName('allClass')[0].clientWidth / 16 // 单位换算成rem
      if (doWidth <= 500) {
        this.classHeight = 60
      }
      // console.log('doWidth:', doWidth)
      // console.log('classHeight:', this.classHeight)
      // console.log('classAllWidth:', this.classAllWidth)
    }
  },
  mounted () {
    this.getClent()
    window.onresize = () => { // 动态获取屏幕宽度
      this.getClent()
    }
  }
}
</script>

<style lang="less" scoped>
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
    /*opacity:.9;*/
    margin: 20px;
    width: 500px;
    height:60px;
    position: relative;
    form {
      position: relative;
      margin: 0 auto;
      height: 50px;
      input, i {
        border: none;
        /*font-size: 20px*/
      }
      input {
        padding-left: 13px;
        padding-right:46px;
        width: 350px;
        border: 1px solid #dcdfe6;
        float: right;
        height: 50px;
      }
      .a{border-radius: 20px;} // 四个角都有弧度
      .b{border-top-left-radius: 20px;border-top-right-radius: 20px;} // 只有上面两个角有弧度
      i {
        width: 42px;
        cursor: pointer;
        position: absolute;
        background: none;
        top: 16px;
        right: 0;
        font-size: 20px
      }
    }
    .searchResult{
      z-index: 99;
      float: right;
      width: 500px;
      position: absolute;
      top:50px;
      /*display: none;*/
      p, div{
        width: 391px;
        background-color: #fff;
        height: 50px;
        line-height: 50px;
        float: right;
        padding: 10px;
      }
      p{
        cursor: pointer;
        display: flex;
        justify-content: space-between;
      }
      p:last-child, div{
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
      }
      p:hover{
        color: #859bf6;
      }
    }
  }
  /*课程表部分*/
  .courseContent{
    width: 80%;
    margin: 0 auto 10px auto;
    border-right: 2px solid rgba(192, 224, 255, .6);
    border-bottom: 2px solid rgba(192, 224, 255, .6);
    color: #fff;
    .week{
      width: calc(100% - 50px);
      display: flex;
      justify-content: space-around;
      background-color: rgba(192, 224, 255, .6);
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      padding-left: 50px;
      @media(max-width: 1000px) {padding-left: 40px;height: 40px;line-height: 40px;width: calc(100% - 40px)}
      @media(max-width: 800px) {font-size: 1rem}
      @media(max-width: 500px) {padding-left: 30px;height: 30px;line-height: 30px;width: calc(100% - 30px)}
    }
    .courseMain{
      display: flex;
      /*时间*/
      .time{
        width: 50px;
        background-color: rgba(192, 224, 255, .6);
        @media(max-width: 1000px) {width: 40px}
        @media(max-width: 500px) {width: 30px}
      }
      /*课*/
      .allClass{
        width: calc(100% - 50px);
        @media(max-width: 1000px) {width: calc(100% - 40px)}
        @media(max-width: 500px) {width: calc(100% - 30px)}
        position: relative;
        .lesson{
          opacity: .8;
          border-radius: 6%;
          font-size: 20px;
          margin: 2px 0;
          position: absolute;
          cursor: pointer;
          @media(max-width: 1000px) {font-size: 1rem}
          @media(max-width: 500px) {font-size: 0.6rem}
          .lessText{margin: 2%}
        }
      }
    }
  }
  @media (max-width: 1000px) {
    .scheduleMain{padding-top: 45px;height: calc(100% - 45px);}
    .searchContent{
      height:45px;
      margin: 15px;
      width: 300px;
      form{
        height: 40px;
        input{height: 40px;width: 200px}
        i{top:10px}
      }
      .searchResult{
        width: 300px;
        top:40px;
        p, div{
          width: 241px;
          background-color: #fff;
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    /*.scheduleMain{padding-top: 30px;height: calc(100% - 30px);}*/
    .searchContent{
      height:30px;
      margin: 10px;
      width: 170px;
      form{
        height: 25px;
        input{height: 25px;width: 100px}
        i{top:5px}
      }
      .searchResult{
        width: 170px;
        top:25px;
        p, div{
          width: 141px;
          background-color: #fff;
          height: 25px;
          line-height: 25px;
          font-size: 0.7rem;
        }
      }
    }
  }
</style>
