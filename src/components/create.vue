<template>
  <div>
    <div class="container-col">
    <form class="container-col col-sm-10" v-on:submit.prevent="action1()">
        <fieldset class="form-group col-sm-6">
            <div class="form-group col-auto">
                <label>Title</label>
                <input type="text" name="title" class="form-control" placeholder="Title" v-model="poll.title">  
            </div>
            <div class="form-group col-auto" v-for="(option, index) in poll.options" :key="index">
                
                <input type="text" :name="`option${index+1}`" class="form-control plaintext" :placeholder="`Option${index+1}`" v-model="poll.options[index].text">
                <button type="button" @click="remove(index)" v-if="poll.options.length > 2" class="btn btn-link">Remove</button>
                
            </div>
            <div class="form-group col-auto">
            <button type="button" @click="add()" class="btn btn-link">Add</button>
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
                    {"text": '', "checked": false},
                    {"text": '', "checked": false}                    
                ]
            }
        }
    },
    methods: {
        action1() { 
          this.$emit('action1', Object.assign({}, this.poll));
        },
        add() {
            this.poll.options.push({"text":'', "checked": false});
        },
        remove(index) {
            this.poll.options.splice(index, 1);
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

fieldset {
    border: 1px solid #b9b5b5;
    border-radius: 5px;
    padding: 10px 0;
}

</style>
