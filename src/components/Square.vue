<template>
    <button @click="handleClick()">
        {{text}}
    </button>
</template>

<script>
export default {
    data(){
        return {
            text: ""
        }
    },
    updated(){
        this.text=this.getVal(this.id);
    },
    methods: {
        handleClick(){
            if(this.getOver()){
                return;
            }
            if(this.text!==""){
                return;
            }
            this.text = this.getX()?"X":"O";
            this.$emit("change", {
                value: this.text,
                id: this.id
            })
        }
    },
    props: ['id', 'val', 'getX', 'getOver', 'getVal'],
}
</script>
<style scoped>
button{
    font-size: 4em;
}
</style>