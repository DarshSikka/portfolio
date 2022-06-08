<template>
  <div :class="['about', $store.state.theme]">
    <h1 class="heading">About Me</h1>
    <div class="about-text">
      <div class="text">I am a student in Delhi Public School, R.K.Puram, New Delhi. I am a member of exun clan and have been a member of the student council twice. I am inclined to Mathematics and Sciences and plan to go into the field of engineering later on. I have been doing Web Development since grade 8. I'm also good at competitive programming, machine learning and app development. I play and watch tennis and am fond of music. I am a big fan of Rafael Nadal. Ed Sheeran is my favourite singer. I play the piano as well.     <a href="https://youtu.be/xvFZjo5PgG0" target="_blank">Don't click</a></div> 
    </div>

  </div>
</template>
<script>
export default {
  mounted(){
    document.title="About - Darsh Sikka - Full Stack Web Developer"
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
@keyframes emerge{
  from{
    width: 0%;
  }
  to{
    width: 80%;
  }
}
@keyframes fade-in{
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
}
.about{
  width: 100%;
}
.light{
  background: white;
  color: #23282c;
  height: 100vh;
}
/*rgb(29, 4, 109);*/
.dark{
  background: #23282c;
  color: white;
  height: 100vh;
}
.dark .heading{
  color: white !important;
}
.about-text{
  text-align: left;
  width: 100vw;
  margin: auto;
  background-image: url('/rafa.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 60%;
  display: flex;
  align-items: center;
  animation: emerge 2s linear 0s 1 alternate;
  border-radius: 16px;
}
.about-text .text{
  color: white;
  padding: 2rem;
  border-radius: 4px;
  background: rgba(35, 40, 44, 0.6);

}
.text{
    animation: fade-in 2s linear 0s 1 alternate;

}
@media(min-width: 700px){
  .about-text .text{
    width: 40%;
    margin: auto
  }
  .about-text{
    padding: 4rem;
    width: 80%;
  }
}
a{
  color: white;
}
.heading{
  font-family: 'Caveat', cursive;
  font-size: 3em;
  color: rgb(29, 4, 109);
}
</style>