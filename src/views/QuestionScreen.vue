<template>
  <div class="main">
    <section id="question-screen-section">
      <img id="logo" alt="logo" src="../assets/logo.jpg">
      <h1>Question {{questionId }}</h1>
      <h2>{{question}}</h2>
      <section  id="btn-alternative-section">
        <button type="button" v-on:click="getAnswer(alternativeA)" class="btn-alternative">{{alternativeA}}</button>
        <button type="button" v-on:click="getAnswer(alternativeB)" class="btn-alternative">{{alternativeB}}</button>
        <button type="button" v-on:click="getAnswer(alternativeC)" class="btn-alternative">{{alternativeC}}</button>
        <button type="button" v-on:click="getAnswer(alternativeD)" class="btn-alternative">{{alternativeD}}</button>
      </section>
      <p id="p-newGame" v-on:click="newGame">New game</p> 
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
        correctAnswer: String,
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
        // Gets number of questions from session storage
        const numberQuestions = parseInt(sessionStorage.getItem('numberQuestions'),10);
      
        // Gets current question number from session storage
        this.questionId = parseInt(sessionStorage.getItem('counter'),10);
      
        // Checks if there are more questions left
        if(this.questionId < numberQuestions){
      
          // Gets questions from session storage
          const sessionQuestion = JSON.parse(sessionStorage.getItem('questions'));
          
          // Matches the index of the question list
          let counter = this.questionId-1;
          this.question = sessionQuestion[counter].question;  
          this.correctAnswer = sessionQuestion[counter].correct_answer;
          // Alternative in sorted order
          let alternatives = [
            this.correctAnswer, 
            sessionQuestion[counter].incorrect_answers[0],
            sessionQuestion[counter].incorrect_answers[1],
            sessionQuestion[counter].incorrect_answers[2]
          ];

          // Shuffles the alteratives 
          let alternativesShuffled = this.shuffle(alternatives)
          this.alternativeA =  alternativesShuffled[0];
          this.alternativeB =  alternativesShuffled[1]; 
          this.alternativeC =  alternativesShuffled[2]; 
          this.alternativeD =  alternativesShuffled[3]; 
        }
      },
      // Gets the answer from the user
      async getAnswer(answer){
        try{
          const numberQuestions = parseInt(sessionStorage.getItem('numberQuestions'),10);
          this.questionId++;
          
          // Counts correct answers in session storage
          if(answer == this.correctAnswer){
            let correctAnswers = parseInt(sessionStorage.getItem('correctAnswers'),10)+1;
            sessionStorage.setItem('correctAnswers', correctAnswers)
          }

          // Redirects to result if the quiz is done
          if(this.questionId > numberQuestions){
            this.$router.push({
              name: 'ResultScreen'
            })  
          }     
          // Counts questions
          sessionStorage.setItem('counter',  this.questionId); 

          // Next question
          await this.getQuestion();
      }
      catch(error){
         console.error(error);
    }
  },   
    // Shuffles the alternatives using the Fisher–Yates shuffle
    shuffle(array){
      let currentIndex = array.length, tempValue, randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
      }
      return array;
    },
    newGame(){
      try{
        this.$router.push({
          name: 'StartScreen'
        }) 
        sessionStorage.clear();
       }
        catch(error){
          console.error(error);
      }       
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
    font-family: sans-serif;
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
    font-family: sans-serif;
    color:#404040;
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
#p-newGame{
  font-family:sans-serif !important;
  font-weight: 800;
    letter-spacing: 0.1rem;
  background-color:white;
  color:#404040;
  border: none;
  margin-top: 2rem;
  padding: 0.2rem;
  width:28%;
  height:1.5rem;
  font-size: 0.9rem;
  margin-left:auto;
  margin-right:auto;
}
  #p-newGame:hover{
   color: darkslateblue;
   text-decoration: underline;
    cursor: pointer;
  }
</style>
