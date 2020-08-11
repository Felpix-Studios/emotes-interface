<template>
    <div class="popular">
        <h2>Browse Emotes</h2>
        <p>Find emotes you're interested in</p>
        <input type="text" placeholder="Oof, JS, Thonk..." v-model="searchField">
        <p><i class="fas fa-search"></i><span>Browse</span></p>
        <div class="emoteGrid">
            <EmoteBox v-bind:emote="emote" v-for="emote in searchEmotes" v-bind:key="emote.slug"/>
        </div>
    </div>
</template>

<script>
import EmoteBox from './EmoteBox'

export default {
    name: 'Popular',
    components:{EmoteBox},
    data: function() {
        return {
            popularEmotes: [
                {
                name:"Javascript",
                slug:"js"
            },
                {
                name:"Oof",
                slug:"oof"
            }
            ],
            searchField:""
        };
    },
    mounted(){
        this.$axios
            .get('Insert key')
            .then(response=>(this.popularEmotes=response["data"]))
        console.log(this.popularEmotes)
    },
    computed:{
        searchEmotes:function(){
            return this.popularEmotes.filter((emote)=>{
                return emote.name.toLowerCase().match(this.searchField.toLowerCase())
            })
        }
    }
}
</script>

<style lang="scss">
.popular{
    svg{
            vertical-align: middle;
            font-size: 2rem;
        }
    p{
        margin:1rem 0;
        span{
            margin-left: 0.5rem;
        }
    }
}
.emoteGrid{
    display: grid;
    width: 960px;
    height: auto;
    gap:2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
h2{
    font-size:2rem;
}
p{
    font-size: 1rem;
}
input{
    padding: 0.5rem 1rem;
    border: none;
    border:solid 1px #121212;
    border-radius: 0.5rem;
    font-family: Raleway;
    &:hover{
        border: none;
        border:solid 1px #121212;
        border-radius: 0.5rem;
    }
    &:active{
        border: none;
        border:solid 1px #121212;
        border-radius: 0.5rem;
    }
}
button{
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    color: white;
    background-color: #88BED9;
    font-family: Raleway;
    margin-left:1rem;
    &:hover{
        border: none;
        border-radius: 0.5rem;
    }
    &:active{
        border: none;
        border-radius: 0.5rem;
    }
}
</style>