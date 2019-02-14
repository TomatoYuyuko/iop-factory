<template>
    <div class="container">
        <el-tabs type="border-card">
            <el-tab-pane label="装备普造">
                <equip></equip>
            </el-tab-pane>
            <el-tab-pane label="装备重造">
                <fairy></fairy>
            </el-tab-pane>
        </el-tabs>

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
    .container {
        position: relative;
        margin: 20px 500px;
    }
</style>