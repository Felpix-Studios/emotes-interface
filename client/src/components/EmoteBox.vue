<template>
    <div class="EmoteBox">
        <h3>{{ emote.name }}</h3>
        <p>Emote Path: /{{emote.slug }}</p>
        <img alt="Emote Pic" :src="'https://emotes.ml/'+emote.slug"/>
    </div>
</template>

<script>

export default {
    name: 'EmoteBox',
    props:["emote"],
    data: function() {
        return {
            Emote: null
        };
    },
    methods:{
        getEmote() {
        }
    }
}
</script>

<style lang="scss" scoped>
.EmoteBox{
    border: 2px solid #121212;
    border-radius: 0.5rem;
    padding:1rem 2rem;
    h3{
        margin: 0;
    }
    p{
    }
    img{
        margin:0 auto;
    }
}
</style>