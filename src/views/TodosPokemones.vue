<template>
    <div class="container" >
        <div class="col-12" style="text-align: center;">
            <label for="" style="color: white; font-weight: bold;">ID: </label>
            <InputText type="text" v-model="idPokemon" style="margin-left: 5px; margin-right: 5px;" placeholder=" ID o name" />
            
            <Button label="Buscar" @click="searhPokemon" />

        </div>
<br>
        <div  class="col-4 card-poke" v-if="storePokemon.item">
            <Card  class="col-12">
                <template #title style="font-weight: bold;"> {{ storePokemon.item.name }} </template>
               
                <template #content >
            <img :src="storePokemon.item.sprites.front_default" alt="">
              <p ><strong>ID:</strong> {{ storePokemon.item.id }}</p>
              <p><strong>Height:</strong> {{ storePokemon.item.height }}</p>
              <p><strong>Weight:</strong> {{ storePokemon.item.weight }}</p>
                </template>
            </Card>
        </div>
        <div v-else style="justify-content: center; text-align: center;">
            <h1 style="color: yellow; font-weight: bold;">Ingrese un ID o nombre de pokemon para visualizar</h1>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {usePokemonStore} from '../stores/pokemon'

const storePokemon = usePokemonStore()
const idPokemon = ref()


const searhPokemon = async() => {
    await storePokemon.fetchPokemon(idPokemon.value)
}
</script>

<style >
body{
    background: grey;
}
.container{
    display: block;
    justify-content: center;
    align-items: center;
    

}
.card-poke{
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>