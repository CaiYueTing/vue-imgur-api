<template>
    <div>
        Please wait....
    </div>
</template>


<script>
import {mapActions} from 'vuex';
export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created(){
        this.finalizeLogin(window.location.hash);
    }
    // created()  (lifecycle)
    //window.location.hash  呈現 #字號後面的東西
}
</script>


<style>

</style>
