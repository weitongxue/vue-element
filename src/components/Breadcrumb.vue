<template>
    <div id="Breadcrumb">
        <el-row class="block-col-2 user-icon">
            <el-col :span="12">
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        <img src="./image/user.png" alt="">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="HomePage">首页</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="Breadcrumb-content">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name:'Breadcrumb',
    data(){
        return{

        }
    },
    methods:{
        handleCommand(command){
            if (command === 'HomePage') {
                console.log('aaa')
                this.$router.push("/")
            }
        }
    },
    computed:{
        breadcrumbList(){
            return this.$store.state.breadcrumbList
        }
    }
}
</script>


<style lang="less" scoped>
    #Breadcrumb{
        z-index: 1000;
        .user-icon{
            height: 80px;
            padding:15px 50px 15px 0;
            background: white;
            .el-col-12{
                width: 100%;
                .el-dropdown{
                    float:right;
                }
            }
            img{
                width: 40px;
            }
        }
        .Breadcrumb-content{
            padding: 0 20px;
            background: #F0F0F0;
            height: 60px;
            line-height: 60px;
        }
    }
</style>

