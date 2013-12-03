var sematics = {};

sematics.canvas = function(){
    var canvas=document.getElementById('myCanvas');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='#FF0000';
    ctx.fillRect(0,0,80,100);

};

sematics.contextmenu = {
incFont:function(){
  document.getElementById("fontSizing").style.fontSize="larger";
},
decFont:function(){
  document.getElementById("fontSizing").style.fontSize="smaller";
},
changeImage:function(){
  var j = Math.ceil((Math.random()*39)+1);
  document.images[0].src="https://developer.mozilla.org/media/img/promote/promobutton_mdn" + j + ".png";
}
};

sematics.dragdrop = {
    allowDrop:function (ev){
        ev.preventDefault();
    },
    drag:function (ev){
        ev.dataTransfer.setData("Text",ev.target.id);
    },
    drop:function (ev){
        ev.preventDefault();
        var data=ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
    }
};

window.onload=function(){
   sematics.canvas();
   //sematics.contextmenu.changeImage();
   sematics.contextmenu.decFont();
   sematics.contextmenu.incFont();
   sematics.dragdrop.allowDrop();
   sematics.dragdrop.drag();
   sematics.dragdrop.drop();
};