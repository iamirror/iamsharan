document.getElementById('switch').onchange = function(){
  if(this.checked){
   window.location='../dark-index.html';
  } else {
   window.location='../light-index.html';
  }
};