<template>
<div :class="['skills', $store.state.theme]">
  <h1 class="heading">My Skills</h1>
  <div class="container">
    <div v-for="skill in skills" class="skill" :key="skill.name">
      <h2>{{ skill.name }}</h2>
      <img width="100" :src="skill.img" />
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
              img: "/html5.webp"
            },
            {
              name: "CSS",
              percent: 90,
              img: "/css.png"
            },
            {
              name: "SASS",
              img: "/scss.png"
            },
            {
              name: "Javascript",
              img: "/js.png"
            },
            {
              name: "React.js",
              img: "/react.svg"
            },
            {
              name: "Vue.js",
              img: "/vue.png"
            },
            {
              name: "Electron.js",
              img: "/electron.png"
              },
            {
              name: "Node.js",         
              img: "/node.png"
            },
            {
              name: "Express",
              img: "/express.png"
            },
            {
              name: "Python",
              img: "/python.png"
              
            },
            {
              name: "Flask",
              img: "/flask.png"
              
            },
            {
              name: "Django",
              img: "/django.jpeg"
            },
            {
              name: "MongoDB",
              img: "/mongodb.webp"
            },
            {
              name: "MySQL db",
              img: "/mysql.png"
              
            },
            {
              name: "SQLITE db",
              img: "/sqlite.png"
            },
            {
              name: "MERN stack",
              img: "/mern.png"
            },
            {
              name: "MEVN stack",     
              img: "/mevn.jpeg"
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
  padding-bottom: 1rem;
}
.skill-grp {
  width: 20%;
}
.skills{
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
  grid-template-columns: 25% 25% 25%;
}
.skill{
  border: 1px solid;
  padding: 2rem;
  margin-top: 1rem;
}
</style>
