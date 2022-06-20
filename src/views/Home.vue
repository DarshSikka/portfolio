<template>

  <div :class="['home', $store.state.theme]">
    <div class="hero">
      <div class="hero-text">
      <h1 class="heading">Darsh Sikka -  Full Stack Web Developer</h1>
      <p> I am a 14 year old web developer at Exun Clan (Tech Club@Delhi Public School RK Puram). I can do full stack web development. I have participated and won in various interschool competitions. I have made professional websites with domains bought by my clients. </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  mounted(){
    document.title="Home - Darsh Sikka - Full Stack Web Developer"
  }
};
</script>
<style>
@keyframes grow{
  from{
    height: 0
  }
  to{
    height: 100vh;
  }
}
[flexbox] {
  display: flex;
  justify-content: space-around;
}
body{
  margin: 0
}
.home{
margin-top: 2.5rem;
}
.hero{
  background-image: url('/me.jpeg');
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-repeat: none;
  background-size: cover;
  animation: grow 0.5s ease-in-out 0s 1 alternate;
}
.hero-text{
  background: rgba(255, 255, 255, 0.4);
  padding: 2rem;
  width: 40%;
  text-align: left;
  border-radius: 0.4rem;
}
.heading{
  font-family: 'Caveat', cursive;
  font-size: 3em;
}
@media(max-width: 700px){
  .hero-text{
    width: 100%;
  }
}
.hero-text h1{
  font-weight: 900;
  color: rgb(29, 4, 109);
}
.hero-text p{
  font-weight: 100;
  color: #212529;
}
@media(min-width: 700px){
.hero-text{
  margin-left: 20rem;
}
}
.dark .hero{
  background-image: url('/me-dark.jpeg')
}
</style>
