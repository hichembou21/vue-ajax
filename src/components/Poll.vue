<template>
    <div>
        <h3>Sondage</h3>
        <Create v-on:action1="poll => addpoll(poll)"/> 
        <AffichePoll :polls="polls" v-on:action2="poll => deletpoll(poll)"/>   
    </div>
  
</template>

<script>
import Create from './Create.vue';
import AffichePoll from './AffichePoll.vue';


export default {
    name: 'poll',
    components: {
        Create,
        AffichePoll
    },
    data: function () {
        return {
            polls : [{
                    "id": 0,
                    "title": 'sondage1',
                    "options": [
                        {"text": 'option1'},
                        {"text": 'option2'}                    
                    ]
                },
                {
                    "id": 1,
                    "title": 'sondage2',
                    "options": [
                        {"text": 'option1'},
                        {"text": 'option2'},
                        {"text": 'option3'},                                       
                    ]
                },
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
        }
    },
}
</script>

<style>

</style>
