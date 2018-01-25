<template>
    <div class="page1">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Child1',
        data () {
            return {
                msg: 'ESTO SE ACTUALIZA DEPENDIENDO DE LA OPCIONffffffffff'
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
