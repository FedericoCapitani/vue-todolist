const app = new Vue({
    el: '#app',
    data: {
        newTask: 'Nuovo task',
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
    methods: {
        addTask(){
            console.log(this.newTask);
            this.tasks.push({text: this.newTask, done:false})
            console.log(this.tasks);
            this.newTask = 'Nuovo task'
        },
        removeTask(i){
            this.tasks.splice(i, 1)
        }
    }
})