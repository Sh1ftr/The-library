function isTouching (obj1, obj2) {
    
  //collision
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
        return true;
    }
    else {
        return false;
    }
}

function bounceOff(r1, r2){
      //bounceOff
  if (r1.x - r2.x < r2.width/2 + r1.width/2
    && r2.x - r1.x < r2.width/2 + r1.width/2) {
        r1.velocityX = r1.velocityX * (-1);
        r2.velocityX = r2.velocityX * (-1);
  }
  if (r1.y - r2.y < r2.height/2 + r1.height/2
    && r2.y - r1.y < r2.height/2 + r1.height/2){
        r1.velocityY = r1.velocityY * (-1);
        r2.velocityY = r2.velocityY * (-1);
  }
}