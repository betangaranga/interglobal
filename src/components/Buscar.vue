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
              <label class="checkbox-inline"><input type="radio" :value="libro.ID" v-model="checado" @change="agregar();" checked=""></label>

            </div>
          </td>

        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-success">Prestar</button>

  </div>
  </div>



</template>

<script>
import '../db'
import firebase from 'firebase'
var db = firebase.database();
var ref = db.ref('libros');
export default {
  firebase: {
    libros: ref
  },
  name: 'buscar',
  data() {
    return {
      titulo: '',
      buscar:""
    }
  },
  methods:{
    agregar:function(){

      console.log(this.checado);

    }
  },
  computed :{
libros_filtrados(){
  return this.libros.filter(libro => {
    return libro.TEMA1.includes(this.buscar) || libro.TEMA2.includes(this.buscar) ||  libro.TITULO.includes(this.buscar) ||  libro.AUTOR.includes(this.buscar)
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

</style>
