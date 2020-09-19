<template>
  <div class="main">
    <section id="result-screen-section">
      <img id="logo" alt="logo" src="../assets/logo.jpg">
      <h1>Results</h1>
      <input type="text" v-model="inputName" id="input-name" placeholder="Name"/>
      <button id="btn-start" v-on:click="getName">Start</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ResultScreen',
  props: {
  },
  methods:{
    getName(){
      sessionStorage.setItem('user', this.inputName);
      console.log(sessionStorage.getItem('user'));
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
