const App1 = {
    data() {
        return {
            varString:"戻る"
        }
    },
}

const app = Vue.createApp(App1)

app.component('template1', {
    props:['prop1'],
    template: `
    <button>{{prop1}}</button>
    <br>
    `
})

app.mount('#app1')