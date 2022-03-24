import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
    // Hash(https://google.com/#/search), History
    history: '',
    // pages
    // https://google.com
    routes: [
        {
            path: '/', // main page
            component: '',
        },
        {
            path: 'about',
            compoennt: '',
        }

    ]
})