/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;



//document.querySelector('#current-' + activePlayer).textContent=dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x=document.querySelector('#score-1').textContent;

document.querySelector('.dice').style.display='none';


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click',function(){
    dice = Math.floor(Math.random() * 6) + 1;//random number
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    console.log(dice);
    
    if(dice!==1){
        //add score 
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;
    }else{
        //next player
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;
        activePlayer=== 0?activePlayer = 1:activePlayer = 0;
        
//        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
//        document.querySelector('.player-'+activePlayer+'-panel').classList.add('');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
    }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
    scores[activePlayer]+=roundScore;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    activePlayer=== 0?activePlayer = 1:activePlayer = 0;
   //  document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    roundScore=0;
    
    if(scores[activePlayer]>=30){
        document.querySelector('#name-'+activePlayer).textContent='Winner';
    }
   // nextPlayer();
});

function nextPlayer(){
     activePlayer=== 0?activePlayer = 1:activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
     document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
     
}