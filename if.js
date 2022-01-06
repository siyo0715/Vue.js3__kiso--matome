const App1 = {
    data() {
        return {
            seen:true
        }
    },
    methods: {
        off: function () {
            this.seen = false
        }
    },
}

app1 = Vue.createApp(App1)
app1.mount('#app1')