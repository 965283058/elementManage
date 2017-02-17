<style scoped>
    .box {
        height: 100%;
        background: #1f2d3d;
    }

    .warp {
        box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        background-color: #F9FAFC;
        margin: 180px auto;
        border: 2px solid #8492A6;
        width: 350px;
        height: 400px;
        padding: 35px 35px 15px 35px;
        overflow: hidden;
    }

    .warp .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

    .remember {
        margin: 0px 0px 35px 0px;
    }

    .errorStyle {
        width: 320px;
        height: 34px;
        margin-top: 10px;
        margin-left: 40px;
        display: none;
        font-size: 14px;
        color: #e0b96e;
    }
</style>
<template>
    <div class="box">
        <el-form :model="po" label-position="left" label-width="0px" class="warp">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="po">
                <el-input type="text" v-model="po.username" auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="po.pwd" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="login()">登录
                </el-button>
            </el-form-item>
            <router-link :to="'/forget'">忘记密码</router-link>
        </el-form>
    </div>

</template>
<script>
    import {login} from 'apis/account'
    export default {
        data: function () {
            return {
                po: {
                    username: '',
                    pwd: ''
                },
                show: true
            }
        },
        components: {},
        methods: {
            login(){
                login(this.po).then(data=> {
                    if (data && data.user) {
                        window.localStorage.setItem("user", JSON.stringify(data.user))
                        this.$router.replace("/")
                    }else{
                        alert(data)
                    }
                }, err=> {
                    this.$alert(err.message)
                })
            }
        },
        mounted: function () {

        },
        filters: {}
    }
</script>