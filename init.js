exports.init = ()=>{
  let game =  document.querySelector('#Game');
  game.width = 924;
  game.height = 624;
  graphics = game.getContext('2d')
  graphics.fillStyle = "black";
  graphics.fillRect(0,0,game.width,game.height);
  graphics.fillStyle = "#555777"
  graphics.font = "50px Verdana"
  graphics.fillText("Liero 2",game.width/2 -65,game.height/2-80);
}
exports.loop = ()=>{
    this.update();
    this.render();
    window.requestAnimationFrame(this.loop)
}
exports.update = ()=>{
    this.obj.x +=5;
    this.obj.y +=5;
    console.log(this.obj.x, this.obj.y)
}
exports.obj = {
    x: 50,
    y: 25
}
exports.render = (x, y)=>{
        graphics.fillRect(this.obj.x,this.obj.y,50,50)
}




/* Liero 2 

1.co najpierw podstawy silnika:


1.renderowanie mapy
- stworzyc szablon mapy; - object lub JSON
- stworzyć pętle generującą tablicę szablonu;

( x,y mapy - for(tile - 1x1))
2.renderowanie objectow na mapie;
3.fizyka (grawitacja objectow); gravite(player, box, help everything)
4.fizyka (niszczenie mapy);










*/
