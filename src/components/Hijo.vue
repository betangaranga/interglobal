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
                msg: 'Welcome to Your Vue.js App'
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
