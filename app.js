const numberOfImagesInCard = 8;
let $card1 = $("#card1");
let $card2 = $("#card2");
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
startGame();

function startGame(){
  let card1Images = pickUpAndRemoveRandomImages(imageResources);
  let card2Images = pickUpAndRemoveRandomImages(imageResources);

  let answerIndex = Math.floor(Math.random() * imageResources.length);
  let answerImage = imageResources[answerIndex];
  answerImage['class'] = 'answer';

  let card1AnswerIndex = Math.floor(Math.random() * (card1Images.length + 1));
  card1Images.splice(card1AnswerIndex,0,answerImage);

  let card2AnswerIndex = Math.floor(Math.random() * (card2Images.length + 1));
  card2Images.splice(card2AnswerIndex,0,answerImage);

  appendImage($card1,card1Images);
  appendImage($card2,card2Images);

  $('#game-field .answer').click(function(){
    alert('正解');
  });

  card1Images = [];
  card2Images = [];
  startGame();

}





function appendImage($targetCard,imageResourceArray){
  imageResourceArray.forEach(element => {
      $appendImage = $('<img>',element);
      $appendImage.addClass('character-image');
      $targetCard.append($appendImage);
  });
}

function pickUpAndRemoveRandomImages(targetImageRersourceArray){
  let returnArray = [];
  for(let i=0;i<numberOfImagesInCard -1;i++){
      let randomIndex = Math.floor( (Math.random() * targetImageRersourceArray.length));
      returnArray.push(targetImageRersourceArray[randomIndex]);
      targetImageRersourceArray.splice(randomIndex,1);
  }
  return returnArray;
}