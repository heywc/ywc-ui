import Button from './btn.vue'

const yuiButton = {    
    install(Vue) {
        Vue.component(Button.name, Button) 
    }
}

export default yuiButton