<template>
    <div class="EmotePage">
        <h2>Emote Page</h2>
        <p>{{ emoteSlug }}</p>
    </div>
</template>

<script>
export default {
    name: 'EmotePage',
    data: function() {
        return {
            emoteSlug:this.$route.params.id
        };
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>

</style>