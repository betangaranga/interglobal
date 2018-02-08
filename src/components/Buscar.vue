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
    <button type="button" class="btn btn-success" v-if="checke">Prestar</button>
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
var db = firebase.database();

var ref = db.ref('libros');
var ref2 = db.ref('alumnos');
export default {
  firebase: {
    libros: ref,
    alumnos: ref2
  },

  name: 'buscar',
  data() {
    return {
      //titulo: '',
      buscar: "",
      checado:"",
      checke:false,
      radio :[]

    }
  },
  methods: {
    agregar: function(e) {
      e.preventDefault();
      e.stopPropagation();
      if(this.radio.length<3){
        if(!this.radio.includes(this.checado)){
      this.radio.push(this.checado)
      console.log(this.checado);
      this.checke=true;
    }
    else{
      alert("Este libro ya lo agregaste")
    }
    }
    else{
      alert("Estas pendejo")
    }

  },
  quitar:function(key,e){
    e.preventDefault();
    e.stopPropagation();

    this.radio.splice(key,1);
  }

  },
  computed: {
    libros_filtrados() {
      return this.libros.filter(libro => {
          return libro.TEMA1.includes(this.buscar) || libro.TEMA2.includes(this.buscar) || libro.TITULO.includes(this.buscar) || libro.AUTOR.includes(this.buscar)
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
