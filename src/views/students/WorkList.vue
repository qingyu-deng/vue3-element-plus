<template>
    <div>
        <el-card>
            <el-table v-loading="Loading" :data="tableData" border stripe style="width: 100%;height:100%;">
                <el-table-column label="作业名称" align="center">
                    <template #default="scope">
                        <span>{{ scope.row.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="完成情况" align="center">
                    <template #default="scope">
                        <span>{{ scope.row.completed === true ? '已完成' : '未完成' }}</span>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <my-pagination :current-page="form.page" :page-size="form.size" :total="total" @getpageSize="handleSizeChange"
                @getcurrentPage="handleCurrentChange" />
        </el-card>
    </div>
</template>

<script>
import { worksList } from '@/api/work.js';
import MyPagination from '@/components/pagination.vue'
export default {
    components: {
        MyPagination,
    },
    data() {
        return {
            tableData: [],
            total: 0,
            Loading: true,
            form: {
                page: 1,
                size: 10
            }
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.Loading = true;
            worksList(this.form).then(res => {
                if (res.data.status === 200) {
                    this.Loading = false;
                    this.tableData = res.data.data
                    this.total = res.data.total
                }
            })
        },
        handleSizeChange(val) {
            this.form.size = val
            this.form.page = 1
            this.getList(this.form)
        },
        handleCurrentChange(val) {
            this.form.page = val
            this.getList(this.form)
        },
    }
}
</script>
<style lang="less" scoped></style>