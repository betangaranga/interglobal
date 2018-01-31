<template lang="html">
  <div class="container">
   <div class="panel-body">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="libro in libros">
          <td>{{libro.TITULO}}</td>
          <td>{{libro.AUTOR}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  </div>

</div>

</template>

<script>
import '../db'
import firebase from 'firebase'
var db=firebase.database();
var ref=db.ref('libros');
export default {
  firebase: {
    libros:ref
  },
  name: 'buscar',
  data() {
    return {
      titulo: ''
    }
  }
}
</script>

<style lang="css">
tr {
width: 100%;
display: inline-table;
table-layout: fixed;
}
th{
  text-align: center;
}

table{
 height:200px;
 display: -moz-groupbox;
 color: black;
 font-size: 10px;
}
tbody{
  overflow-y: scroll;
  height: 200px;
  width: 80%;
  position: absolute;
}
</style>
