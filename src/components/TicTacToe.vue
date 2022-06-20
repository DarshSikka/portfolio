<template>
    <div class="board">
        <Square v-for="id in ids" @change="changed" :getVal="getVal" :getOver="getOver" :getX="getX" :val="values[id]" :key="id" :id="id"/>
    </div>
    X {{score.X}} : O {{score.O}}
    <br />
    {{winText}}
    <br />

    <button @click="restart()" v-if="over">Restart</button>
</template>
<style scoped>
    .board{
        margin-top: 2.5rem;
        height: 70vh;
        width: 70vh;
        margin: auto;
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-template-rows: 33.3% 33.3% 33.3%;
    }
</style>
<script>
import Square from './Square.vue';
import checkWinner from './wincheck'
export default {
data(){
    return {
        ids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        values: ['', '', '', '', '', '', '', '', ''], 
        x: true,
        winText: "",
        over: false,
        score: {
            X: 0,
            O: 0
        }
    }
},
methods: {
    getX(){
        return this.x
    },
    getOver(){
        return this.over
    },
    getVal(id){
        return this.values[id]
    },
    changed(obj){
        this.values[obj.id]=obj.value;
        this.x = !this.x;
        const winner = checkWinner(this.values);
        console.log(winner);
        if(winner){
            this.winText =  `${winner} wins`;
            this.score[winner]++;
            this.over=true;
        }
        else if (!this.values.includes('')){
            this.winText="Draw";
            this.over=true;
        }
    },
    restart(){
        if(this.over){
        this.over=false;
        this.values=['','','','','','','','','']
        }
    }
},
components: {
    Square
}
}
</script>
