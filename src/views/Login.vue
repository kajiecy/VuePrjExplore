<template>
  <div class="loginBackground">
    <Row>
      <i-col :span="5" :offset="16">
        <Card>
          <p slot="title"><i class="icon-denglu ft18"></i> 欢迎登录</p>
          <div>
            <Form ref="formInline" :model="formData" :rules="ruleData">
              <FormItem prop="name">
                <i-input type="text" v-model="formData.name" placeholder="请输入用户名">
                  <i class="icon-yonghu" slot="prepend"></i>
                </i-input>
              </FormItem>
              <FormItem prop="pwd">
                <i-input type="password" v-model="formData.pwd" placeholder="请输入密码">
                  <i class="icon-mima" slot="prepend"></i>
                </i-input>
              </FormItem>
              <FormItem style="margin-bottom: 10px">
                <Button class="wd100" type="primary" @click="login()">登录</Button>
              </FormItem>
            </Form>
          </div>
          <div class="login-tip">
            输入任意用户名和密码即可
          </div>
        </Card>
      </i-col>
    </Row>

  </div>
</template>

<script>
  import Cookies from 'js-cookie'
export default {
  data (){
    return {
      formData:{
        name:'',
        pwd:''
      },
      ruleData:{
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
//        { type: 'string', min: 6, message: '密码不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  created (){

  },
  mounted(){

  },
  methods:{
    login(){
      this.$refs.formInline.validate((valid)=>{
        if (valid) {
          this.$Message.success('登录成功!');
          //向cookies 中存 Token 现在没有 存name
          Cookies.set('Token',this.formData.name);
          //将用户信息存入 state
          this.$store.commit('upUserInfo',this.formData);
          this.$router.push({name:'home'})
        } else {

        }
      })
    }
  },
  computed:{

  },
  components:{

  }
}
</script>

<style scoped>
  .loginBackground{
    height: 100vh;
    background: url(http://qiniu.kajie88.com/013c29fbe1de128e35101960fea6594e.jpg) no-repeat;
    background-size: 100vw 100vh;
  }

  .ivu-row{
    top:30%;
  }
  .login-tip{
    font-size: 10px;
    text-align: center;
    color: #c3c3c3;
  }
  .form-con{
    padding: 10px 0 0;
  }
</style>
