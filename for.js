const App1 = {
    data() {
        return {
            todos: [
                { text: 'いち' },
                { text: 'にー' },
                { text: 'さん' },
            ]
        }
    }
}
app1 = Vue.createApp(App1)
app1.mount('#app1')