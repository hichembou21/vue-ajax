<template>
    <div class="container-col">
    <form class="container-col col-sm-10" v-on:submit.prevent="action2()">
        <fieldset class="form-group col-sm-6">
            <h2> {{poll.title}} </h2> 
            <div v-for="(option, index) in poll.options" :key="index">
                
                <label>{{option.text}}</label>
                <input type="radio" name="poll" :value="option.id" v-model="picked">
            </div>         
            <button type="submit" class="btn btn-primary">Voter</button>
        </fieldset>
    </form>
    </div>
</template>

<script>
export default {
    name: 'affichepoll',
    // props: {
    //     polls: {
    //         type: Array,
    //         required: true
    //     }
    // },
    data: function () {
        return { 
            picked : null,
            poll : {
                title: "Que boire au petit dej ?",
                options: [
                        {id: 1, text: "Thé"},
                        {id: 2, text: "Café"},
                        {id: 3, text: "Jus d'orange"},
                        {id: 4, text: "Rien, je suis en retard"},
                    ]
            }
        }
    },
    methods: {
        action2() {        
            console.log(this.picked);
        },
    }
}
</script>

<style>


</style>
