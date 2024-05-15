<template>
    <div>
        <el-card class="bax-card">
            <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
            <el-table style="margin: 10px 0px" border :data="trademarkArray">
                <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
                <el-table-column label="品牌名称" prop="tmName"></el-table-column>
                <el-table-column label="品牌LOGO">
                    <template #="{ row, $index }">
                        <img :src="row.logoUrl" style="width: 60px; height: 60px;">
                    </template>
                </el-table-column>
                <el-table-column label="品牌操作">
                    <template #="{ row, $index }">
                        <el-button type="primary" size="small" icon="Edit"></el-button>
                        <el-button type="primary" size="small" icon="Delete"></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { requestHasTrademark } from '@/api/product/trademark';
import { Records } from '@/api/product/trademark/type';
import { onMounted, ref } from 'vue';
//当前页码
let currentPage = ref<number>(1);
//每一页多少条
let limit = ref<number>(3);

let trademarkArray = ref<Records>([]);

const getHasTrademark = async () => {
    let result = await requestHasTrademark(currentPage.value, limit.value);
    if (result.code == 200) {
        trademarkArray.value = result.data.records;
    }
}
onMounted(() => {
    getHasTrademark();
});
</script>

<style scoped></style>