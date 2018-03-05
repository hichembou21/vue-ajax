<template>
    <div>
        <table class="table">
            <thead class="thead-dark">
                <th scope="col">id</th>                
                <th scope="col">title</th>
                <th scope="col">options</th>         
                <th scope="col">ops</th>     
            </thead>
            <tbody>
            <tr v-for="poll of polls" :key="poll.id"> 
                <td>{{poll.id}}</td>
                <td>{{poll.title}}</td>  
                <!-- <td v-for="(option, index) of poll.options" :key="index">
                    <span>{{option.text}}</span> 
                </td>   -->
                <select>
                    <option value="op" v-for="(option, index) of poll.options" :key="index">
                        {{option.text}}
                    </option>
                </select>
                <button @click="action2(poll)">delete</button>           
            </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
export default {
    name: 'affichepoll',
    props: {
        polls: {
            type: Array,
            required: true
        }
    },
    methods: {
        action2(poll) { 
          this.$emit('action2', poll);
        }
    }
}
</script>

<style>

</style>
