const App1 = {
}

const app = Vue.createApp(App1)

app.component('template1', {
    template: `
    <button>ボタン</button>
    <br>
    `
})

app.mount('#app1')