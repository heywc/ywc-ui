<template>
    <div class='inp'>
        <input type="text" class="yui-input">
    </div>
</template>

<script>
export default {
    name:'YuiInput',
    components: {},
    props: {},
    data () {
        return {
        
        }
    },
    created() {
    
    },
    mounted() {
    
    },
    methods: { 
    
    }
}
</script>

<style lang='scss' scoped>
    .inp{
        width: 180px;
        height: 38px;
        padding: 0;
        .yui-input{
            height: 100%;
            width: 100%;
            border: 1px solid #cccccc;
            box-sizing: border-box;
            padding: 0 10px;
            border-radius: 6px;
        }
    }
</style>