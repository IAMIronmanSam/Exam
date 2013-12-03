var sematics = {};

sematics.canvas = function(){
    var canvas=document.getElementById('myCanvas');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='#FF0000';
    ctx.fillRect(0,0,80,100);

};

window.onload=function(){
   sematics.canvas();
};