<template>
<div :class="['skills', $store.state.theme]">
  <h1>My Skills</h1>
  <div class="container">
  <div v-for="skill in skills" class="skill-grp" :key="skill.title">
    <h2>{{ skill.title }}</h2>
    <div v-for="nam in skill.groups" :key="nam.name">
      <h3>{{ nam.name }}</h3>
      <h5>{{ nam.description }}</h5>
    </div>
  </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        {
          title: "Frontend",
          groups: [
            {
              name: "HTML",
            },
            {
              name: "CSS",
            },
            {
              name: "SASS",
            },
            {
              name: "Vanilla Javascript",
            },
            {
              name: "React.js",
            },
            {
              name: "Vue.js",
            },
            {
              name: "Electron",            },
          ],
        },
        {
          title: "Backend",
          groups: [
            {
              name: "Node.js",            },
            {
              name: "Express",
            },
            {
              name: "Python",
              
            },
            {
              name: "Flask",
              
            },
            {
              name: "Django",
              
            },
          ],
        },
        {
          title: "Databases",
          groups: [
            {
              name: "MongoDB",
             
            },
            {
              name: "MySQL",
              
            },
            {
              name: "SQLITE",
            },
          ],
        },
        {
          title: "Stack",
          groups: [
            {
              name: "MERN",
            },
            {
              name: "MEVN",            },
          ],
        },
      ],
    };
  },
};
</script>
<style>
.container{
  display: flex;
  justify-content: space-around;
}
.skill-grp {
  width: 20%;
}
.skills{
  margin-top: 2.5rem;
  height: 100vh;
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
</style>
