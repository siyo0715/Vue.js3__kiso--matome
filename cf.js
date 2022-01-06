const App1 = {
    data() {
        return {
            itemList:[
                { id: 0, text: '0番' },
                { id: 1, text: '1番' },
                { id: 2, text: '2番' },
            ]
        }
    },
}

const app = Vue.createApp(App1)

app.component('template1', {
    props:['prop1','prop2'],
    template: `
    <li>{{prop1.id}}は{{prop1.id}}{{prop2}}</li>
    <br>
    `
})

app.mount('#app1')