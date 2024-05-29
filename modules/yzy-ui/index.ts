//注册所有的组件
import Transfer from './Transfer/Transfer.vue';

const components={
    Transfer

}
export default{
    install (app){
        for(let comp in components){
            app.component(comp,components[comp])
        }
        
    }
}