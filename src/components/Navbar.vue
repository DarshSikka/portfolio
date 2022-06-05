<template>
<div :class="$store.state.theme">
  <nav>
    <div class="me">
      Darsh Sikka
    </div>
    <div class="pages">
      <div
        @click="phoneToggle()"
        v-if="phone"
        class="menuIcon"
        className="phoneMenu"
      >
        &equiv;
      </div>
      <div v-if="showPages" class="pag">
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
  </nav>
  </div>
</template>
<script>
import "./Navbar.css";
export default {
  data() {
    return {
      showPages: screen.width > 500,
      phone: screen.width < 500,
    };
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
</style>