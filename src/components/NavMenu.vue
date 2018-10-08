<template>
  <div class="NavMenu" v-cloak>
    <el-menu   background-color="#334157" text-color="#BFCBD9" router :default-active="$route.path"  active-text-color="#ffd04b" class="el-menu-vertical-demo" @select="handleMenuSelect"  :collapse="isCollapse">
      <ul style="height:80px;line-height: 80px;"> 
        <li @click="openMenu" v-if="isCollapse" style="padding:0 14px;">
          <img  src="./image/menu.png" alt="" id="menu-icon">
        </li>
        <li @click="closeMenu" v-if="!isCollapse" style="padding:0 14px;">
          <img  src="./image/timg.jpg" alt="" id="logo-icon">
        </li>
      </ul>
      <el-submenu v-for="(item,index) in menuList" :key="index" :index="item.mentname">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.mentname}}</span>
        </template>
        <el-menu-item v-for="(submenu,index) in item.submenu" :key="index" :index="submenu.url">{{submenu.subName}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      menuList:[{mentname:'系统管理',submenu:[{subName:'用户管理',url:"/"},{subName:'组织管理',url:"/organization"},{subName:'角色管理',url:"/role"},{subName:'设备唤醒',url:"/equipment"},{subName:'网关管理',url:"/gateway"},{subName:'系统日志',url:"/system"}]},
                {mentname:'基站管理',submenu:[{subName:'用户管理1'},{subName:'组织管理1'}]},
                {mentname:'运维管理',submenu:[{subName:'用户管理2'},{subName:'组织管理2'}]},
                {mentname:'车辆管理',submenu:[{subName:'用户管理3'},{subName:'组织管理3'}]},
                {mentname:'发电机管理',submenu:[{subName:'用户管理4'},{subName:'组织管理4'}]},
                {mentname:'设备管理',submenu:[{subName:'用户管理5'},{subName:'组织管理5'}]}
      ],
      isCollapse: false,
    };
  },
  methods: {
    handleMenuSelect(index,indexPath){
      var arr = []
      var menuList = this.menuList
      arr= indexPath
      for(var i = 0 ; i < menuList.length; i++){
        if(menuList[i].mentname == arr[0]){
          var submenu = menuList[i].submenu
          for(var j = 0 ; j < submenu.length;j++){
            if(submenu[j].url == arr[1] || submenu[j].subName == arr[1]){
              arr[1] = submenu[j].subName
              this.$store.commit("BREADCRUMBLIST",arr)
            }
          }
        }
      }
    },
    openMenu(){
      this.isCollapse = false
    },
    closeMenu(){
      this.isCollapse = true
    }
    
  }
}
</script>

<style lang="less" scoped>
 .NavMenu{
   height: 100%;
   z-index: 1000;
 }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
 .el-menu {
   height: 100%;
   border:0;
 }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
  }
  #menu-icon{
    width: 35px;
  }
  #logo-icon{
    width:100%;
    height: 80px;
  }
  .el-radio-button:first-child:last-child .el-radio-button__inner {
    background: red;
    border:0;
  }
  
</style>
