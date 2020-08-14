<template>
    <div class="nav">
        <router-link to="/"><h1>emotes.ml</h1></router-link>
        <div class="navLinks">
            <router-link to="/"><a href="#">Browse</a></router-link>
            <router-link to="/create"><a href="#">Create</a></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>
<style lang="scss">
.nav{
    overflow: hidden;
    margin: 0;
    text-align: center;
    width: 100%;
    height: auto;
    padding: 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-size: 1.5rem;
        color: #272643;
    }
    .navLinks{
        a{
            color:#2C698D;
            &:hover{
                text-decoration: underline;
                color:#272643;
            }
        }
        a:first-child{
            margin-right: 2rem;
        }
    }
}
@media only screen and (max-width: 768px) {
    .nav{
    h1{
        font-size: 1.5rem;
    }
    .navLinks{
        a{
            &:hover{
            }
        }
        a:first-child{
            margin-right: 1rem;
        }
    }
}
}
</style>