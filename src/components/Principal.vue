<template lang="html">
  <div class="contenedor">

    <div class="menu">
<ul>
         <li>
           <p><router-link to="/principal/Buscar">Busqueda de Libro</router-link></p>

</li>
<li>
  <p><router-link to="/principal/devolucion">Devolucion</router-link></p>
</li>
<li>
<a href="#" v-on:click="logout">Salir</a>
</li>
</ul>

    </div>
    <div class="contenido">
      <router-view></router-view>

    </div>
    <div class="footer">
      <span>{{datenow}}</span>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import * as moment from 'moment';
export default {
  name: 'principal',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      datenow:""
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    time() {
      var self = this
      //moment.locale('es')
      this.datenow = moment().format('D MM YYYY, h:mm:ss a')

      setInterval(self.time, 1000)
    }
  },
  mounted: function(){
    this.time()
  }
}
</script>

<style lang="css">

.contenedor > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #ffeead;
}
.contenedor{
  height: 590px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(12,1fr);


}
ul{
  position: relative;
text-align: center;
font-size: 20px;
padding: 10px;
list-style: none;
top: -60px;
}
li >   p,a{
  margin-top:50px;
  margin-bottom: 50px;
font-style: normal;
color: white;
text-decoration: none;
}


.menu {
  grid-column: 1 / 3;
  grid-row: 1/-1;
  border-style:

}

.contenido {
    grid-column: 3 / -1;
    grid-row: 1/-1;

}

.footer {
    grid-column: 1 / -1;

}
</style>
