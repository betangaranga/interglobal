<template>
<div class="page1">
  <input type="text" v-model="buscar" class="form-control" id="usr" placeholder="Matricula del Alumno">
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
import '../db'
import firebase from 'firebase'
import {
  EventBus
} from '../event-bus.js';
var db = firebase.database();
var ref_libros = db.ref('libros');
var ref_prestamos = db.ref('prestamos');
var ref_alumnos = db.ref('alumnos');
var arr = [];
EventBus.$on('enviado', radio => {
  arr = radio;
});
export default {
  firebase: {
    alumnos: ref_alumnos
  },
  name: 'Prestamo',
  data() {
    return {
      arr: arr,
      buscar: ""
    }
  },
  methods: {
    prestar: function() {
      if (this.alumnos.some(item => item.MATRICULA.toString() === this.buscar)) {
        for (var i = 0; i < arr.length; i++) {
          ref_prestamos.push({
            //AQUI VAN LAS FECHAS::::::
            "fechae": 4555,
            "fechas": 6667,
            "idl": arr[i],
            "mat": this.buscar,
            "nomb": "puto"
          })
        }
        alert("Agregado con exito")

      } else {
        alert("No existe la boleta")
      }

    }
  }
}
</script>

<style scoped>
button {
  position: relative;
  top: 0px;
}

h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

ul {
  position: relative;
  top: 0px;
}
</style>
