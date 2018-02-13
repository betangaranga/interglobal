<template lang="html">
  <div class="container">
    <div class="form-group">
  <input type="text" v-model="buscar"class="form-control" id="usr" placeholder="Tema, Autor, Titulo">

</div>
   <div class="panel-body">
    <table class="table">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Clasificacion</th>
          <th>Prestar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="libro in libros_filtrados">
          <td>{{libro.TITULO}}</td>
          <td>{{libro.AUTOR}}</td>
          <td>{{libro.CLASIFICACION}}</td>
          <td>
            <div class="radio_boton">
              <label class="checkbox-inline"><input type="radio" :value="libro.CLASIFICACION" v-model="checado" @change="agregar( $event)" selected=""></label>
            </div>
          </td>

        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-success" v-if="checke" @click="prestar">Prestamo</button>
    <div class="libros_prestados"  v-if="checke">
      <ul v-for="(radie,index) in radio" id="lista">
        <li>{{radie}}
        <button type="button" class="botoncito" v-if="checke" @click="quitar(index, $event)">Quitar</button>
</li>
      </ul>
    </div>
  </div>
  </div>



</template>

<script>
import '../db'
import firebase from 'firebase'
import { EventBus } from '../event-bus.js';
var db = firebase.database();

var ref = db.ref('libros');
var json = {
    libros: []
};
  ref.once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
      json.libros.push({
        "ID":childData.ID ,
         "CLASIFICACION":childData.CLASIFICACION ,
         "AUTOR":childData.AUTOR,
          "TITULO":childData.TITULO,
          "TEMA1": childData.TEMA1,
           "TEMA2":childData.TEMA2
      })
  });
  var json_local=JSON.stringify(json.libros);
  var upper = json_local.toUpperCase();
  localStorage.setItem("testJSON", upper);


      });
export default {
  name: 'buscar',
  data() {
    return {
      //titulo: '',
      buscar: "",
      checado: "",
      checke: false,
      radio: [],
      libros_local: JSON.parse(localStorage.getItem("testJSON"))


    }
  },
  methods: {
    agregar: function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.radio.length < 3) {
        if (!this.radio.includes(this.checado)) {
          this.radio.push(this.checado)
          console.log(this.checado);
          this.checke = true;
        } else {
          alert("Este libro ya lo agregaste")
        }
      } else {
        alert("Estas pendejo")
      }

    },
    quitar: function(key, e) {
      e.preventDefault();
      e.stopPropagation();

      this.radio.splice(key, 1);
    },
    prestar: function() {
      EventBus.$emit('enviado', this.radio);
      this.$router.replace('prestamo')

    }

  },
  computed: {

    libros_filtrados() {
      var upperbus = this.buscar.toUpperCase();

      return this.libros_local.filter(libro => {
          return libro.TEMA1.includes(upperbus) || libro.TEMA2.includes(upperbus) || libro.TITULO.includes(upperbus) || libro.AUTOR.includes(upperbus)
        }

      )
    }
  }
}
</script>

<style lang="css">

.container{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(12,1fr);
justify-content: center;
align-content: center;
}
.form-group{
  margin: auto;

grid-column: 1/-1;
grid-row: 1/2;
}
.panel-body{
  grid-column: 1/-1;
  grid-row: 2/-1;
  margin-left: auto;
  margin-right: auto;
border-style: dotted;
}
.btn {
  position: relative;
  top: 170px;
}
table{
 height:100px;
 display: -moz-groupbox;
 color: white;
 font-size: 10px;
}
tbody{
  overflow-y: scroll;
  height: 200px;
  width: 80%;
  position: absolute;
}
tr {
width: 100%;
display: inline-table;
table-layout: fixed;
}
th{
  text-align: center;
  color: white;
}
.libros_prestados{
  border-style: dotted;
  position: relative;
    top: 100px;
    width: 40%;
    height: 40%;
    font-size: 10px;
}
#lista{
  position: relative;
  top: 0px;
  left: -40px;
}
.botoncito{
  float: right;
  position: relative;
  top: 0px;
  color: white;
  background-color: black;
}
</style>
