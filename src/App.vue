<template>
  <div id="app">
    <toDoForm @addCaixa="addCaixa($event)"/>
    <toDoList/>
  </div>
</template>
 
<script>
import toDoForm from "./components/ToDoForm.vue"
import toDoList from "./components/ToDoList.vue"

export default {
  name: 'App',
  components: {
    toDoForm, toDoList
  }, 
  data: function() {
    return{
    }
  }, methods:{
    addCaixa: function(event){
      this.caixinhas.push({titulo: event.titulo})
    }
  }
}
</script>

<style>
</style>
