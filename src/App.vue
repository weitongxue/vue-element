<template>
  <div id="app">
    <el-container>
      <el-aside style="width:auto!important;">
        <NavMenu/>
      </el-aside>
      <el-container>
        <el-header style="height:140px;padding:0px;">
            <Breadcrumb/>
        </el-header>
        <el-main style="height:1000px;overflow-y:auto;">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    
   
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
import Breadcrumb from './components/Breadcrumb'
export default {
  name: 'App',
  data(){
     return {
      }
  },
  methods:{
  },
  components:{
        NavMenu,
        Breadcrumb,
    },
}
</script>
