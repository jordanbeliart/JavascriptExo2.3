var image = document.getElementById('photo');
var num = 1;
image.addEventListener('click', size);
function size(){
  if(num == 1){
    num = 0;
    image.src ='assets/img/imgBigSize.jpg';
  } else {
    num = 1;
    image.src ='assets/img/imgSmallSize.jpg';
  }
};
