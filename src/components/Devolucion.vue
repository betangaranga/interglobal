<!-- a ver qué sale-->
<template lang="html">

<div class="container">
  <div class="form-group">
    <input type="text" v-model="buscarm" id="prest" placeholder="Busca por matrícula" name="" value="" class="form-control">

  </div>
  <button type="button" @click= "prestamos_atrasados" class="btn">Préstamos vencidos</button>

  <div class="panel-body">
    <table class="table">
      <thead>
        <tr>
          <th>Id libro</th>
          <th>Id alumno</th>
          <th>Nombre alumno</th>
          <th>Fecha de préstamo</th>
          <th>Fecha de entrega</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="alumno in alumnos_mat">
          <td>{{alumno.idl}}</td>
          <td>{{alumno.mat}}</td>
          <td>{{alumno.nomb}}</td>
          <td>{{alumno.fechas}}</td>
          <td>{{alumno.fechae}}</td>
        </tr>

      </tbody>

    </table>
  </div>



</div>

</template>

<script>
import '../db'
import firebase from 'firebase'
var db = firebase.database();
var ref1 = db.ref('prestamos');
var cont = 0;
export default {
  firebase: {
    prestamos: ref1,

  },
  data() {
    return {
      buscarm: "",
      prest_a: []
    }
  },
  methods: {
    prestamos_atrasados: function() {
      cont = 1;
      prestamosat: {
        for (var i = 0; i < this.prestamos.length; i++) {
          var fea = this.prestamos[i].fechae;
          console.log(fea);
          var pa = moment(fea, "MMDDYYYY").fromNow();
          console.log(pa);
          var substring = "in";


          if(pa.includes(substring)){
            this.prestamos[i].vencimiento= "vencido";
            console.log(this.prestamos[i].vencimiento);
          }

        }

      }
    }




  },
  computed: {
    alumnos_mat() {

if(cont==0){
  //alert(cont);
  return this.prestamos.filter(alumno => {
    return alumno.mat.toString().includes(this.buscarm)
  })


}

else if(cont==1){
  //alert(cont);
  var vigenciavencida= "vencido";
  return this.prestamos.filter(alumno => {
    return alumno.vencimiento.includes(vigenciavencida)
  })
}

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
  margin: auto;
  grid-column: -1/-2;
  grid-row: 1/2;
  margin-left: inherit;

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
