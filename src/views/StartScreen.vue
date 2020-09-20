<template>
  <div class="main">
    <section id="start-screen-section">
      <img id="logo" alt="logo" src="../assets/logo.jpg">
      <h1>Enter name</h1>
      <input type="text" v-model="inputName" id="input-name" placeholder="Name"/>
      <button type="button" id="btn-start" v-on:click="getName">Start</button>
    </section>
  </div>
</template>

<script>
import { getQuestions } from '../api/questions.js'
export default {
  name: 'StartScreen',
  props: {
  },
  created(){
     sessionStorage.clear();

  },
  methods:{
    async getName(){
      sessionStorage.setItem('user', this.inputName); 
      sessionStorage.setItem('counter', 1); 
      await this.getAllQuestions(); 
    
      this.$router.push({
        name: 'QuestionScreen'
      })       
    },
     async getAllQuestions(){
      
      // Data from the API
      let jsonData = await getQuestions();  
      
      // Stores the results array from the json object
      let data =  await jsonData.results;

      // Stores the questions in the session storage
      sessionStorage.setItem('questions', JSON.stringify(data).replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});/ig, ''));      
      
      // Stores number of questions in the session storage
      let numberQuestions = data.length;
      sessionStorage.setItem('numberQuestions', numberQuestions);

       // Stores number of correct answers in the session storage
      sessionStorage.setItem('correctAnswers', 0);
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
 
#start-screen-section{
  width:25%;
  margin-top:4rem;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right:auto;
}

#start-screen-text{
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
    margin-top:0.3rem;
    align-content: flex-end;
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
    background-color: darkslateblue;
    cursor: pointer;
  }
</style>
