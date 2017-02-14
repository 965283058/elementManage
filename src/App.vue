<style>
    html {
        height: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        margin: 0;
        height: 100%;
        font-size: 14px;
        overflow: hidden;
        font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
        display: block;
    }

    audio:not([controls]) {
        display: none;
        height: 0;
    }

    progress {
        vertical-align: baseline;
    }

    template, [hidden] {
        display: none;
    }

    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
        text-decoration: none;
    }

    a:active, a:hover {
        outline-width: 0;
    }

    abbr[title] {
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    b, strong {
        font-weight: bolder;
    }

    dfn {
        font-style: italic;
    }

    small {
        font-size: 80%;
    }

    sub, sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sup {
        top: -0.5em;
    }

    sub {
        bottom: -0.25em;
    }

    img {
        border-style: none;
    }

    svg:not(:root) {
        overflow: hidden;
    }

    code, kbd, pre, samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    pre {
        overflow: auto;
        white-space: pre;
        white-space: pre-wrap;
        word-wrap: break-word;
    }

    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        margin: 0;
        vertical-align: middle;
        outline: none;
    }

    button, input,
    input {
        overflow: visible;
    }

    button, select {
        text-transform: none;
    }

    button, html [type="button"],
    [type="reset"], [type="submit"] {
        -webkit-appearance: button;
    }

    [disabled] {
        cursor: default;
    }

    [type="checkbox"], [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }

    [type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    [type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    textarea {
        overflow: auto;
        resize: none;
        vertical-align: top;
    }

    optgroup {
        font-weight: bold;
    }

    input, select, textarea {
        outline: 0;
    }

    textarea, input {
        -webkit-user-modify: read-write-plaintext-only;
    }

    input::-ms-clear, input::-ms-reveal {
        display: none;
    }

    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
        color: inherit;
        opacity: 0.54;
    }

    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
        line-height: 1.5;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    td, th {
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6, p, figure, form, blockquote {
        margin: 0;
    }

    ul, ol, li, dl, dd {
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style: none outside none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-weight: normal;
        line-height: 1.5;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background-color: #F3F3F3;
    }

    input,
    select {
        padding: 0;
        border: 0 none;
        -webkit-appearance: none;
        background-color: transparent;
    }

    .bg--white {
        background-color: #FFF;
    }

    .text-overflow {
        display: -webkit-box;
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .filter {
        filter: blur(15px);
        transition: filter .3s;
    }
    .jf-layout {
        height: 100%;
    }

    .jf-header {
        height: 60px;
        color: #FFFFFF;
        font-size: 35px;
        line-height: 60px;
        padding-left: 40px;
        background: linear-gradient(to bottom, #000, #1f2d3d);
    }

    .jf-content {
        height: calc(100% - 80px);
        background-color: #f1f2f7;
    }

    .jf-tabs {
        margin: 0;
        margin-top: 3px;
        padding: 0 3px;
        height: 100%;

    }

    .jf-layout .el-tabs__header {
        margin: 0;
        background-color: #fff;
    }

    .jf-layout .el-tab-pane {
        padding-top: 5px;
        height: 100%;
    }
    .jf-tabs-label{
        color: #000000;
    }


</style>

<template>
    <div class="jf-layout">
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
                <el-tabs class="jf-tabs" :active-name="activeMenu" @tab-click="tabClick"
                         @tab-remove="removeMenu">
                    <el-tab-pane class="jf-content" :key="menu.code" :closable="menu.closable" v-for="menu in menus"
                                 :name="menu.code">
                        <router-link slot="label" class="jf-tabs-label" :to="menu.router">{{menu.label}}</router-link>
                        <keep-alive>
                            <router-view :name="menu.code" style="height: 100%;border: 0;background-color:#f1f2f7">
                            </router-view>
                        </keep-alive>
                    </el-tab-pane>
                </el-tabs>

            </el-col>
        </el-row>
        <router-view>
        </router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeMenu: "index",
                data: [{
                    label: '用户管理',
                    icon:'el-icon-view',
                    children: [{
                        label: '用户查询',
                        code: "userSearch",
                        router: '/user/search'
                    }]
                }, {
                    label: '权限管理',
                    icon:'el-icon-star-off',
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
                        icon:'el-icon-setting',
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
                    code: "index",
                    router: '/',
                    label: "欢迎"
                }]
            }
        },
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
            }

        },
        mounted()
        {

        }
    }

</script>
