import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";


const routes: RouteRecordRaw[] = [

    
    // {
    //     path: "/",
    //     name: "Searcher",
    //     component: () => import("../components/Searcher.vue"),
    // },
    {
        path: "/",
        name: "Home",
        component: () => import("../components/Home.vue"),
    },
    {
        path: "/favorites/",
        name: "Favorites",
        component: () => import("../components/Favorites.vue"),
    },
    {
        path: "/movie/:id",
        name: "Movie",
        component: () => import("../components/Movie.vue"),
    },


    
    //   {
    //     path: "/home",
    //     name: "Home",
    //     component: () => import("~/views/home/index.vue"),
    //   },
    //   {
    //     path: "/hero",
    //     name: "Hero",
    //     component: () => import("~/views/home/components/Hero.vue"),
    //   },
    //   {
    //     path: "/StoreTest",
    //     name: "StoreTest",
    //     component: () => import("~/views/home/components/StoreTest.vue"),
    //   },
    //   {
    //     path: "/:pathMatch(.*)*",
    //     redirect: "/404",
    //   },
];

const index = createRouter({
    history: createWebHistory(),
    routes,
});


export default index;




// import Vue from 'vue'
// import Router, { createRouter } from 'vue-router'
// import Searcher from "../components/Searcher.vue"
// import Favorites from "../components/Searcher.vue"


// const routes = [
//     {
//         path: '/',
//         component: Searcher
//     },
//     {
//         path: '/favorites/',
//         component: Favorites
//     },


// ]

// export default function (history: any) {
//     return createRouter({
//         history,
//         routes
//     })
// }

