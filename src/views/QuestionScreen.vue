<template>
  <div class="main">
    <section id="question-screen-section">
      <img id="logo" alt="logo" src="../assets/logo.jpg">
      <h1>Question {{questionId }}</h1>
      <h2>{{question}}</h2>
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
      }
  },
  created(){
   this.getQuestion();
  },
  methods: {
    async getQuestion(){
      
      // Get question for session storage
      let sessionQuestion = JSON.parse(sessionStorage.getItem('questions'));

        this.questionId = 1;
        this.question = await sessionQuestion[0].question;        
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
 }
  h2{
    width:80%;
    font-family:  sans-serif;
    font-weight: 800;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
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
</style>
