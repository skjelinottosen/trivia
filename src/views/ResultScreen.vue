<template>
  <div class="main">
    <section id="result-screen-section">
      <img id="logo" alt="logo" src="../assets/logo.jpg">
      <h1>Results</h1>
      <h2>Player: {{user}}</h2>
      <h3> Score: {{correctAnswers}}/{{numberQuestions}}</h3>   
      <button type="button" id="btn-newGame" v-on:click="newGame">New game</button> 
    </section>
  </div>
</template>

<script>
export default {
  name: 'ResultScreen',
  props: {
  },
   data(){
    return{
        correctAnswer: String,
        numberQuestions: String,
        user: String
    }
  },
  created(){
    this.numberQuestions = parseInt(sessionStorage.getItem('numberQuestions'),10);
    this.correctAnswers = parseInt(sessionStorage.getItem('correctAnswers'),10);
    this.user = sessionStorage.getItem('user');
  },
  methods:{
    newGame(){
      this.$router.push({
        name: 'StartScreen'
      }) 
      sessionStorage.clear();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width:80%;
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
    font-size: 1.6rem;
    margin:0.0rem;
    margin-top:1rem;
    margin-left:0rem;
 }
 h2{
    width:100%;
    font-family: sans-serif;
    color:#404040;
    font-weight: 800;
    letter-spacing: 0.1rem;
    font-size: 1.4rem;
    margin:0.0rem;
    margin-top:0.4rem;
    margin-left: auto;
    margin-right:auto; 
 }
  h3{
    width:100%;
    font-family: sans-serif;
    color:orange;
    font-weight: 900;
    letter-spacing: 0.1rem;
    font-size: 1.8rem;
    margin:0.0rem;
    margin-top:0.0rem;
    margin-left: auto;
    margin-right:auto; 
 }
 
#result-screen-section{
  width:25%;
  margin-top:4rem;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right:auto;
}

#result-screen-text{
  width:100%;
  margin-left: auto;
  margin-right:auto; 
}
#logo{
  width:100%; 
  margin-left: auto;
  margin-right:auto; 
}

 #input-name{
    width:100%;
    margin-left: auto;
    margin-right:auto; 
    padding: 0.36rem;
    align-content: flex-end;
 }

#btn-newGame{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  letter-spacing: 0.1rem;
  background-color: orange;
  color:white;
  border: none;
  margin-top: 1rem;
  padding: 0.2rem;
  width:90%;
  height:2.5rem;
  font-size: 1.1rem;
  margin-left:auto;
  margin-right:auto;
}

  #btn-newGame:hover{
    background-color: darkslateblue;
    cursor: pointer;
  }
</style>
