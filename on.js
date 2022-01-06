const App1 = {
    data() {
        return {
            count:0
        }
    },
    methods: {
        increment: function () {
            this.count += 1
        }
    },
}

app = Vue.createApp(App1)
app.mount('#app1')