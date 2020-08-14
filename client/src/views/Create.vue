<template>
    <div class="create">
        <h2>Create Emotes</h2>
        <p>Upload here!</p>
        <input v-model="emoteName" placeholder="Emote Name"/>
        <br/>
        <input v-model="path" placeholder="Emote Path"/>
        <br/>
        <input type="file" name="filename" class="fileInput">
        <br/>
        <button>Submit</button>
    </div>
</template>

<script>
export default {
    name: 'Create',
    data: function() {
        return {
            emoteName:"",
            path:"",
            img:""
        };
    },
    mounted(){
    
    }
}
</script>

<style lang="scss">
input{
    margin: 1rem 0;
    font-family: Raleway;
}
.fileInput{
    border: none;
    padding: 0.5rem 1rem;
    &:hover{
        border: none;
    }
    &:active{
        border: none;
    }
}
input #file-upload-button{
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    color: white;
    background-color: #bae8e8;
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