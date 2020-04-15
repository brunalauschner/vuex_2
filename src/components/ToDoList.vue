<template>
  <div id="caix">
      <h5 id="titu">Caixas:</h5>
      <div class="caixinh" v-for="(coisa, index) in coisas" :key = "index" >
          {{coisa.titulo}}
      </div>
  </div>
</template>
 

<script>

export default {
 name: "ToDoList", 
 computed: {
     coisas(){
         return this.$store.state.caixinhas
     }
 }
}
</script>


<style>
#caix{
    width: 450px;
    height: 200px;
    border: 1px solid #FFF;
    margin: 30px auto 10px auto;
    display: flex;
    flex-wrap: wrap;
}
.caixinh{
    width: 70px;
    height: 50px;
    border: 1px solid #FFF;
    margin: 30px 20px 0px 0px;
    text-align: center;
    line-height: 50px;
    user-select: none;
    cursor: pointer;
    background-color: burlywood;
}
#titu{
    margin: 5px 0 0 5px;
}
</style>