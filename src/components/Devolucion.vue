<!-- a ver qué sale-->
<template lang="html">

<div class="container">
  <div class="form-group">
    <input type="text" v-model="buscarm" id="prest" placeholder="Busca por matrícula" name="" value="" class="form-control">
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
export default {
  firebase:{
    prestamos: ref1
  },
  name: 'buscarm',

  data(){
    return{
      buscarm:""
        }
  },
  computed:{
    alumnos_mat(){

      return this.prestamos.filter(alumno => {return alumno.mat.toString().includes(this.buscarm)})
                 }

           }


}

</script>

<style lang="css">



</style>
