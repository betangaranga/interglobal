<template>
<div class="login">
  <div class="imagen">
    <img src="../assets/logo.png" alt="">
  </div>
  <div class="usuario">
    <label for="user" id="user_label">Usuario</label>
    <input type="text" v-model="usuario" name="" value="" id="user">
  </div>
  <div class="password">
    <label for="pass" id="pass_label">Contraseña</label>
    <input type="password" v-model="password" name="" value="" id="pass">
  </div>
  <button v-on:click="ingresar" id="boton" name="button">Ingresar</button>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function() {
    return {
      usuario: '',
      password: ''
    }
  },
  methods : {
    ingresar:function(){
      firebase.auth().signInWithEmailAndPassword(this.usuario, this.password).then(
        (user) => {
          this.$router.replace('principal')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      );
    }
  }
}
</script>

<style scoped>
.login {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30 px 1fr 30px;
  justify-content: center;
  align-content: center;
}

#user_label {
  margin: 20px;
}

#pass_label {
  margin: 8px;
}

#boton {
  background-color: #800000;
  color: white;
  width: 25%;
  grid-column: 2/13;
  margin: auto;
}

.imagen {
  width: 100%;
  height: 100%;
  grid-column: 2/3;

}
.imagen img{
position: relative;
right: -50px;
}

.usuario {
  grid-column: 2/3;
}

.password {
  grid-column: 2/3;
}
</style>
