<template>
    <div>
        <el-form ref="form" :model="po" label-width="80px">
            <el-row :gutter="10">
                <el-col :span="6">
                    <el-form-item label="用户名称">
                        <el-input v-model="po.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="活动时间">
                        <el-col :span="10">
                            <el-date-picker type="date" placeholder="选择开始日期" v-model="po.date1"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="4">————</el-col>
                        <el-col :span="10">
                            <el-date-picker type="date" placeholder="选择结束日期" v-model="po.date2"></el-date-picker>
                        </el-col>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="6">
                    <el-form-item label="是否冻结">
                        <el-radio-group v-model="po.resource">
                            <el-radio label="冻结"></el-radio>
                            <el-radio label="未冻结"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item>
                        <el-button type="primary" @click="">查询</el-button>
                        <el-button>重置</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <datagrid></datagrid>
    </div>
</template>

<script>
    import datagrid from 'components/datagrid'
    export default {
        data() {
            return {
                po: {
                    name: "",
                    date1: "",
                    date2: "",
                    resource: ""

                },
                vo: {

                }

            }
        },
        components: {datagrid},
    }
</script>