<template>

  <Layout class="home">


    <Header>
      <my-head></my-head>
    </Header>


    <Layout>

      <Sider style="background-color: #ffffff;"  v-model="isCollapsed">
        <Menu :active-name="menuValue" @on-select="changeMenu" theme="light" width="auto" :open-names="[]" :accordion="true">
          <MenuItem name="chartscabinet">
            <Icon type="ios-navigate"></Icon>
            <span>test1</span>
          </MenuItem>
          <MenuItem name="test2">
            <Icon type="search"></Icon>
            <span>test2</span>
          </MenuItem>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              test3
            </template>
            <MenuItem name="test3-1">test3-1</MenuItem>
            <MenuItem name="test3-2">test3-2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>

      <Content>
        <router-view></router-view>
      </Content>
    </Layout>
  </Layout>


  <!--&lt;!&ndash;<Breadcrumb :style="{margin: '24px 0'}">&ndash;&gt;-->
  <!--&lt;!&ndash;<BreadcrumbItem>Home</BreadcrumbItem>&ndash;&gt;-->
  <!--&lt;!&ndash;<BreadcrumbItem>Components</BreadcrumbItem>&ndash;&gt;-->
  <!--&lt;!&ndash;<BreadcrumbItem>Layout</BreadcrumbItem>&ndash;&gt;-->
  <!--&lt;!&ndash;</Breadcrumb>&ndash;&gt;-->
  <!--<div style="width: 500px;height: 500px;background-color: #EC3329">-->
  <!--<router-view></router-view>111-->
  <!--</div>-->


</template>
<script>
  import Cookies from 'js-cookie'
  import myHead from './Head.vue'


  export default {
    name: '',
    data() {
      return {
        menuValue:'',
        isCollapsed: false,
      }
    },
    created() {

    },
    mounted() {
      this.init();
    },
    methods: {
      init() {

      },
      changeMenu(name){
        console.log("name",name);
        this.$router.push({name:name})
      },
    },
    computed: {
      menuTheme() {
        return this.$store.state.app.menuTheme;
      },
      openedSubmenuArr() {
        return this.$store.state.app.openedSubmenuArr;
      },
      menuList() {
        return this.$store.state.app.menuList;
      },
      getUserInfo() {
        return this.$store.state.user.userInfo;
      }
    },
    components: {
      myHead,
    }
  }
</script>
<style scoped>
  .home {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .ivu-layout-header{
    vertical-align: top;
    line-height: 65px;
  }
</style>
