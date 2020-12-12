console.log('hello');

function appendImages($targetCard, imageResourceArray) {
  imageResourceArray.forEach(element => {
    $targetCard.append($('<img>',element));
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
appendImages($card1,imageResources);
appendImages($card2,imageResources);