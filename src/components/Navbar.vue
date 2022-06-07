<template>
<nav :class="$store.state.theme">
    <div class="inside-nav">
    <router-link to="/" class="me rl">
      Darsh Sikka
    </router-link>
    <div class="pages">
      <div
        @click="phoneToggle()"
        class="menuIcon"
      >
        &equiv;
      </div>
      <div class="pag">
        <router-link to="/" class="rl">
          <linked>Home</linked>
        </router-link>
        <router-link to="/about" class="rl">
          <linked>About Me</linked>
        </router-link>
        <router-link to="/projects" class="rl">
          <linked>Projects</linked>
        </router-link>
        <router-link to="/skills" class="rl">
          Skills
        </router-link>
        <router-link to="/contact" class="rl">
          <linked>Contact <small>for your project</small></linked>
        </router-link>
      </div>
    </div>
    <button @click="ct()" class="theme-btn">
    <text v-if="$store.state.theme==='dark'">
    ☀️
    </text>
    <text v-else>
      🌙
    </text>
    </button>
    </div>
    <div class="phoneMenu" v-if="showPages">
    <router-link to="/" @click="phoneToggle()" class="rl">
          <linked>Home</linked>
        </router-link>
        <router-link @click="phoneToggle()" to="/about" class="rl">
          <linked>About Me</linked>
        </router-link>
        <router-link @click="phoneToggle()" to="/projects" class="rl">
          <linked>Projects</linked>
        </router-link>
        <router-link @click="phoneToggle()" to="/skills" class="rl">
          Skills
        </router-link>
        <router-link @click="phoneToggle()" to="/contact" class="rl">
          <linked>Contact <small>for your project</small></linked>
        </router-link>
  </div>
  </nav>
</template>
<script>
import "./Navbar.css";
export default {
  data() {
    return {
    showPages: false
    }
  },
  methods: {
    phoneToggle() {
      this.showPages = !this.showPages;
    },
    ct(){
      this.$store.commit("changeTheme");
      console.log('done');
    }
  },
  mounted() {
    console.log(this.phone);
    console.log(screen.width);
  },
};
</script>
<style scoped>
.theme-btn{
 background: none;
 border: none;
 font-size: 30px;
 cursor: pointer;
}
@media(min-width: 700px){
  .menuIcon{
    display: none;
  }
}
</style>