export const getQuestions = () => {
    return fetch(`https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`)
            .then(response => response.json())        
}