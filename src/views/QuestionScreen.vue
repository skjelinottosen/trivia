<template>
  <div class="main">
    <section id="question-screen-section">
      <img id="logo" alt="logo" src="../assets/logo.jpg">
      <h1>Question {{questionId }}</h1>
      <h2>{{question}}</h2>
      <section  id="btn-alternative-section">
        <button class="btn-alternative">{{alternativeA}}</button>
        <button class="btn-alternative">{{alternativeB}}</button>
        <button class="btn-alternative">{{alternativeC}}</button>
        <button class="btn-alternative">{{alternativeD}}</button>
      </section>
    </section>
  </div>
</template>

<script>


export default {
  name: 'QuestionScreen' 
  ,
  data(){
      return{
        questionId: Number,
        question: String,
        alternativeA: String,
        alternativeB: String,
        alternativeC: String,
        alternativeD: String,

      }
  },
  created(){
   this.getQuestion();
  },
  methods: {
    async getQuestion(){
      
      // Get question for session storage
      let sessionQuestion = JSON.parse(sessionStorage.getItem('questions'));
      this.questionId = parseInt(sessionStorage.getItem('counter'),10);
      this.question = sessionQuestion[0].question;  
      this.alternativeA =  sessionQuestion[0].correct_answer; 
      this.alternativeB =  sessionQuestion[0].incorrect_answers[0]; 
      this.alternativeC =  sessionQuestion[0].incorrect_answers[1]; 
      this.alternativeD =  sessionQuestion[0].incorrect_answers[2]; 
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width:90%;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right:auto;  
}
 h1{
    width:100%;
    font-family:  sans-serif;
    color:darkslateblue;
    font-weight: 900;
    letter-spacing: 0.1rem;
    font-size: 1.8rem;
    margin:0.0rem;
    margin-left:0rem;
    margin-top:2rem;
 }
  h2{
    width:70%;
    font-family:  sans-serif;
    font-weight: 800;
    letter-spacing: 0.1rem;
    font-size: 1.4rem;
    margin:0.0rem;
    margin-top:0.8rem;
    margin-left: auto;
    margin-right:auto; 
    
 }
 
 
#question-screen-section{
  width:100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right:auto;
}

#question-screen-text{
  width:100%;
  margin-left: auto;
  margin-right:auto; 
}
#logo{
  width:10%;  
  margin-top:0.8rem;
  
}

#btn-start{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  letter-spacing: 0.1rem;
  background-color: orange;
  color:white;
  border: none;
  margin-top: 0.3rem;
  padding: 0.2rem;
  width:100%;
  height:2.5rem;
  font-size: 1.1rem;
  margin-left:auto;
  margin-right:auto;
}

  #btn-start:hover{
    background-color: gray;
    cursor: pointer;
  }

#btn-alternative-section{
  width:74%;
  display:flexbox;
  justify-content: center;
  margin-top:2rem;
  margin-left:auto;
  margin-right:auto;

}
  .btn-alternative{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  letter-spacing: 0.1rem;
  background-color: orange;
  color:white;
  border: none;
  margin-top: 0.3rem;
  padding: 0.2rem;
  width:48%;
  height:4rem;
  font-size: 1.1rem;
  margin-left: 0.12rem;
  margin-right: 0.12rem;
 }
    .btn-alternative:hover{
    background-color: darkslateblue;
    cursor: pointer;
  }
</style>
