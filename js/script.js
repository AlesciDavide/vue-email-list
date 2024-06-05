const {createApp} = Vue

createApp({
    data(){
        return{
            arrayListEmail: [],
            arrayListEmailMoment: [],
        }
    },
    methods:{
        getData(){

            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    /* this.arrayListEmail.push(response.data.response); */
                    this.arrayListEmailMoment.push(response.data.response);
                });
            };
            this.copyArray();
        },
        copyArray: function(){
            this.arrayListEmail = this.arrayListEmailMoment
        },
    },
    created(){
        this.getData();
    }

}).mount('#app')