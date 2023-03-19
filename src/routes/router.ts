import homePageVue from '../views/HomePageView.vue'
import * as vR from 'vue-router'



const _routes: Array<vR.RouteRecordRaw> = [
    {
        path: "/",
        component: homePageVue,
        name: 'home'
    },
   
    {
        path: "/login",
        component: () => import("../views/LoginView.vue"),
        name: 'login'
    },
    {
        path: "/products",
        component: () => import("../views/ProdcutPageView.vue"),
        name: 'product'
       
    },
    {
        path: "/signin",
        component: () => import("../views/SigninView.vue"),
        name: 'signin'
        
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("../views/NotFoundPageView.vue"),
        name: 'not-found'
        
    }

];

const router = vR.createRouter({
    history: vR.createWebHistory(),
    routes: _routes
})

export default router;