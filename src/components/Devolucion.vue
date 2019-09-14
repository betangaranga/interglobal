<!-- a ver qué sale-->
<template lang="html">

<div class="container">
  <div class="form-group">
    <input type="text" v-model="buscarm" id="prest" placeholder="Busca por matrícula" name="" value="" class="form-control">
    <button type="button" name="button" @click='ber'>hola</button>
  </div>

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
          <td>{{alumno.IDL}}</td>
          <td>{{alumno.MAT}}</td>
          <td>{{alumno.NOMB}}</td>
          <td>{{alumno.FECHAS}}</td>
          <td>{{alumno.FECHAE}}</td>
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
var json1 = {
  prestamos: []
};
ref1.once('value').then(function(snapshot)
{
  snapshot.forEach(function(childSnapshot){
    var key = childSnapshot.key;
    var childData = childSnapshot.val();
    json1.prestamos.push(
      {
        "IDL": childData.idl,
        "MAT": childData.mat,
        "NOMB": childData.nomb,
        "FECHAS": childData.fechas,
        "FECHAE": childData.fechae
      }
                      )
  }


);
  console.log(json1);
var json_local2=JSON.stringify(json1.prestamos);
localStorage.setItem("testJSON2", json_local2);
}
);


export default {
  firebase:{
    prestamos: ref1
  },
  name: 'buscarm',

  data(){
    return{
      buscarm:"",
      prestamos_local2: JSON.parse(localStorage.getItem("testJSON2"))
    }
  },
  methods:{
    ber:function(){  console.log(JSON.stringify(json1.prestamos));
    }
  },
  computed:{
    alumnos_mat(){

      return this.prestamos_local2.filter(alumno => {return alumno.MAT.toString().includes(this.buscarm)})
                 }

           }


}

</script>

<style lang="css">



</style>
