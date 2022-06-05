<template>
  <Navbar />
  <router-view class="main"/>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
</style>
