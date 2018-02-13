<template>
    <div class="page1">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
import { EventBus } from '../event-bus.js';
var arr=[];
EventBus.$on('enviado', radio => {
  arr=radio;
});
    export default {
        name: 'Prestamo',
        data () {
            return {
                msg: arr
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    a {
        color: #42b983;
    }
</style>
