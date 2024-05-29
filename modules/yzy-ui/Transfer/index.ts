//注册单独组件
import Transfer from './Transfer';

// const components={
//     Transfer,

// }
export default{
    install (app){
        app.component('Transfer',Transfer)
    }
}