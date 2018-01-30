<template lang="html">
  <div class="container">
     <div class="buscar">
     <input type="text" name="" value="">
     <button type="submit" class="btn bt-default">Buscar</button>
   </div>
  </div>
    </form>

  </div>

</div>

</template>

<script>
import '../db'
import firebase from 'firebase'
var db=firebase.database();
var ref=db.ref('libros')
alert(ref)
export default {
  name: 'buscar',
  data() {
    return {
      titulo: ''
    }
  }
}
</script>

<style lang="css">
.container{
display: grid;
grid-template-columns: repeat(12,1fr);
grid-template-rows: repeat(12,1fr);
}
.buscar{
  grid-column: 1/-1;
  grid-row: 2;
}
</style>
