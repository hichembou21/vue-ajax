<template>
  <div>
    <div class="container-col">
    <form class="container-col col-sm-10" v-on:submit.prevent="action1()">
        <fieldset class="form-group col-sm-6">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" placeholder="Title" v-model="poll.title">  
            </div>
            <div class="form-group">
                <label>Options</label>
                <input type="text" class="form-control" placeholder="Option1" v-model="poll.options[0].text">
                <input type="text" class="form-control" placeholder="Option2" v-model="poll.options[1].text"> 
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
    </form>
    </div>
  </div>

</template>

<script>

export default {
    name:'create',
    data: function () {
        return {
            poll : {
                "title": '',
                "options": [
                    {"text": ''},
                    {"text": ''}                    
                ]
            }
        }
    },
    methods: {
        action1() { 
          this.$emit('action1', Object.assign({}, this.poll));
        }
      }
}
</script>

<style>
.container-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
