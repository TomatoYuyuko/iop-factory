<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    import router from './router'
    export default {
        name: 'app',
        router,
        components: {

        },
        data: function () {
            return {}
        },
        methods: {},
        mounted: function () {

        }

    }
</script>
<style>

</style>
