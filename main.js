const { createApp } = Vue;

    createApp({
        data(){
            return{
                title: 'To do list',
                api: 'server.php',
                store: []
            }
        },
        methods: {

            // Chiamata Axios
            getInfo(){
                axios.get(this.api)
                .then(res =>{
                    console.log(res.data);
                    this.store = res.data;
                    console.log(this.store);
                })

               
               
            }
        },
        mounted(){
            this.getInfo();
        }
    }).mount('#app');