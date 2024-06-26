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
                        <el-button type="primary" size="small" icon="Edit" @click="updateTrademark(row)"></el-button>
                        <el-popconfirm :title="`您确定要删除${row.tmName}?`" icon="Delete">
                            <template #reference>
                                <el-button type="primary" size="small" icon="Delete"></el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @size-change="sizeChanage" @current-change="getHasTrademark" :page-count="9"
                v-model:current-page="currentPage" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]"
                :background="true" layout="prev, pager, next, jumper,->,sizes,total" :total="total">
            </el-pagination>
        </el-card>
        <el-dialog v-model="dialogVisible" title="添加品牌">
            <el-form :model="trademarkParams" :rules="rules" ref="formRef">
                <el-form-item label="品牌名称" prop="tmName">
                    <el-input placeholder="请输入品牌名称" v-model="trademarkParams.tmName"></el-input>
                </el-form-item>
                <el-form-item label="品牌图标" prop="logoUrl">
                    <el-upload class="avatar-uploader" action="/api/admin/product/fileUpload" :show-file-list="false"
                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button type="primary" @click="cancel">取消</el-button>
                <el-button type="primary" @click="confirm">确定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { UploadProps, ElMessage } from 'element-plus';
import { requestAddOrUpdateTrademark, requestHasTrademark } from '@/api/product/trademark';
import { Records, TradeMark } from '@/api/product/trademark/type';
import { nextTick, onMounted, reactive, ref } from 'vue';
//当前页码
let currentPage = ref<number>(1);
//每一页多少条
let limit = ref<number>(3);

let total = ref<number>(0);

let dialogVisible = ref<boolean>(false)

let trademarkArray = ref<Records>([]);

let trademarkParams = reactive<TradeMark>({
    tmName: '',
    logoUrl: ''
})

let formRef = ref();

const cancel = () => {
    dialogVisible.value = false;
}

const updateTrademark = (row: TradeMark) => {
    dialogVisible.value = true
}

const confirm = async () => {
    await formRef.value.validate();
    let result: any = await requestAddOrUpdateTrademark(trademarkParams);
    if (result.code == 200) {
        dialogVisible.value = false;
        getHasTrademark(trademarkParams.id ? currentPage.value : 1)
    } else {
        ElMessage({
            type: 'error',
            message: trademarkParams.id ? '修改失败' : '添加成功'
        })
        dialogVisible.value = false;
    }
}

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
    trademarkParams.id = 0
    trademarkParams.logoUrl = ''
    trademarkParams.tmName = ''
    nextTick(() => {
        formRef.value.clearValidate('tmName')
        formRef.value.clearValidate('logoUrl')
    })
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type == 'image/jpeg' || rawFile.type == 'image/png') {
        if (rawFile.size / 1024 / 1024 < 2) {
            return true
        } else {
            ElMessage({
                type: 'error',
                message: '上传文件大小小于4M'
            })
            return false
        }
    } else {
        ElMessage({
            type: 'error',
            message: '上传文件格式务必PNG|JPG'
        })
        return false
    }

}

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
    //response:即为当前这次上传图片post请求服务器返回的数据
    //收集上传图片的地址,添加一个新的品牌的时候带给服务器
    trademarkParams.logoUrl = response.data;
    //图片上传成功,清除掉对应图片校验结果
    formRef.value.clearValidate('logoUrl');
}

onMounted(() => {
    getHasTrademark();
});

const validatorTmName = (rule: any, value: any, callBack: any) => {
    if (value.trim().length >= 2) {
        callBack()
    } else {
        callBack(new Error('品牌名称位数大于等于两位'))
    }
}

const validatorLogoUrl = (rule: any, value: any, callBack: any) => {
    if (value) {
        callBack()
    } else {
        callBack(new Error('请添加品牌LOGO'))
    }
}


const rules = {
    tmName: [
        { trigger: 'blur', validator: validatorTmName }
    ],
    logoUrl: [
        { required: true, validator: validatorLogoUrl }
    ]
}


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