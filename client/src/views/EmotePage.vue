<template>
    <div class="EmotePage">
        <h2>Emote Page</h2>
        <p>{{$route.params.id}}</p>
    </div>
</template>

<script>
export default {
    name: 'EmotePage',
    data: function() {
        return {
            emote:null
        };
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>

</style>