<template>
<div id="ferramentas">

    <h5 id="info">Nova Caixa:</h5>
    <input id="caixaTexto" type="text" placeholder="Nova Tarefa?" v-model="titulo">
    <button id="botao" @click="addCaixa">OK</button>
 
  </div>
</template>

<script>
export default {
    name: "ToDoForm",
    computed: {
        titulos(){
            return this.$store.state.caixinhas
        }
    },

    data: function(){
        return{
            titulo: ""
        }
    }, methods: {
        addCaixa: function(){
            this.$store.commit('addCaixa', {
                titulo: this.titulo
            })
        }
    }

}
</script>

<style>
#ferramentas{
        width: 380px;
        height: 100px;
        border: 1px solid #FFF;
        margin: 5px auto 0 auto;
        padding: 10px;
    }
    #caixaTexto{
        width: 300px;
        height: 30px;
        margin: 0 0 0 5px;
        border-radius: 5px;
    }
    #botao{
        width: 50px;
        height: 36px;
        margin: 0 0 0 12px;
        background-color: blueviolet;
        border-radius: 15px;
    }
    #info{
        margin: 0 0 20px 0;
    }
</style>