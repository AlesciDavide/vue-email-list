const {createApp} = Vue

createApp({
    data(){
        return{
            arrayListEmail: [],
        }
    },
    methods:{
        getData(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    this.arrayListEmail.push(response.data.response);
                });
            };
            console.log(this.arrayListEmail);
        },
    },

    created(){
        this.getData();
    }

}).mount('#app')