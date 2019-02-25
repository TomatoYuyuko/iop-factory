<template>
    <div class="equip">
        <div style="margin-top: 4px;">
            <mt-field label="Manpower:" placeholder="请输入人力" type="number"
                      v-model="resource.manpower"></mt-field>
            <mt-field label="Ammo:" placeholder="请输入弹药" type="number"
                      v-model="resource.ammo"></mt-field>
            <mt-field label="Ration:" placeholder="请输入口粮" type="number"
                      v-model="resource.ration"></mt-field>
            <mt-field label="Parts:" placeholder="请输入零件" type="number"
                      v-model="resource.parts"></mt-field>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'm-equip',
        data() {
            return {
                resource: {
                    manpower: 10,
                    ammo: 10,
                    ration: 10,
                    parts: 10,
                },
            }
        },
        components: {}
    }
</script>
