<template>
    <div class="container">
        <el-row>
            <el-col :span="16" :offset="4">
                <el-tabs type="border-card">
                    <el-tab-pane label="装备普造">
                        <equip></equip>
                    </el-tab-pane>
                    <el-tab-pane label="装备重造">
                        <fairy></fairy>
                    </el-tab-pane>
                </el-tabs>

            </el-col>
        </el-row>

    </div>
</template>

<script>
    import equip from '@/views/Equip.vue'
    import fairy from '@/views/Fairy.vue'

    export default {
        name: 'index',
        components: {
            equip,
            fairy
        }
    }
</script>

<style scoped>
.container{
    margin-top: 20px;
}
</style>