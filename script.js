score=0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3') ;

setTimeout(() =>{
    audio.play()

},1000);
  var img = null;     
  function init(){      
     img = document.getElementById('myimg');    
     img.style.position = 'absolute';         
     img.style.left = '50px';
    
    
  }         
  function moveRight(){      
     img.style.left = parseInt(    
     img.style.left) + 100 + 'px'; 
      
  }  
  window.onload = init;   
  var img = null;     
  function init(){      
     img = document.getElementById('myimg');    
     img.style.position = 'absolute';         
     img.style.left = '50px';
    
    
  }         
  function moveleft(){      
     img.style.left = parseInt(    
     img.style.left) - 100 + 'px'; 
      
  }  
  window.onload = init;  

 

  setInterval(() =>{
      hero = document.querySelector('.hero');
     gameover = document.querySelector('.gameover');
      villan = document.querySelector('.villan');
      
      dx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));
      dy = parseInt( window.getComputedStyle(hero, null).getPropertyValue('top'));
      vx =  parseInt(window.getComputedStyle(villan, null).getPropertyValue('left'));
      vy = parseInt (window.getComputedStyle(villan, null).getPropertyValue('top'));

      offsetX = Math.abs(dx-vx);
      offsetY = Math.abs(dy-vy);

      if(offsetX< 120 && offsetY <95){
          gameover.style.visibility = 'visible';
          villan.classList.remove('villanAni')
          hero.classList.remove('animateHero')

          audiogo.play();
          setTimeout(() =>{
              audiogo.pause();
              audio.pause();
          },1000);

      }
  
      else  if(offsetX <130 && cross) {
          score+=1;
          updateScore(score);
          cross = false;
          setTimeout(() =>{
              cross=true;

          },500);
      }
    

  },100);

  function updateScore(score){
      scorecont.innerHTML = "Your Score : " + score
  }
