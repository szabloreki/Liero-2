exports.renderMap = (arrMap)=>{
    let posX =0;
    let posY = 0;
    for( column of arrMap){
        for(let i =0; i<column.length; i++){

            if(column[i] == 1)graphics.drawImage(grass, posX, posY, 10, 10)
            if(column[i] == 2)graphics.drawImage(grass, posX, posY, 10, 10)
            posX += 10;
        }
        posY += 10;
        posX = 0;
    }
}
