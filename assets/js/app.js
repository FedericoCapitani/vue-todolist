const app = new Vue({
    el: '#app',
    data: {
        tasks: [
            {
                text: 'Preparare il pranzo',
                done: true
            },
            {
                text: 'Mettere a posto il garage',
                done: false
            },
            {
                text: 'Finire l\'esercizio di Boolean',
                done: false
            },
            {
                text: 'Studiare la documentazione Vuejs',
                done: false
            }
        ]
    },
    methods: {}
})