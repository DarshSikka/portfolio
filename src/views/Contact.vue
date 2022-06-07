<template>
<div :class="['contact', $store.state.theme]">
<h1 class="heading">Contact Me</h1>
<div class="social">
  <a href="https://github.com/DarshSikka" target="_blank"><svg :fill="$store.state.theme==='light'?'#000000':'#ffffff'" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="36px" height="36px"><path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"/></svg></a>
  <a href="https://www.instagram.com/thedeadlyd21/" target="_blank"><img class="logo" src="/insta.webp" /></a>
</div>
  <form>
    <label>Subject: </label>
    <input v-model="subject" type="text" placeholder="Request for project website for John Doe"/>
    <label>Message: </label>
    <textarea v-model="description" type="text" rows="10" placeholder="Kindly make the website with features - blabla, lorem ipsum, authentication"></textarea>
    <a :href='`mailto:darshsikka7349@gmail.com?subject=${subject}&body=${description}`' class="submit">Submit</a>
  </form>
</div>
</template>
<style scoped>
@keyframes fade-in{
  from{
    opacity: 0;
  }
  to{
    opacity: 1
  }
}
.contact{
  margin-top: 2.5rem;
  height: 100vh;
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
.dark a{
  color: white;
}
.light a{
  color:#23282c;
}
.logo{
  width: 30px;
}
form{
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  text-align: left;
}
input, textarea{
  border-radius: 4px;
  border: none;
  padding: 0.5rem 1rem;
}
.light input, .light textarea{
  background: #23282c;
  color: white;
}
.light input::placeholder, .light textarea::placeholder{
  color: white;
}
.submit{
  width: max-content;
  padding: 0.5rem 8rem;
  margin: auto;
  margin-top: 1rem;
  text-decoration: none;
  border-radius: 8px;
}
.light .submit{
  background: #212529;
  color: white;
}
.dark .submit{
  background: white;
  color: #212529;
}
.light .heading{
  color: rgb(29, 4, 109);
}
@media(max-width: 700px){
  form{
    width: 80%;
  }
}
</style>
<script>

export default {
  data(){
    return {
      subject: "",
      description: "",
    }
  }
}
</script>
