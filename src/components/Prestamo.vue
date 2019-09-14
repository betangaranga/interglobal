<template>
    <div class="page1">
      <input type="text" v-model="buscar"class="form-control" id="usr" placeholder="Matricula del Alumno">
      <div class="libros_prestar">
        <p>Se realizara el prestamo de :</p>
        <ul v-for="item in arr">
          <li>{{item}}
  </li>
        </ul>
      </div>
      <button type="button" class="btn btn-success" @click="prestar">FInalizar Prestamo</button>

    </div>
</template>

<script>
import { EventBus } from '../event-bus.js';
var arr=[];
EventBus.$on('enviado', radio => {
  arr=radio;
});
    export default {
        name: 'Prestamo',
        data () {
            return {
                arr: arr
            }
        }
    }
</script>

<style scoped>
button{
  position: relative;
  top: 0px;
}
    h1, h2 {
        font-weight: normal;
    }

    a {
        color: #42b983;
    }
    ul{
      position: relative;
      top: 0px;
    }
</style>
