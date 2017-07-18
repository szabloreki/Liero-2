exports.init = ()=>{
  let game =  document.querySelector('#Game');
  game.width = 924;
  game.height = 624;
  graphics = game.getContext('2d')
  graphics.map =  require('./engine/mapRender');
  this.tile();
}
exports.loop = ()=>{
    this.update();
    this.render();
    window.requestAnimationFrame(this.loop)
}
exports.update = ()=>{
}
exports.render = (x, y)=>{
    graphics.map.renderMap(this.map1)
}
exports.map1 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 0, 1, 1, 0, 1, 1],
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 1, 0, 1, 1, 0, 1, 1]
]
exports.tile = ()=>{
    grass = new Image();
    sand = new Image();
    grass.src = "./tile/grass.png";
    sand.src = "./tile/ground.png"
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

todo:
- System dzwięku jakiś skrypt podłączony;
- backendowy serwer z NodejS do grania przez sieć
    - tabela wynikow
    - granie przez internet webSocketIO
    - importowanie map i pobieranie z serwera
- gameplay:
    - kampania (jak z worms ileś misji)
    - deatchmatch - (1 vs 1) - lub online (2 vs 2)
    - capture the flag - opcjonalnie;

- effects:
    -  particle do śmierci gracza (efekt rozprysku krwii)
    -  particle do broni itd.;

  addons:
    - Edytor map ( o dodawania własnych tile robienie z tego mapy itd)

  options of scene:
    - edytowanie ilośći amunicji w broniach itd.; (electron więc z czytywanie z pliku pobieranie configu przez internet)
*/
