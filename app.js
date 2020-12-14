function appendImages($targetCard,imageResourceArray){
    imageResourceArray.forEach(element => {
        $appendImage = $('<img>',element);
        $appendImage.addClass('character-image');
        $targetCard.append($appendImage);        
    });
}

let imageResources =[
  {'src':'img/yellow-triangle.png'},
  {'src':'img/yellow-square.png'},
  {'src':'img/yellow-circle.png'},
  {'src':'img/red-triangle.png'},
  {'src':'img/red-square.png'},
  {'src':'img/red-circle.png'},
  {'src':'img/blue-triangle.png'},
  {'src':'img/blue-square.png'},
  {'src':'img/blue-circle.png'},
  {'src':'img/green-triangle.png'},
  {'src':'img/green-square.png'},
  {'src':'img/green-circle.png'},
  {'src':'img/black-triangle.png'},
  {'src':'img/black-square.png'},
  {'src':'img/black-circle.png'},
];

let $card1 = $('#card1');
let $card2 = $('#card2');
const numberOfImagesInCard = 8;
appendImages($card1,pickUpAndRemoveRandomImages(imageResources));
appendImages($card2,pickUpAndRemoveRandomImages(imageResources));



function pickUpAndRemoveRandomImages(targetImageresourceArray){
  let returnArray = [];
  for(let i=0 ; i<numberOfImagesInCard -1; i++){
    let randomIndex = Math.floor(Math.random() * targetImageresourceArray.length);
    returnArray.push(targetImageresourceArray[randomIndex]);
    targetImageresourceArray.splice(randomIndex,1);
  }
  return returnArray;
}