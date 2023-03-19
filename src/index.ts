import homePageVue from "@/views/HomePageView.vue";
import AppVue from "./App.vue";

export default {
    install: (app: { component: (arg0: any) => void; }, options: any) =>{
        app.component(AppVue)
    }
}