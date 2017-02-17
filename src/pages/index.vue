<style scoped></style>
<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="jf-header jf-header-block">Vue2.0 ElementUI 后台管理系统（Beta版）</div>
            </el-col>
        </el-row>
        <el-row class="jf-layout">
            <el-col :span="3" class="jf-layout">
                <el-menu theme="dark" default-active="2" class="el-menu-vertical-demo jf-layout">
                    <template v-for="(menu,index) in data">
                        <el-submenu :index="index+''">
                            <template slot="title"><i :class="menu.icon"></i>{{menu.label}}</template>
                            <el-menu-item v-for="(child,inx) in menu.children" :index="index+''+inx">
                                <div @click="addMenu(child)">{{child.label}}</div>
                            </el-menu-item>
                        </el-submenu>
                    </template>
                </el-menu>
            </el-col>
            <el-col :span="21" class="jf-content">
                <el-tabs class="jf-tabs" :active-name="activeMenu" @tab-click="tabClick"  @tab-remove="removeMenu">
                    <el-tab-pane class="jf-content" :label="menu.label" :router="menu.router" :key="menu.code" :closable="menu.closable" v-for="menu in menus" :name="menu.code">

                        <keep-alive>
                            <router-view :name="menu.code" style="height: 100%;border: 0;background-color:#f1f2f7">
                            </router-view>
                        </keep-alive>
                    </el-tab-pane>
                </el-tabs>

            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                activeMenu: "wecome",
                data: [{
                    label: '用户管理',
                    icon: 'el-icon-view',
                    children: [{
                        label: '用户查询',
                        code: "userSearch",
                        router: '/user/search'
                    }]
                }, {
                    label: '权限管理',
                    icon: 'el-icon-star-off',
                    children: [{
                        label: '权限查询',
                        code: "powerSearch",
                        router: '/power/search'
                    }, {
                        label: '角色管理',
                        code: "roleSearch",
                        router: '/role/search'
                    }]
                },
                    {
                        label: '系统管理',
                        icon: 'el-icon-setting',
                        children: [{
                            label: '系统配置',
                            code: "systemManager",
                            router: '/system/manager'
                        }, {
                            label: '系统维护',
                            code: "systemWX",
                            router: '/system/wx'
                        }]
                    }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                menus: [{
                    code: "wecome",
                    router: '/wecome',
                    label: "欢迎"
                }]
            }
        },
        components: {},
        methods: {
            addMenu(data){
                if (this.menus.some(menu=>menu.label == data.label)) {
                    this.activeMenu = data.code
                    this.$router.replace(data.router)
                    return
                }

                if (!data.children) {
                    this.menus.push({
                        code: data.code,
                        router: data.router,
                        label: data.label,
                        closable: true
                    })
                    this.activeMenu = data.code
                    this.$router.replace(data.router)
                }
            },
            removeMenu(tab){
                let selectIndex = 0
                for (let i = 0; i < this.menus.length; i++) {
                    if (this.menus[i].code == tab.name) {
                        this.menus.splice(i, 1)
                        selectIndex = i - 1
                        break
                    }
                }
                if (tab.name == this.activeMenu) {
                    if (this.menus[selectIndex]) {
                        this.$router.replace(this.menus[selectIndex].router)
                        this.$nextTick(()=> {
                            this.activeMenu = this.menus[selectIndex].code
                        })
                    }
                }
            },
            tabClick(tab){
                this.activeMenu = tab.name
                this.$router.replace(tab.$el.getAttribute("router"))

            }

        },
        mounted: function () {

        },
        filters: {}
    }
</script>