<style scoped>
    .dg__warp {
        background-color: #FFFFFF;
        padding-bottom: 8px;
    }

    .jf-pagintion {
        background: #FFFFFF;
        margin-top: 3px;
    }
</style>
<template>
    <div class="dg__warp">
        <el-table :data="vo.data" border style="width: 100%;" :height="vo.height" v-loading.fullscreen.lock="vo.loading"
                  element-loading-text="拼命加载中">
            <el-table-column prop="createTimeCN" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="addess" label="地址"></el-table-column>
        </el-table>
        <el-pagination class="jf-pagintion"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="vo.currentPage"
                       :page-sizes="[10, 20, 30,50,100,200]"
                       :page-size="vo.pageSize"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="vo.total">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                vo: {
                    loading: false,
                    currentPage: 1,
                    pageSize: 20,
                    total: 0,
                    data: []
                }
            }
        },
        props: {
            params: {
                type: Object
            }
        },
        computed: {},
        methods: {
            handleSizeChange(val) {
                this.vo.pageSize = val
                this.loadData()
            },
            handleCurrentChange(val) {
                this.vo.currentPage = val;
                this.loadData()
            },
            loadData(){
                let params = {"page": this.vo.currentPage, "rows": this.vo.pageSize}
                this.vo.loading = true;
                this.$http.post("/manage/order/list", params).then(res=> {
                    this.vo.loading = false
                    let data = JSON.parse(res.request.response)
                    this.vo.data = data.rows
                    this.vo.total=data.total
                }, err=> {
                    this.vo.loading = false
                })
            }
        },
        mounted: function () {
            let top = document.documentElement.scrollTop
            let h = this.$el.offsetTop - top
            this.vo.height = window.document.documentElement.clientHeight - h - 150
            this.loadData()

        },
        filters: {}
    }

</script>