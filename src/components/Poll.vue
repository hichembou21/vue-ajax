<template>
    <div>
        <h3>Sondage</h3>
        <create v-on:action1="poll => addpoll(poll)"/> 
        <answer v-on:action2="(poll, index) => voter(poll, index)"/>   
        <result/>   
        
    </div>
  
</template>

<script>
import create from './create.vue';
import answer from './answer.vue';
import result from './result.vue';



export default {
    name: 'poll',
    components: {
        create,
        answer,
        result
    },
    data: function () {
        return {
            polls : [
                {
                    "id": 0,
                    "title": 'Que boire au petit dej ?',
                    "options": [
                        {"text": "Thé", "count": 0},
                        {"text": "Café", "count": 0},
                        {"text": "Jus d'orange", "count": 0},
                        {"text": "Rien, je suis en retard", "count": 0},                    
                    ]
                },
                // {
                //     "id": 1,
                //     "title": 'sondage2',
                //     "options": [
                //         {"text": 'option1'},
                //         {"text": 'option2'},
                //         {"text": 'option3'},                                       
                //     ]
                // },
            ]
        }
    },
    methods: {
        addpoll(poll) {
            poll.id = this.polls.length;
            this.polls.push(poll);
        },
        deletpoll(poll) {
            this.polls.splice(this.polls.indexOf(poll), 1);
        },
        voter(poll, index) {
            for (let i = 0; i < poll.options.length; i++) {
            if (poll.options[i] === index) {
                this.polls[poll.id].options[i].count++; 
         }
        }
        }
    },
}
</script>

<style>

</style>
