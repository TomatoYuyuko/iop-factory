<template>
    <div class="container">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">装备建造</mt-tab-item>
            <mt-tab-item id="2">妖精建造</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <m-equip></m-equip>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <p style="margin: 10px auto;width: 50px">开发中</p>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import 'mint-ui';
    import MEquip from "./M_Equip";
    export default {
        name: "M_Index",
        components: {MEquip},
        data() {
            return {
                selected: '1'
            }
        }
    }
</script>

<style scoped>

</style>