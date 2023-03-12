//该页面用于创建整个应用的路由管理者router
import VueRouter from "vue-router";
//引入对应的路由组件
const routes = [
    {
        path:'/',
        name:'Scan',
        component:()=>import('../views/Scan'),

    },
    {
        path:'/admin',
        name:'Admin',
        component:()=>import('../views/Admin'),
        // redirect:'/home',
        // children:[
        //     {},
        //     {}
        // ]
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('../views/Login')
    },
];
const router = new VueRouter({
    mode:'history',
    base:process.env.BABEL_URL,
    routes
});
export default router
