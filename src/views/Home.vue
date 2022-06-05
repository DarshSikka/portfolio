<template>
  <div class="home">
    <div class="hero">
      <div class="hero-text">
      <h1>Darsh Sikka -  Full Stack Web Developer</h1>
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
};
</script>
<style>
[flexbox] {
  display: flex;
  justify-content: space-around;
}
body{
  margin: 0
}
.hero{
  background-image: url('/me.jpeg');
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-repeat: none;
  background-size: cover;
}
.hero-text{
  background: rgba(255, 255, 255, 0.4);
  padding: 2rem;
  width: 40%;
  text-align: left;
  border-radius: 0.4rem;
}
.hero-text h1{
  font-weight: 900;
}
.hero-text p{
  font-weight: 350;
}
.hero-text p, h1{
  color: rgb(29, 4, 109);
}
@media(min-width: 700px){
.hero-text{
  margin-left: 20rem;
}
}
</style>
