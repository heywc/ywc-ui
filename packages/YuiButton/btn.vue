<template>
    <div class='yuiBtn' :style="computedStyle" @click="sayHi(hi)">
        {{btnName}}
    </div>
</template>

<script>
export default {
    name:'YuiButton',
    data () {
        return {
        }
    },
    props:{
        btnName:{
            type: String,
            default: 'YuiBtn'
        },
        btnWidth:{
            type: Number,
            default: 68
        },
        btnHeight:{
            type: Number,
            default: 30,
        },
        hi:{
            type: String,
            default: '余大帅'
        }
    },
    computed:{
        computedStyle(){
            return { 
                height: this.btnHeight +'px', 
                lineHeight:this.btnHeight +'px', 
                width: this.btnWidth + 'px'
            }
        }
    },
    methods:{
        sayHi(name) {
            alert(`hi,${name}~`)
        }
    }
}
</script>

<style lang='scss' scoped>
    .yuiBtn{
        text-align: center;
        border: 1px solid #000000;
        border-radius: 4px;
    }
</style>