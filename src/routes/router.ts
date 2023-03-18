import * as vR from 'vue-router'
import homePageVue from '@/@Pages/homePage.vue';
import notFoundPageVue from '@/@Pages/notFoundPage.vue';
import LoginVue from '@/@Pages/Login.vue';
import SigninVue from '@/@Pages/Signin.vue';

const _routes: Array<vR.RouteRecordRaw> = [
    {
        path: "/",
        component: homePageVue,
        name: "home"
    },
    {
        path: "/products",
        component: () =>import('@/@Pages/prodcutPage.vue'),
        name: "home.products"
    },
    {
        path: "/*",
        component: notFoundPageVue,
        name: "home.missing"
    },
    {
        path: "/login",
        component: LoginVue,
        name: "home.login"
    },
    {
        path: "/signin",
        component: SigninVue,
        name: "home.signin"
    }

];

const router = vR.createRouter({
    history: vR.createWebHistory(),
    routes: _routes
})

export default router;