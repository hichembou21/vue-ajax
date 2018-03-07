<template>
    <div> 
        
        <!-- <button @click="somme()" >go</button> -->
        <h2>{{poll.title}}</h2>
        <p>Nombre de vote Total: {{somme()}}</p>
        <div v-for="(option, index) in poll.options" :key="index">
                         
                <h5>{{option.text}}</h5>                 
                <div class="progress">
                    
                     <div class="percent progress-bar" role="progressbar" :style="`width: ${option.count*100/somme()}%`" :aria-valuenow="option.count" aria-valuemin="0" :aria-valuemax="somme()">
                        {{filtre(option.count*100/somme())}}%
                     </div>
                </div>
             
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'result',
    data: function () {
        return { 
            poll : {
                id: 1,
                title: "Que boire au petit dej ?",
                options: [
                        {id: 1, text: "Thé", count: 10},
                        {id: 2, text: "Café", count: 3},
                        {id: 3, text: "Jus d'orange", count: 15},
                        {id: 4, text: "Rien, je suis en retard", count: 5},
                    ]
            },
            // total: 0
        }
    },
    methods: {
        somme() {
            let total = 0;
            this.poll.options.forEach(function (item) {
                total += item.count; 
            });
            return total;
        },
        filtre(val) {
            return val.toFixed(2);
        },
    }
}
</script>

<style>
.percent {
    color: rgb(63, 5, 5);
}

p {
    color: blue
}
</style>