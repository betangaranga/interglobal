<template lang="html">
  <div class="contenedor">
    <div class="header">
BIBLIOTECA INTERGLOBAL
    </div>
    <div class="menu">
      <p>
         <router-link to="/principal/Hijo">Realizar Prestamo</router-link>
         <router-link to="/principal/devolucion">Devolucion</router-link>
         <router-link to="/principal/Buscar">Busqueda de Libro</router-link>
<a href="#" v-on:click="logout">Salir</a>
       </p>
    </div>
    <div class="contenido">
      <router-view></router-view>

    </div>
    <div class="footer">
AQUI VA LA HORA
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'principal',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
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

.header {
    grid-column: 1 / -1;
    border-style: dotted;

}

.menu {
  grid-column: 1 / 4;
  grid-row: 2/-1;
  border-style: dotted;

}

.contenido {
    grid-column: 4 / -1;
    grid-row: 2/-1;
    border-style: dotted;

}

.footer {
    grid-column: 1 / -1;
    border-style: dotted;

}
</style>
