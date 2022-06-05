<template>
<div  :class="['projects', $store.state.theme]">
<h1>Projects</h1>
<div class="project">
  <div class="btns">
    <form>
    <input name="pic" type="radio" value="0" v-model="no" @click="changeProject"/>
    <input name="pic" type="radio" value="1" v-model="no" @click="changeProject"/>
    <input name="pic" type="radio" value="2" v-model="no" @click="changeProject"/>
    <input name="pic" type="radio" value="3" v-model="no" @click="changeProject"/>
    <input name="pic" type="radio" value="4" v-model="no" @click="changeProject"/>
    </form>
  </div>
   <img :src="project.logo" width="200" height="200"/>
   <h2><a :href="project.link" target="_blank">{{project.name}}</a></h2>
   <p class="text" v-html="project.description"></p>
</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      no: "0",
      project: {
        name: "Mentacise",
          link: "https://healthchallenge.now.sh",
          description:
            "Mental stress and anxiety are very commonly reported disorders in school students specially during corona times, when they are not leaving the house and meeting their friends at school. Yoga is a form of mental excercize well known to reduce stress.We have created a challenge sharing portal where one can create open challenges related to mental health, mainly including mental yoga and stress relieving excercise postures. One can reply to these challenge videos with own video doing the same posture or challenging friends with a new pose. We believe this target based activity will be a fun filled stress buster for all across ages.",
          logo: "/mentacise-logo.png"
        },
      projects: [
        {
          name: "Mentacise",
          link: "https://healthchallenge.now.sh",
          description:
            "Mental stress and anxiety are very commonly reported disorders in school students specially during corona times, when they are not leaving the house and meeting their friends at school. Yoga is a form of mental excercize well known to reduce stress.We have created a challenge sharing portal where one can create open challenges related to mental health, mainly including mental yoga and stress relieving excercise postures. One can reply to these challenge videos with own video doing the same posture or challenging friends with a new pose. We believe this target based activity will be a fun filled stress buster for all across ages.",
            logo: "/mentacise-logo.png"
        },
        {
          name: "Revmate",
          link: "https://revmate.darshsikka.repl.co",
          description: `Looking for a great website to learn? RevMate is the best allowing you to test your knowledge with regular tests. Publish your articles and share knowledge.Not only can you store questions but also test your knowledge with tests at reqular intervals.Happy Learning! <br />New version coming out in august 2022 which would give a better fun filled platform for learning`,
          logo: "/revmate-logo.png"
        },
        {
          name: "Leaped", 
          link: "https://leaped.in",
          description: `Law Economics And Politics Editorial created for Sanyam Aggarwal and Divesh Sawhney`
        },
        {
          name: "Shiv Shakti Electricals Website - Pathankot", 
          link: "https://shivshaktielectricals.org",
          description: `Since our establishment in 1985, we are achieving all our goals of supplying transformers to various electricity boards and our product has been very successful and we have completed our warranties successfully. We are an ISO certified company and also BEE registered.`
        },
        {
          name: "Code The Camp - Incognito <webbed> interschool competition website (2nd place winner)",
          link: "https://codethecamp.darshsikka.repl.co",
          description: `Ever wondered who is behind all these amazing apps you use? It can be you one day. We are a coding bootcamp to make you be on the front page of a website as the creator of it. We are the top coding bootcamp for over 15 years and trust me when you enroll with us, you enroll with the best coding bootcamp out there.`,
          logo: '/codethecamp-logo.png'
        }
      ],
    };
  },
  methods: {
    changeProject(e){
      this.no=e.target.value;
      this.project=this.projects[Number(this.no)];
    },
  },
  mounted(){
    setInterval(()=>{
      if(this.no<this.projects.length-1){
      this.changeProject({target: {value: String((Number(this.no)+1))} } )
      }
      else{
        this.changeProject({
          target: {
            value: 0
          }
        })
      }
}, 10000)
  }
};
</script>
<style scoped>
  .projects{
    margin-top: 2.5rem;
    height: 100vh;
  }
  .light{
    background: white;
    color: rgb(29, 4, 109);
  }
  .light .heading{
    color: rgb(29, 4, 109)
  }
  .dark h1, .dark h2{
      color: white;
  }
  .text{
    width: 100%;
    margin: auto;
  }
  .project{
    border: 2px solid white;
    width: 50%;
    margin: auto;
    padding: 2rem;
  }
  .light .project{
    border: 2px solid #23282c;
  }
  .dark{
    background: #23282c;
    color: white;
  }
  a{
    text-decoration: none;
  }
  .light a{
    color: #23282c;
  }
  .dark a{
    color: white;
  }
</style>