/*
function play(){
    //step-1 Hide the home screen .To hide the screen add the class hidden to the home section 
    const homeSection=document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    
    //step-2 Show the playground
    const playgroundSection=document.getElementById('playground');
    playgroundSection.classList.remove('hidden');
} */
function handleKeyboardButtonPress(event){
    const playerPressed=event.key;
    console.log('Player Pressed',playerPressed);
    //Stop the game if pressed ESC
    if(playerPressed==='Escape'){
        gameOver();
    }
    //Get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);
    //Check Matched or Not
    if(playerPressed==expectedAlphabet){
        console.log('You get a point');

        const currentScore=getTextElementValueById('current-score');
        const updatedScore=currentScore+1;
        setTextElementValueById('current-score',updatedScore);
        /*
        //Update score
        //1.Get the current score
        const currentScoreElement=document.getElementById('current-score');
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        console.log(currentScore);
        //2.increase the score by 1
        const newScore=currentScore+1;
        //3.show the update score
        currentScoreElement.innerText=newScore; */
        //Start a new round
        console.log('You have pressed Correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('You Missed')
        const currentLife=getTextElementValueById('current-life');
        const updatedLife=currentLife-1;
        setTextElementValueById('current-life',updatedLife);
        if(updatedLife===0){
            console.log('Game Over');
            gameOver();
        }
        /*
        //step 1:Get the current life number
        const currentLifeElement=document.getElementById('current-life');
        const currentLifeText=currentLifeElement.innerText;
        const currentLife=parseInt(currentLifeText);
        console.log(currentLife);
        //step 2:reduce the life count
        const newLife=currentLife-1;
        //step 3:Display the updated life count
        currentLifeElement.innerText=newLife;  */
    }
}
//Capture Keyboard keypress
document.addEventListener('keyup',handleKeyboardButtonPress)
function continueGame(){
//Step:1 Generate a random alphabet
const alphabet=getARandomAlphabet();
console.log('your random alphabet',alphabet);

//Set randomly generated alphabet to the screen(show it)
const currentAlphabetElement= document.getElementById('current-alphabet');
currentAlphabetElement.innerText=alphabet;
//set Background color
setBackgroundColorById(alphabet);
}
function play(){
    //Hide EveryThing Show Only The PlayGround
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('playground');

    //Reset Score And Life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame()
}
function gameOver() {
    hideElementById('playground');
    showElementById('final-score');
    //Update final score
    //1.Get the final score
    const lastScore=getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    //Clear the last selected alphabet highlight
    const currentAlphabet=getElementTextValueById('current-alphabet');
    console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}