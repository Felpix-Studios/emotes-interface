<template>
    <div class="EmoteBox">
        <router-link v-bind:emote="emote" :to="{path:'emotes/'+emote.slug}"><h3 v-on:click=copy data-tooltip="Emote Copied to Clipboard" :class="{tooltip:tooltip == true}"><a href="#x">{{ emote.name }}</a></h3></router-link>
        <p :id="emote.slug">Emote Path: {{emote.slug }}</p>
        <img alt="Emote Pic" :src="'https://emotes.ml/'+emote.slug"/>
    </div>
</template>

<script>
export default {
    name: 'EmoteBox',
    props:["emote"],
    data: function() {
        return {
            tooltip:false
        };
    },
    methods:{
        copy() {
            navigator.clipboard.writeText("https://emotes.ml/"+this.emote.slug);
            this.tooltip=true
            //var emotePath = document.getElementById(this.emote.slug);
            //emotePath.select();
            //emotePath.setSelectionRange(0, 99999);
            //document.execCommand("copy");
            setTimeout(() => this.tooltip = false, 1000);
        }
    }
}
</script>

<style lang="scss" scoped>
.EmoteBox{
    border: 2px solid #272643;
    border-radius: 0.5rem;
    padding:1rem 2rem;
    h3{
        position:relative;
        color:#363636;
        margin: 0;
        a{
            position:relative;
        color:#2C698D;
        margin: 0;
        }
        & a:hover{
            color: #272643;
            text-decoration: underline;
        }
    }
    a{
            svg{
                font-size: 1rem;
                margin-left: 1rem;
                &:hover{
                    opacity: 75%;
                }
            }
        }
    p{
    }
    img{
        margin:0 auto;
    }
    .tooltip{
        &:after {
            text-transform: none;
            content: attr(data-tooltip);
            position: absolute;
            color: #fff;
            background: #272643;
            padding: 8px 12px;
            width: -webkit-max-content;
            width: -moz-max-content;
            width: max-content;
            max-width: 200px;
            opacity: 0;
            pointer-events: stroke;
            left: 50%;
            top: 0;
            border-radius: 4px;
            transform: translate3d(-50%,0%,0);
            transition: all .5s ease;
            transition-delay: .5s;
        }
        &:hover {
            // TOOLTIP FADEIN AND TRANSLATION
            &:before, &:after {
                opacity: 1;
            }
            &:before {
                transform: translate3d(-50%,calc(-100% - 18px),0);
            }
            &:after {
                transform: translate3d(-50%,calc(-100% - 16px),0);
            }
        }
    }
}
</style>