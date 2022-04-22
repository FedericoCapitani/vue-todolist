const app = new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [
            {
                text: 'Preparare il pranzo',
                done: true
            },
            {
                text: 'Mettere a posto il garage',
                done: true
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
            if(this.newTask === ''){
                alert('Non hai inserito un Task!')
            }else{
                this.tasks.push({text: this.newTask, done:false});
            }
            this.newTask = ''
        },
        removeTask(i){
            this.tasks.splice(i, 1)
        },
        completed(){
            console.log('clicca completed');
            this.tasks.done = true
        }
    }
})