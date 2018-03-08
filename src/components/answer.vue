<template>
  <form @submit.prevent="onSubmit()">
    <h2>{{poll.title}}</h2>

    <div
    v-for="(option, index) in poll.options" 
    :key="index"  class="form-group">

      <input type="radio" 
      name="poll"
      :value="option.id"
      v-model="picked">

      <label for="">{{option.text}}</label>
    </div>
    <input type="submit">
  </form>
</template>

<script>
import Api from '../api';


export default {
  // on nomme notre component  
  name:'answer',
  // la fonction data retourne les données INTERNES de notre component, data DOIT être une fonction  
  data(){
    return {
      // la données picked contiendra l'id de la réponse choisie
      picked: null,
      poll: {}
    }
  },
  // on déclare les méthodes du component  
  methods:{
    // la méthode onSubmit() est appelée lorsqu'on submit le formulaire    
    onSubmit(){
      Api.vote(this.picked);
    }
  },
  beforeCreate(){
    Api.getPollById(1).then((response) => {
      this.poll = response.data;
    }).catch((error) => {
      console.log(error);
    });
  }

}
</script>

<style>

</style>
