<template>
    <div class="browse">
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
import EmoteBox from '../components/EmoteBox'

export default {
    name: 'Browse',
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
            .get('https://emotes.ml/api/emotes?api_key=bQ_3ukoR1MaK1gxQT6OPQqgOgmxx4_mckSkWtlU_T2QLlFcHsEI04jN3sS2BKyhS1-lSdzi6_GRa-bn9SAbe_GJhY32Qsvt6RBE3Ug-yOYO-qsi2ICprDFFVc8XXflZ5G8ixH59kWmrTzFH3eNyq3MTSdOP-bZ333PrvSbNxQVk')
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
.browse{
    margin: 0 auto;
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
    max-width: 960px;
    height: auto;
    margin: 0 auto;
    gap:1rem;
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
    background-color: #272643;
    font-family: Raleway;
    &:hover{
        border: none;
        border-radius: 0.5rem;
    }
    &:active{
        border: none;
        border-radius: 0.5rem;
    }
}
@media only screen and (max-width: 768px) {
    .emoteGrid{
        gap:2rem;
        grid-template-columns: 1fr;
    }
} 
</style>