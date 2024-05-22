<template>
    <div>
        <el-card class="bax-card">
            <el-button type="primary" size="default" icon="Plus" @click="addTrademark">添加品牌</el-button>
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
            <el-pagination @size-change="sizeChanage" @current-change="getHasTrademark" :page-count="9"
                v-model:current-page="currentPage" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]"
                :background="true" layout="prev, pager, next, jumper,->,sizes,total" :total="total">
            </el-pagination>
        </el-card>
        <el-dialog v-model="dialogVisible" title="添加品牌">
            <el-form>
                <el-form-item label="品牌名称">
                    <el-input placeholder="请输入品牌名称"></el-input>
                </el-form-item>
                <el-form-item label="品牌图标">
                    <el-upload class="avatar-uploader" action="/api/admin/product/fileUpload" :show-file-list="false"
                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="trademarkParams.loginUrl" :src="trademarkParams.loginUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>

                </el-form-item>
            </el-form>
            <template #footer>
                <el-button type="primary">取消</el-button>
                <el-button type="primary">确定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { UploadProps } from 'element-plus';
import { requestHasTrademark } from '@/api/product/trademark';
import { Records, TradeMark } from '@/api/product/trademark/type';
import { onMounted, reactive, ref } from 'vue';
//当前页码
let currentPage = ref<number>(1);
//每一页多少条
let limit = ref<number>(3);

let total = ref<number>(0);

let dialogVisible = ref<boolean>(false)

let trademarkArray = ref<Records>([]);

let trademarkParams = reactive<TradeMark>({
    tmName: '',
    loginUrl: ''
})

const getHasTrademark = async (pager = 1) => {
    currentPage.value = pager
    let result = await requestHasTrademark(currentPage.value, limit.value);
    if (result.code == 200) {
        total.value = result.data.total
        trademarkArray.value = result.data.records;
    }
}
//设置每一个展示数据条数
const sizeChanage = () => {
    getHasTrademark()
}

const addTrademark = () => {
    dialogVisible.value = !dialogVisible.value
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type == 'image/jpeg' || rawFile.type == 'image/png') {
        if (rawFile.size / 1024 / 1024 > 2) {

        }
        return true
    } else {

        return false
    }
    return true
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {

}

onMounted(() => {
    getHasTrademark();
});
</script>

<style scoped>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>