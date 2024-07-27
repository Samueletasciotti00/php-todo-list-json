const { createApp } = Vue;

    createApp({
        data(){
            return{
                title: 'To do list',
                api: 'server.php',
                store: [],
                itemLista: ''
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
            },
            insert(){
                const data = {
                    itemLista: this.itemLista
                }
                axios.post(this.api, data, {
                    headers: { "Content-Type" : "multipart/form-data" }
                })
                    .then(res => {
                        console.log(res.data);
                        this.store = res.data;
                    })
                    this.itemLista = '';
            }
        },
        mounted(){
            this.getInfo();
        }
    }).mount('#app');