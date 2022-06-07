<template>
<div :class="['skills', $store.state.theme]">
  <h1 class="heading">My Skills</h1>
  <div class="container">
    <div v-for="skill in skills" class="skill" :key="skill.name">
      <h3>{{ skill.name }}</h3>
      <input type="range" min="0" max="100" @change="fix($event, skill.percent)" :style="{'accent-color': `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`}" :value="skill.percent"/>
      <h4>{{skill.percent}}% experience</h4>
    </div>
  </div>
</div>
</template>
<script>
export default {
  methods: {
    fix(e, sk){
      e.target.value = sk;
    }
  },
  mounted(){
    document.title="Skills - Darsh Sikka - Full Stack Web Developer"
  },
  data() {
    return {
      skills: [
            {
              name: "HTML",
              percent: 99
            },
            {
              name: "CSS",
              percent: 90
            },
            {
              name: "SASS",
              percent: 90
            },
            {
              name: "Javascript",
              percent: 99
            },
            {
              name: "React.js",
              percent: 99
            },
            {
              name: "Vue.js",
              percent: 99
            },
            {
              name: "Electron",
              percent: 70
              },
            {
              name: "Node.js",         
              percent: 99   
            },
            {
              name: "Express",
              percent: 99
            },
            {
              name: "Python",
              percent: 70
              
            },
            {
              name: "Flask",
              percent:  90
              
            },
            {
              name: "Django",
              percent: 60
            },
            {
              name: "MongoDB",
              percent: 99
             
            },
            {
              name: "MySQL db",
              percent: 80
              
            },
            {
              name: "SQLITE db",
              percent: 90
            },
            {
              name: "MERN stack",
              percent: 99
            },
            {
              name: "MEVN stack",     
              percent: 99       
            },
    ]
    };
  },
};
</script>
<style scoped>
@keyframes fade-in{
  from{
    opacity: 0;
  }
  to{
    opacity: 1
  }
}
.heading{
    font-size: 3em;
    font-family: 'Caveat', cursive;
  }
.container{
  display: flex;
  justify-content: space-around;
}
.skill-grp {
  width: 20%;
}
.skills{
  margin-top: 2.5rem;
  animation-name: fade-in;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
.light{
  background: white;
  color: #23282c;
}
.dark{
  background: #23282c;
  color: white;
}
.dark h1{
  color: whitesmoke;
}

.container{
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>
